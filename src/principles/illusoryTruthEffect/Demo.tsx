import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

interface Statement {
  id: number;
  text: string;
  truth: boolean;
  repeated: boolean;
}

const STATEMENTS: Statement[] = [
  { id: 1, text: "エベレストの標高は8,848mである。", truth: true, repeated: true },
  { id: 2, text: "人間の骨の数は206本である。", truth: true, repeated: true },
  { id: 3, text: "ナポレオンは当時の平均的なフランス人男性よりかなり背が低かった。", truth: false, repeated: true },
  { id: 4, text: "コアラは1日に約20時間眠る。", truth: true, repeated: false },
  { id: 5, text: "金魚の記憶は3秒しかもたない。", truth: false, repeated: false },
  { id: 6, text: "富士山は日本で一番高い山である。", truth: true, repeated: false },
];

// 露出フェーズで見せる順番（id 1,2,3を2回ずつ、合計6回表示）
const EXPOSURE_ORDER = [1, 2, 3, 3, 1, 2];
// テストフェーズで評価してもらう順番（既出と新規を混ぜる）
const TEST_ORDER = [4, 1, 5, 2, 6, 3];

type Stage = "intro" | "expose" | "test" | "result";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("intro");
  const [exposeIndex, setExposeIndex] = useState(0);
  const [ratings, setRatings] = useState<Record<number, number>>(
    Object.fromEntries(STATEMENTS.map((s) => [s.id, 3]))
  );

  const byId = (id: number) => STATEMENTS.find((s) => s.id === id)!;

  const handleExposeNext = () => {
    if (exposeIndex + 1 >= EXPOSURE_ORDER.length) {
      setStage("test");
    } else {
      setExposeIndex((prev) => prev + 1);
    }
  };

  const repeatedAvg =
    STATEMENTS.filter((s) => s.repeated).reduce((sum, s) => sum + ratings[s.id], 0) /
    STATEMENTS.filter((s) => s.repeated).length;
  const newAvg =
    STATEMENTS.filter((s) => !s.repeated).reduce((sum, s) => sum + ratings[s.id], 0) /
    STATEMENTS.filter((s) => !s.repeated).length;

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "intro" && (
        <>
          <DemoPrompt>
            これから、雑学的な文をいくつか見せます。正しいものも、間違っているものも混ざっています。まずはひととおり目を通してください。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={() => setStage("expose")}>
            始める
          </DemoButton>
        </>
      )}

      {stage === "expose" && (
        <>
          <DemoPrompt>{byId(EXPOSURE_ORDER[exposeIndex]).text}</DemoPrompt>
          <DemoButton variant="primary" onClick={handleExposeNext}>
            次へ（{exposeIndex + 1}/{EXPOSURE_ORDER.length}）
          </DemoButton>
        </>
      )}

      {stage === "test" && (
        <>
          <DemoPrompt>
            それぞれの文について、「本当らしさ」を1（嘘っぽい）〜5（本当っぽい）で評価してください。中には、さっき見せた文と初めて見る文が混ざっています。
          </DemoPrompt>
          {TEST_ORDER.map((id) => (
            <DemoSlider
              key={id}
              label={byId(id).text}
              value={ratings[id]}
              min={1}
              max={5}
              onChange={(v) => setRatings((prev) => ({ ...prev, [id]: v }))}
            />
          ))}
          <DemoButton variant="primary" onClick={() => setStage("result")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === "result" && (
        <DemoResult title="繰り返し見た文 と 初めて見た文 の平均評価">
          <p style={{ margin: "0 0 8px" }}>
            さっき2回見せた文の平均評価：{repeatedAvg.toFixed(1)} ／ 初めて見た文の平均評価：{newAvg.toFixed(1)}
          </p>
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {STATEMENTS.map((s) => (
              <li key={s.id}>
                {s.repeated ? "【既出】" : "【新規】"}
                {s.text}（あなたの評価：{ratings[s.id]} ／ 実際は{s.truth ? "本当" : "誤り"}）
              </li>
            ))}
          </ul>
          {repeatedAvg > newAvg ? (
            <DemoHint>
              繰り返し見た文の方が、真偽にかかわらず高く評価される傾向が出ましたね。心理学者ハッシャーらの実験でも、事前に「嘘も混ざっている」と伝えていたにもかかわらず、繰り返し接した文ほど真実だと評価されやすくなることが確認されています。見慣れている（処理しやすい）という感覚を、私たちは無意識に「正しさ」の手がかりとして使ってしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は繰り返しの影響があまり出ませんでしたね。多くの人は、繰り返し接した文ほど、その正しさとは無関係に「本当らしい」と感じてしまいます（真実性の錯覚）。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

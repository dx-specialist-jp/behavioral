import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

interface RoundDef {
  prompt: string;
  correctPercent: number;
  correctLabel: string;
  explanation: string;
}

const ROUNDS: RoundDef[] = [
  {
    prompt:
      "ある病気の有病率は1000人に1人です。この検査は病気の人を100%正しく陽性と判定し（見逃しなし）、健康な人を誤って陽性と判定する確率（偽陽性率）は5%です。ある人が検査で陽性反応が出ました。この人が本当に病気である確率は何%だと思いますか？",
    correctPercent: 1.96,
    correctLabel: "約2%",
    explanation:
      "1000人のうち病気の人は1人。残り999人の健康な人のうち5%、約50人が偽陽性になります。つまり『陽性』と判定される約51人のうち、本当に病気なのは1人だけ。計算すると正解は約2%です。1978年のキャスケルズらの調査では、ハーバード大学の医学生・研修医の約半数が『95%程度』と回答しましたが、実際にはこれほど低いのです。",
  },
  {
    prompt:
      "あるテロ検知システムは非常に高精度で、テロリストを99%の確率で正しく検知し、テロリストでない人を誤って『テロリスト』と判定する確率（偽陽性率）はわずか0.1%です。乗客100万人のうちテロリストは1人しかいないとします。『テロリスト』と判定されたある乗客が、本当にテロリストである確率は何%だと思いますか？",
    correctPercent: 0.1,
    correctLabel: "約0.1%",
    explanation:
      "テロリスト1人はほぼ確実に検知されますが、残り99万9999人の無実の乗客のうち0.1%、約1000人が誤って『テロリスト』と判定されます。つまり『陽性』と判定された約1001人のうち、本当のテロリストは1人だけ。どれほど検査精度が高くても、対象がまれであれば陽性判定のほとんどは誤検知になってしまいます。",
  },
];

export function Demo({ accentHue }: DemoProps) {
  const [guesses, setGuesses] = useState<(number | null)[]>(ROUNDS.map(() => null));
  const [current, setCurrent] = useState(50);
  const currentIndex = guesses.findIndex((g) => g === null);
  const finished = currentIndex === -1;

  const handleSubmit = () => {
    setGuesses((prev) => prev.map((g, i) => (i === currentIndex ? current : g)));
    setCurrent(50);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {!finished && (
        <>
          <DemoPrompt>{ROUNDS[currentIndex].prompt}</DemoPrompt>
          <DemoSlider
            label="あなたの見積もり"
            value={current}
            min={0}
            max={100}
            displayValue={`${current}%`}
            onChange={setCurrent}
          />
          <DemoButton variant="primary" onClick={handleSubmit}>
            回答する
          </DemoButton>
        </>
      )}

      {finished && (
        <DemoResult title="正解と解説">
          {ROUNDS.map((round, i) => (
            <p key={i} style={{ margin: "0 0 10px" }}>
              あなたの見積もり：{guesses[i]}% ／ 正解：{round.correctLabel}
              <br />
              {round.explanation}
            </p>
          ))}
          <DemoHint>
            検査の精度がどれほど高くても、対象がまれ（基準率が低い）であれば、陽性判定の大半は誤検知になり得ます。判断するときは目の前の結果だけでなく、まず母集団での発生率を確認しましょう。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

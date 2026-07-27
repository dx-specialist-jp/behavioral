import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const QUESTIONS = [
  { q: "休日はどちらで過ごしたい？", a: "家でゆっくり", b: "外に出かける" },
  { q: "初対面の人と話すとき、あなたは？", a: "相手の話をじっくり聞く", b: "自分から話しかける" },
  { q: "物事を決めるとき、あなたは？", a: "直感を大事にする", b: "じっくり考えてから決める" },
];

const TRAITS = ["高い共感力", "鋭い直感力", "強いリーダー気質", "優れた分析力"];

export function Demo({ accentHue }: DemoProps) {
  const [trait] = useState(() => TRAITS[Math.floor(Math.random() * TRAITS.length)]);
  const [qIndex, setQIndex] = useState(0);
  const [stage, setStage] = useState<"quiz" | "reveal" | "debunk" | "result">("quiz");
  const [preConfidence, setPreConfidence] = useState(60);
  const [postConfidence, setPostConfidence] = useState(60);

  const handleAnswer = () => {
    if (qIndex + 1 >= QUESTIONS.length) {
      setStage("reveal");
    } else {
      setQIndex((i) => i + 1);
    }
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "quiz" && (
        <>
          <DemoPrompt>簡単な性格診断テストです。直感で答えてください。（{qIndex + 1} / {QUESTIONS.length}）</DemoPrompt>
          <DemoPrompt>{QUESTIONS[qIndex].q}</DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={handleAnswer}>{QUESTIONS[qIndex].a}</DemoButton>
            <DemoButton onClick={handleAnswer}>{QUESTIONS[qIndex].b}</DemoButton>
          </DemoChoices>
        </>
      )}

      {stage === "reveal" && (
        <>
          <DemoPrompt>
            診断結果：あなたは「<strong>{trait}</strong>」を持つタイプです。
          </DemoPrompt>
          <DemoSlider
            label="この診断は、どれくらい自分に当てはまると感じますか？"
            value={preConfidence}
            min={0}
            max={100}
            displayValue={`${preConfidence}%`}
            onChange={setPreConfidence}
          />
          <DemoButton variant="primary" onClick={() => setStage("debunk")}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === "debunk" && (
        <>
          <DemoPrompt>
            種明かしです。実はこの診断結果は、先ほどの3つの質問への回答内容とは無関係に、最初からランダムに用意されていたものでした。中身に根拠は何もありません。
          </DemoPrompt>
          <DemoSlider
            label="それを知った今、この診断はどれくらい自分に当てはまると感じますか？"
            value={postConfidence}
            min={0}
            max={100}
            displayValue={`${postConfidence}%`}
            onChange={setPostConfidence}
          />
          <DemoButton variant="primary" onClick={() => setStage("result")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === "result" && (
        <DemoResult title="根拠が消えても、印象は消えましたか？">
          <p style={{ margin: "0 0 8px" }}>
            種明かし前の当てはまり度：{preConfidence}% ／ 種明かし後の当てはまり度：{postConfidence}%
          </p>
          {postConfidence >= 20 ? (
            <DemoHint>
              根拠が完全にでたらめだったと分かった後も、当てはまり度が0%近くまでは下がりませんでしたね。これが信念固持です。心理学者リー・ロスらの実験では、偽の自殺予知テストの結果を見せられた参加者が、後で「でたらめでした」と種明かしされても、自己評価をなかなか元に戻せませんでした。人は情報を受け取った時点でそれを裏付ける理由づけを自分の中で作ってしまうため、元の情報が消えても、その理由づけや印象だけが残り続けるのです。
            </DemoHint>
          ) : (
            <DemoHint>
              種明かし後、当てはまり度をほぼゼロまで下げられましたね。しっかり信念を手放せています。多くの人はここで、根拠が崩れた後も診断内容への印象がなかなか消えず、信念固持と呼ばれる状態が起こりやすいことが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

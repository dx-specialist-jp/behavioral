import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const CONFUSING_RULE =
  "「本規約における『実質的な事前通知』とは、当該変更が影響を及ぼす範囲において合理的に予見可能な範囲内で、変更実施日の相当期間前に、適切と判断される方法により行われるものとする」";

const PRIVATE_CONFUSED_PERCENT = 74; // 教室内で「実は理解できていない」人の割合(想定値)
const HANDS_RAISED_PERCENT = 0; // 実際に挙手して質問する人の割合

type Stage = "read" | "private" | "classroom" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("read");
  const [understood, setUnderstood] = useState<boolean | null>(null);
  const [raisedHand, setRaisedHand] = useState<boolean | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "read" && (
        <>
          <DemoPrompt>研修講師が、就業規則の一節を読み上げました。</DemoPrompt>
          <p
            style={{
              margin: "0 0 12px",
              padding: "12px",
              background: "var(--color-bg)",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            {CONFUSING_RULE}
          </p>
          <DemoButton variant="primary" onClick={() => setStage("private")}>
            読み終えた
          </DemoButton>
        </>
      )}

      {stage === "private" && (
        <>
          <DemoPrompt>正直なところ、今の一節の意味を人に説明できるくらい理解できましたか？（これはあなただけに聞いています）</DemoPrompt>
          <DemoChoices>
            <DemoButton
              onClick={() => {
                setUnderstood(true);
                setStage("classroom");
              }}
            >
              理解できた
            </DemoButton>
            <DemoButton
              onClick={() => {
                setUnderstood(false);
                setStage("classroom");
              }}
            >
              正直、よく分からなかった
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {stage === "classroom" && (
        <>
          <DemoPrompt>
            講師が「ここまでで質問はありますか？」と聞きました。研修室にいる他の29人を見渡しても、誰も手を挙げていません。あなたはどうしますか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              onClick={() => {
                setRaisedHand(true);
                setStage("done");
              }}
            >
              手を挙げて質問する
            </DemoButton>
            <DemoButton
              onClick={() => {
                setRaisedHand(false);
                setStage("done");
              }}
            >
              誰も挙げていないので黙っておく
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {stage === "done" && (
        <DemoResult title="種明かし：本当は研修室で何が起きていたか">
          <p style={{ margin: "0 0 8px" }}>
            実はこの研修室にいた30人にあとで匿名アンケートを取ると、
            <strong>{PRIVATE_CONFUSED_PERCENT}%</strong>の人が「正直よく分からなかった」と答えます。ですが実際に挙手して質問した人は
            <strong>{HANDS_RAISED_PERCENT}%</strong>でした。
          </p>
          {understood === false && raisedHand === false ? (
            <DemoHint>
              あなたも「分からなかった」のに黙ることを選びましたね。それはあなたの理解力の問題ではありません。実はその場にいたほぼ全員が同じように感じていて、同じように黙っていたのです。誰も手を挙げないという「見た目の事実」だけを見て、「分かっていないのは自分だけかもしれない」と思い込んでしまう——これが多元的無知です。
            </DemoHint>
          ) : understood === false && raisedHand === true ? (
            <DemoHint>
              分からなかったのに、勇気を出して質問しましたね。実は多くの人があなたと同じ疑問を抱えながら黙っています。誰かが最初に手を挙げるだけで、この空気は簡単に崩れます。
            </DemoHint>
          ) : (
            <DemoHint>
              今回はあなたは理解できていましたが、実際の場面ではこの一節を正確に理解できる人はそう多くありません。周りが静かだからといって「みんな分かっている」とは限らないのです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

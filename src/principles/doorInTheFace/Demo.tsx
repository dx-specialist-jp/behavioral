import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Answer = "yes" | "no";

export function Demo({ accentHue }: DemoProps) {
  const [step, setStep] = useState<"big" | "small" | "done">("big");
  const [bigAnswer, setBigAnswer] = useState<Answer | null>(null);
  const [smallAnswer, setSmallAnswer] = useState<Answer | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      {step === "big" && (
        <>
          <DemoPrompt>
            NPO団体の担当者からお願いされました。「非行少年の更生施設で、2年間、週2時間のボランティアカウンセラーを務めていただけませんか？」
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              selected={bigAnswer === "yes"}
              onClick={() => {
                setBigAnswer("yes");
                setStep("small");
              }}
            >
              引き受ける
            </DemoButton>
            <DemoButton
              selected={bigAnswer === "no"}
              onClick={() => {
                setBigAnswer("no");
                setStep("small");
              }}
            >
              断る
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {step === "small" && (
        <>
          <DemoPrompt>
            担当者は続けてこう言いました。「そうですか……では、非行少年たちを動物園に2時間だけ連れて行ってもらうのはいかがですか？」
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              selected={smallAnswer === "yes"}
              onClick={() => {
                setSmallAnswer("yes");
                setStep("done");
              }}
            >
              引き受ける
            </DemoButton>
            <DemoButton
              selected={smallAnswer === "no"}
              onClick={() => {
                setSmallAnswer("no");
                setStep("done");
              }}
            >
              断る
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {step === "done" && (
        <DemoResult title="実際の実験(チャルディーニら, 1975年)との比較">
          <p style={{ margin: "0 0 8px" }}>
            大きな依頼: {bigAnswer === "yes" ? "引き受けた" : "断った"} ／ その後の小さな依頼:{" "}
            {smallAnswer === "yes" ? "引き受けた" : "断った"}
          </p>
          <DemoHint>
            実際の実験では、大きな依頼を断った学生に動物園の依頼を続けて出したところ、約50%が引き受けました。最初から動物園の依頼だけをされた学生の承諾率は約17%でした。相手が「譲歩してくれた」と感じることへのお返しの気持ちと、大きな依頼との対比で小さな依頼が軽く見える効果が重なって、承諾率が3倍近くに跳ね上がったのです。動物園の依頼そのものの負担は、最初から変わっていません。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

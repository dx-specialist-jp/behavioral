import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Answer = "yes" | "no";

export function Demo({ accentHue }: DemoProps) {
  const [step, setStep] = useState<"small" | "big" | "done">("small");
  const [smallAnswer, setSmallAnswer] = useState<Answer | null>(null);
  const [bigAnswer, setBigAnswer] = useState<Answer | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      {step === "small" && (
        <>
          <DemoPrompt>
            近所の団体から声をかけられました。「地域の安全のため、『安全運転を』と書かれた小さなステッカーを、玄関の窓に貼っていただけませんか？」
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              selected={smallAnswer === "yes"}
              onClick={() => {
                setSmallAnswer("yes");
                setStep("big");
              }}
            >
              貼ってもよい
            </DemoButton>
            <DemoButton
              selected={smallAnswer === "no"}
              onClick={() => {
                setSmallAnswer("no");
                setStep("big");
              }}
            >
              断る
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {step === "big" && (
        <>
          <DemoPrompt>
            2週間後、同じ団体が再び訪れてこう言いました。「先日はありがとうございました。実は今度、大きくて少し目立つ『安全運転を』の看板を、お庭に2週間設置させていただけないでしょうか？」
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              selected={bigAnswer === "yes"}
              onClick={() => {
                setBigAnswer("yes");
                setStep("done");
              }}
            >
              設置してもよい
            </DemoButton>
            <DemoButton
              selected={bigAnswer === "no"}
              onClick={() => {
                setBigAnswer("no");
                setStep("done");
              }}
            >
              断る
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {step === "done" && (
        <DemoResult title="実際の実験(フリードマン&フレイザー, 1966年)との比較">
          <p style={{ margin: "0 0 8px" }}>
            あなたの答え: 小さなステッカー →{smallAnswer === "yes" ? "貼った" : "断った"} ／ 大きな看板 →{" "}
            {bigAnswer === "yes" ? "設置に応じた" : "断った"}
          </p>
          <DemoHint>
            実際の実験では、最初に小さなステッカーを頼まれて応じた住民のうち、約76%が2週間後の大きな看板の依頼にも応じました。一方、いきなり大きな看板だけを頼まれた住民が応じた割合は、わずか17%でした。小さな要求への同意が「自分は協力的な人間だ」という自己イメージを作り、それが大きな要求への同意を後押しします。もし最初に看板の依頼だけをされていたら、あなたの答えは変わっていたかもしれません。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "sure" | "gamble";

export function Demo({ accentHue }: DemoProps) {
  const [gainChoice, setGainChoice] = useState<Choice | null>(null);
  const [lossChoice, setLossChoice] = useState<Choice | null>(null);

  const bothAnswered = gainChoice !== null && lossChoice !== null;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>【場面A】次のどちらを選びますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={gainChoice === "sure"} onClick={() => setGainChoice("sure")}>
          確実に5,000円もらう
        </DemoButton>
        <DemoButton selected={gainChoice === "gamble"} onClick={() => setGainChoice("gamble")}>
          50%で10,000円、50%で0円
        </DemoButton>
      </DemoChoices>

      <DemoPrompt>【場面B】次のどちらを選びますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={lossChoice === "sure"} onClick={() => setLossChoice("sure")}>
          確実に5,000円失う
        </DemoButton>
        <DemoButton selected={lossChoice === "gamble"} onClick={() => setLossChoice("gamble")}>
          50%で10,000円失う、50%で失わない
        </DemoButton>
      </DemoChoices>

      {bothAnswered && (
        <DemoResult title="あなたの選択">
          <p style={{ margin: "0 0 8px" }}>
            場面A：{gainChoice === "sure" ? "確実に5,000円もらう" : "賭けを選んだ"} ／ 場面B：
            {lossChoice === "sure" ? "確実に5,000円失う" : "賭けを選んだ"}
          </p>
          {gainChoice === "sure" && lossChoice === "gamble" ? (
            <DemoHint>
              多くの人がこの組み合わせを選びます。どちらの場面も期待値は同じ（5,000円）なのに、得の場面では手堅く、損の場面では一発逆転を狙う——これが損失回避（と、それに伴うリスク態度の逆転）です。
            </DemoHint>
          ) : (
            <DemoHint>
              あなたは期待値が同じ2つの場面で一貫した選び方をしましたね。多くの人は場面Aで手堅く、場面Bで賭けを選ぶという逆転が起きます。それこそが「損はより重く感じる」ことの表れです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

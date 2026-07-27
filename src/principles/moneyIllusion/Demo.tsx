import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "A" | "B";

export function Demo({ accentHue }: DemoProps) {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        あなたはある会社員です。今年、次のどちらかの状況になるとします。実質的な生活の豊かさ（買えるものの量）としては、実はどちらも同じだけ悪化します。あなたはどちらの方が「公正で受け入れやすい」と感じますか？
      </DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice === "A"} onClick={() => setChoice("A")}>
          A：物価は変わらないが、給料が2%減った
        </DemoButton>
        <DemoButton selected={choice === "B"} onClick={() => setChoice("B")}>
          B：物価が4%上昇し、給料は2%増えた
        </DemoButton>
      </DemoChoices>

      {choice && (
        <DemoResult title="実は、どちらも同じだけ悪化しています">
          <p style={{ margin: "0 0 8px" }}>
            あなたは「{choice === "A" ? "A：給料が2%減った" : "B：給料が2%増えた"}」の方を選びましたね。しかし物価の変動を考慮すると、Aは実質2%の目減り、Bは実質でも約2%の目減り（4%の物価上昇 − 2%の昇給）で、購買力の低下はほぼ同じです。
          </p>
          <DemoHint>
            心理学者エルダー・シャフィールらの調査では、多くの人がAよりBの方を公正だと感じました。給料の額面が「増えている」というだけで、実質的な目減りを見落としてしまう——これが貨幣錯覚です。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

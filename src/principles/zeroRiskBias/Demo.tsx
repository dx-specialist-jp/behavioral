import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "A" | "B";

export function Demo({ accentHue }: DemoProps) {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>限られた予算で、2つの安全対策のどちらかしか実施できません。予想される効果は次の通りです。</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice === "A"} onClick={() => setChoice("A")}>
          対策A：リスクXを100%完全にゼロにする（年間の被害者数：5人→0人）
        </DemoButton>
        <DemoButton selected={choice === "B"} onClick={() => setChoice("B")}>
          対策B：リスクYとZの両方を大幅に減らす（年間の被害者数の合計：40人→10人）
        </DemoButton>
      </DemoChoices>

      {choice && (
        <DemoResult title="実際に防げる被害の数を比べると">
          <p style={{ margin: "0 0 8px" }}>
            対策Aで防げる被害は5人、対策Bで防げる被害は30人です。
            {choice === "A"
              ? "あなたはAを選びましたが、"
              : "あなたはBを選びました。"}
            数字だけで見ると対策Bの方が6倍多くの被害を防げます。
          </p>
          <DemoHint>
            {choice === "A"
              ? "それでも「リスクを完全にゼロにできる」という響きに、実際の効果以上の魅力を感じませんでしたか？研究でも、多くの人がリスク削減の絶対量ではなく「ゼロにできるかどうか」を基準に対策を選んでしまうことが示されています。これがゼロリスクバイアスです。"
              : "「リスクを完全にゼロにできる」という響きに惹かれず、数字に基づいて判断できましたね。研究では、多くの人がリスク削減の絶対量ではなく「ゼロにできるかどうか」を基準に対策を選んでしまう（ゼロリスクバイアス）ことが示されています。"}
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

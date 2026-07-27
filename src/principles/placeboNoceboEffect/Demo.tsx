import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "expensive" | "cheap";

export function Demo({ accentHue }: DemoProps) {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        頭痛薬を買うとします。中身の有効成分・分量はまったく同じ2つの薬がありました。あなたならどちらを選びますか？
      </DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice === "expensive"} onClick={() => setChoice("expensive")}>
          1回500円の「よく効く」と評判の薬
        </DemoButton>
        <DemoButton selected={choice === "cheap"} onClick={() => setChoice("cheap")}>
          1回50円の薬
        </DemoButton>
      </DemoChoices>

      {choice && (
        <DemoResult title="値段や評判が効き目を左右する">
          <p style={{ margin: "0 0 8px" }}>中身は同じでも、値段や評判の情報だけで「効きそう」という期待が変わりますね。</p>
          <DemoHint>
            実際の実験でも、同じ有効成分の偽薬（プラセボ）でも、「高価な薬」「よく効く新薬」と説明された方が、痛みの軽減を強く感じる人が多いことが分かっています。逆に、副作用の説明を詳しく読むほど、実際には何も変わっていなくても頭痛や吐き気を感じ始める人が増える「ノセボ効果」も報告されています。期待そのものが、体の感じ方に影響しているのです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const PRIOR_CHOICES: ("A" | "B")[] = ["B", "B", "A", "B", "B", "B", "B"];

type Choice = "A" | "B";

export function Demo({ accentHue }: DemoProps) {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        新しくできたレストランA・Bのうち、あなたは事前のちょっとした情報から「Aの方がわずかに良さそうだ」と感じています。ただし確信は五分五分程度です。あなたの番の前に7人が並んでおり、その内訳は次の通りです。
      </DemoPrompt>
      <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
        {PRIOR_CHOICES.map((c, i) => (
          <span
            key={i}
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
              fontWeight: 700,
              color: "#fff",
              background: c === "A" ? "var(--accent)" : "var(--color-text-muted)",
            }}
          >
            {c}
          </span>
        ))}
      </div>
      <DemoPrompt>7人中6人がBに並んでいます。あなたはどちらに並びますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice === "A"} onClick={() => setChoice("A")}>
          自分の手がかり通り「A」に並ぶ
        </DemoButton>
        <DemoButton selected={choice === "B"} onClick={() => setChoice("B")}>
          周りに合わせて「B」に並ぶ
        </DemoButton>
      </DemoChoices>

      {choice && (
        <DemoResult title="情報カスケードのメカニズム">
          <p style={{ margin: "0 0 8px" }}>
            {choice === "B"
              ? "あなたは自分の手がかりより、前の人たちの選択を信頼して「B」を選びましたね。"
              : "あなたは前の人たちの選択に流されず、自分の手がかり通り「A」を選びましたね。"}
          </p>
          <DemoHint>
            これが情報カスケードです。3人目以降の人にとって「前の6人がBを選んだ」という事実は、自分の弱い私的な手がかりよりも強い証拠に見えます。各個人は合理的に判断しているのに、結果として集団全体では、最初の数人の偶然の選択だけで連鎖が固定されてしまい、後から来た人たちの持つ情報は一切反映されなくなってしまうのです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

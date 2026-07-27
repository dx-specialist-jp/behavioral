import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const OPTIONS = [
  { id: "save", label: "貯蓄・投資に回す" },
  { id: "want", label: "前から欲しかった物を買う" },
  { id: "treat", label: "外食や娯楽にぱっと使う" },
];

export function Demo({ accentHue }: DemoProps) {
  const [salaryChoice, setSalaryChoice] = useState<string | null>(null);
  const [bonusChoice, setBonusChoice] = useState<string | null>(null);

  const label = (id: string | null) => OPTIONS.find((o) => o.id === id)?.label ?? "";

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>毎月の給料が、思ったより3万円多く振り込まれていました。何に使いますか？</DemoPrompt>
      <DemoChoices>
        {OPTIONS.map((opt) => (
          <DemoButton key={opt.id} selected={salaryChoice === opt.id} onClick={() => setSalaryChoice(opt.id)}>
            {opt.label}
          </DemoButton>
        ))}
      </DemoChoices>

      {salaryChoice && (
        <>
          <DemoPrompt>お年玉やボーナスとして、まったく同じ3万円が臨時収入として手に入りました。何に使いますか？</DemoPrompt>
          <DemoChoices>
            {OPTIONS.map((opt) => (
              <DemoButton key={opt.id} selected={bonusChoice === opt.id} onClick={() => setBonusChoice(opt.id)}>
                {opt.label}
              </DemoButton>
            ))}
          </DemoChoices>
        </>
      )}

      {salaryChoice && bonusChoice && (
        <DemoResult title="2つの3万円を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            給料の3万円：{label(salaryChoice)} ／ 臨時収入の3万円：{label(bonusChoice)}
          </p>
          {salaryChoice !== bonusChoice ? (
            <DemoHint>
              金額はまったく同じ3万円なのに、使い道が変わりましたね。多くの人は臨時収入ほど気軽に贅沢に使い、給料はコツコツ堅実に使おうとします。お金そのものに違いはないのに、心の中で別の財布に分けてしまっているのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は同じ使い道を選びましたね。お金を出所で区別せず、同じ価値として扱えている証拠です。多くの人はここで選択が分かれます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

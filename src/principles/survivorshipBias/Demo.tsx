import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const WING_DAMAGE = [
  { cx: 40, cy: 30 }, { cx: 58, cy: 22 }, { cx: 74, cy: 36 }, { cx: 150, cy: 30 }, { cx: 132, cy: 22 }, { cx: 168, cy: 40 },
  { cx: 55, cy: 90 }, { cx: 78, cy: 98 }, { cx: 130, cy: 94 }, { cx: 148, cy: 86 },
];

type Choice = "wings" | "engine";

export function Demo({ accentHue }: DemoProps) {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        戦闘から生還した爆撃機に残った弾痕（灰色の点）の分布です。装甲を追加すべき箇所はどこだと思いますか？
      </DemoPrompt>
      <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: 260, marginBottom: 12 }}>
        <path
          d="M100 10 L106 48 L178 36 L180 44 L108 62 L110 92 L124 100 L124 106 L100 98 L76 106 L76 100 L90 92 L92 62 L20 44 L22 36 L94 48 Z"
          fill="none"
          stroke="var(--color-border-strong)"
          strokeWidth="2"
        />
        {WING_DAMAGE.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r="4" fill="var(--color-text-muted)" opacity="0.75" />
        ))}
      </svg>
      <DemoChoices>
        <DemoButton selected={choice === "wings"} onClick={() => setChoice("wings")}>
          弾痕が多い翼・胴体
        </DemoButton>
        <DemoButton selected={choice === "engine"} onClick={() => setChoice("engine")}>
          弾痕が少ないエンジン・コックピット付近
        </DemoButton>
      </DemoChoices>

      {choice && (
        <DemoResult title="正解は「弾痕が少ないエンジン・コックピット付近」">
          <p style={{ margin: "0 0 8px" }}>
            {choice === "engine" ? "正解です！" : "多くの人が翼や胴体を選んでしまいますが、"}
            統計学者エイブラハム・ウォールドは、翼や胴体に被弾しても機体は帰還できた＝致命的ではなかった証拠だと考えました。
          </p>
          <DemoHint>
            本当に装甲が必要なのは、被弾すると帰還できずデータに現れない箇所です。分析対象が「生き残った機体」だけに偏っていることに気づかないと、正反対の結論を出してしまいます。これが生存者バイアスです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

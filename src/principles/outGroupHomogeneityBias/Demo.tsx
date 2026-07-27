import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

interface Avatar {
  shape: "circle" | "square" | "triangle";
  size: number;
  tone: number;
}

function makeGroup(seedOffset: number): Avatar[] {
  const shapes: Avatar["shape"][] = ["circle", "square", "triangle"];
  return Array.from({ length: 6 }, (_, i) => ({
    shape: shapes[(i + seedOffset) % 3],
    size: 14 + ((i * 5 + seedOffset * 3) % 10),
    tone: 0.4 + (((i * 7 + seedOffset * 11) % 6) / 10),
  }));
}

function AvatarRow({ avatars, accent }: { avatars: Avatar[]; accent: boolean }) {
  return (
    <div className={styles.row}>
      {avatars.map((a, i) => (
        <svg key={i} width={32} height={32} viewBox="0 0 32 32">
          {a.shape === "circle" && (
            <circle cx="16" cy="16" r={a.size / 2} fill={accent ? "var(--accent)" : "var(--color-text-muted)"} opacity={a.tone} />
          )}
          {a.shape === "square" && (
            <rect
              x={16 - a.size / 2}
              y={16 - a.size / 2}
              width={a.size}
              height={a.size}
              fill={accent ? "var(--accent)" : "var(--color-text-muted)"}
              opacity={a.tone}
            />
          )}
          {a.shape === "triangle" && (
            <path
              d={`M16 ${16 - a.size / 2} L${16 + a.size / 2} ${16 + a.size / 2} L${16 - a.size / 2} ${16 + a.size / 2} Z`}
              fill={accent ? "var(--accent)" : "var(--color-text-muted)"}
              opacity={a.tone}
            />
          )}
        </svg>
      ))}
    </div>
  );
}

export function Demo({ accentHue }: DemoProps) {
  const [ownGroup] = useState(() => makeGroup(0));
  const [otherGroup] = useState(() => makeGroup(2));
  const [ownRating, setOwnRating] = useState(50);
  const [otherRating, setOtherRating] = useState(50);
  const [revealed, setRevealed] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>下の2つのグループを見て、それぞれ「メンバーがどれくらい多様に見えるか」を評価してください。</DemoPrompt>

      <p style={{ margin: "0 0 4px", fontWeight: 600 }}>Aグループ（あなたの所属チーム）</p>
      <AvatarRow avatars={ownGroup} accent={true} />
      <DemoSlider
        label="Aグループの多様性"
        value={ownRating}
        min={0}
        max={100}
        displayValue={`${ownRating}`}
        onChange={setOwnRating}
      />

      <p style={{ margin: "12px 0 4px", fontWeight: 600 }}>Bグループ（別の部署のチーム）</p>
      <AvatarRow avatars={otherGroup} accent={false} />
      <DemoSlider
        label="Bグループの多様性"
        value={otherRating}
        min={0}
        max={100}
        displayValue={`${otherRating}`}
        onChange={setOtherRating}
      />

      {!revealed ? (
        <DemoButton variant="primary" onClick={() => setRevealed(true)}>
          評価を確定する
        </DemoButton>
      ) : (
        <DemoResult title="種明かし">
          <p style={{ margin: "0 0 8px" }}>
            AグループとBグループは、実は形・大きさ・濃さのバリエーションを完全に同じ生成ロジックで作った、同じくらい多様な集団です。色だけがアクセントカラーとグレーで違って見えていました。
          </p>
          {otherRating < ownRating ? (
            <DemoHint>
              それでもBグループの方を「均質だ」と低く評価しませんでしたか？これが外集団同質性バイアスです。私たちは自分の内集団については日々接して細かい違いに気づく一方、外集団は一括りのイメージで処理してしまうため、実際には同じだけ多様な集団を「あの人たちはみんな同じ」と感じてしまうのです。
              </DemoHint>
          ) : (
            <DemoHint>
              今回は両グループを近い評価にしましたね。ただ多くの人は、色分けされただけの「自分の側ではない」グループを、実際より均質に評価してしまう傾向があることが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

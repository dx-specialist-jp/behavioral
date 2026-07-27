import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const POINT_COUNT = 36;

function randomPoints() {
  return Array.from({ length: POINT_COUNT }, () => ({
    x: 8 + Math.random() * 184,
    y: 8 + Math.random() * 104,
  }));
}

function jitteredGridPoints() {
  const cols = 6;
  const rows = 6;
  const points: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      points.push({
        x: 20 + c * 30 + (Math.random() * 10 - 5),
        y: 15 + r * 18 + (Math.random() * 8 - 4),
      });
    }
  }
  return points;
}

type Side = "left" | "right";

export function Demo({ accentHue }: DemoProps) {
  const [truePoints] = useState(randomPoints);
  const [gridPoints] = useState(jitteredGridPoints);
  const [trueSide] = useState<Side>(() => (Math.random() < 0.5 ? "left" : "right"));
  const [guess, setGuess] = useState<Side | null>(null);

  const leftPoints = trueSide === "left" ? truePoints : gridPoints;
  const rightPoints = trueSide === "left" ? gridPoints : truePoints;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        AとBのうち、点を完全にランダムにばらまいたのはどちらだと思いますか？もう一方は、格子状に並べた点を少しだけずらして作った「人工的な」配置です。
      </DemoPrompt>
      <div className={styles.grids}>
        <div>
          <p className={styles.gridLabel}>A</p>
          <svg viewBox="0 0 200 120" className={styles.grid}>
            {leftPoints.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="var(--accent)" />
            ))}
          </svg>
        </div>
        <div>
          <p className={styles.gridLabel}>B</p>
          <svg viewBox="0 0 200 120" className={styles.grid}>
            {rightPoints.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="var(--accent)" />
            ))}
          </svg>
        </div>
      </div>
      <div className={styles.choiceRow}>
        <DemoButton selected={guess === "left"} onClick={() => setGuess("left")}>
          Aが本物のランダム
        </DemoButton>
        <DemoButton selected={guess === "right"} onClick={() => setGuess("right")}>
          Bが本物のランダム
        </DemoButton>
      </div>

      {guess && (
        <DemoResult title="正解は…">
          <p style={{ margin: "0 0 8px" }}>
            本物のランダムな配置は「{trueSide === "left" ? "A" : "B"}」でした。{guess === trueSide ? "正解です！" : "多くの人が逆に感じてしまいます。"}
          </p>
          <DemoHint>
            真にランダムな点の配置には、偶然による「かたまり」や「隙間」が自然にできます。それに対して、格子を少しずらしただけの人工的な配置の方が、いかにも「バランスよくランダムっぽく」見えてしまうのです。本物のランダムに現れる偏りを見ると、人はつい「何か意味があるのでは」と勘ぐってしまいます。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type Shot = "make" | "miss";
type Belief = "hot" | "cold" | "independent";

const TRUE_RATE = 0.55;
const SHOTS_TARGET = 20;

function takeShot(): Shot {
  return Math.random() < TRUE_RATE ? "make" : "miss";
}

export function Demo({ accentHue }: DemoProps) {
  const [belief, setBelief] = useState<Belief | null>(null);
  const [shots, setShots] = useState<Shot[]>([]);

  const finished = shots.length >= SHOTS_TARGET;

  const handleShoot = () => {
    setShots((prev) => (prev.length >= SHOTS_TARGET ? prev : [...prev, takeShot()]));
  };

  let afterMake = 0;
  let afterMakeMade = 0;
  let afterMiss = 0;
  let afterMissMade = 0;
  for (let i = 0; i < shots.length - 1; i++) {
    if (shots[i] === "make") {
      afterMake++;
      if (shots[i + 1] === "make") afterMakeMade++;
    } else {
      afterMiss++;
      if (shots[i + 1] === "make") afterMissMade++;
    }
  }
  const afterMakeRate = afterMake > 0 ? Math.round((afterMakeMade / afterMake) * 100) : null;
  const afterMissRate = afterMiss > 0 ? Math.round((afterMissMade / afterMiss) * 100) : null;

  return (
    <DemoShell accentHue={accentHue}>
      {belief === null && (
        <>
          <DemoPrompt>
            ある選手にシュートを{SHOTS_TARGET}本打たせます。何本か連続で決まった直後のシュートは、それ以外のときと比べて成功率が上がると思いますか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => setBelief("hot")}>連続で決まった直後は成功率が上がる</DemoButton>
            <DemoButton onClick={() => setBelief("cold")}>連続で外した直後の方が成功率が上がる</DemoButton>
            <DemoButton onClick={() => setBelief("independent")}>直前の結果は次の確率に影響しない</DemoButton>
          </DemoChoices>
        </>
      )}

      {belief !== null && (
        <>
          <DemoPrompt>ボタンを押して、この選手にシュートを打たせましょう。（{shots.length} / {SHOTS_TARGET}本）</DemoPrompt>
          <div className={styles.shots}>
            {shots.map((s, i) => (
              <div key={i} className={`${styles.shot} ${s === "make" ? styles.make : styles.miss}`}>
                {s === "make" ? "◯" : "×"}
              </div>
            ))}
          </div>
          {!finished && (
            <DemoButton variant="primary" onClick={handleShoot}>
              シュートを打たせる
            </DemoButton>
          )}

          {finished && (
            <DemoResult title="結果：連続の後の成功率">
              <ul className={styles.stats}>
                <li>成功した直後に次も成功した割合：{afterMakeRate ?? "―"}%（{afterMakeMade} / {afterMake}本）</li>
                <li>失敗した直後に次は成功した割合：{afterMissRate ?? "―"}%（{afterMissMade} / {afterMiss}本）</li>
              </ul>
              <p style={{ margin: "0 0 8px" }}>
                実はこの選手の「本当のシュート成功率」は、連続の有無に関係なく毎回{Math.round(TRUE_RATE * 100)}%に固定されていました。それでも数字を見ると多少の差が出ることがありますが、それは20本という限られた回数で生じる自然なばらつきにすぎません。
              </p>
              <DemoHint>
                {belief === "independent"
                  ? "あなたの予想どおりでした。1985年にギロビッチらがNBA選手の実際のシュート記録を分析した研究でも、連続成功の直後に成功率が上がるという明確な証拠は見つかりませんでした。"
                  : "多くの人があなたと同じように『連続には意味がある』と感じます。しかし1985年のギロビッチらの研究では、NBA選手の実際のシュート記録を分析しても、連続成功の直後に成功率が上がるという明確な証拠は見つかりませんでした。短い連続は、独立した試行でも自然に起こりうるのです。"}
              </DemoHint>
            </DemoResult>
          )}
        </>
      )}
    </DemoShell>
  );
}

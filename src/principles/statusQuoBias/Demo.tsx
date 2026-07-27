import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const PLAN_A = { name: "プランA", detail: "月額3,000円・データ3GB・通話かけ放題" };
const PLAN_B = { name: "プランB", detail: "月額2,500円・データ6GB・通話は10分まで無料" };

function PlanCard({ plan, current }: { plan: typeof PLAN_A; current: boolean }) {
  return (
    <div className={`${styles.plan} ${current ? styles.current : ""}`}>
      {current && <span className={styles.badge}>現在契約中</span>}
      <p className={styles.planName}>{plan.name}</p>
      <p className={styles.planDetail}>{plan.detail}</p>
    </div>
  );
}

export function Demo({ accentHue }: DemoProps) {
  const [round1, setRound1] = useState<"stay" | "switch" | null>(null);
  const [round2, setRound2] = useState<"stay" | "switch" | null>(null);

  const round1Kept = round1 === "stay"; // A のまま
  const round2Kept = round2 === "stay"; // B のまま

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>【1回目】あなたは今プランAを契約中です。プランBに切り替えますか？</DemoPrompt>
      <div className={styles.plans}>
        <PlanCard plan={PLAN_A} current />
        <PlanCard plan={PLAN_B} current={false} />
      </div>
      <DemoChoices>
        <DemoButton selected={round1 === "stay"} onClick={() => setRound1("stay")}>
          このまま継続する
        </DemoButton>
        <DemoButton selected={round1 === "switch"} onClick={() => setRound1("switch")}>
          プランBに切り替える
        </DemoButton>
      </DemoChoices>

      {round1 && (
        <>
          <DemoPrompt>【2回目】今度はプランBを契約中だとします。プランAに切り替えますか？</DemoPrompt>
          <div className={styles.plans}>
            <PlanCard plan={PLAN_B} current />
            <PlanCard plan={PLAN_A} current={false} />
          </div>
          <DemoChoices>
            <DemoButton selected={round2 === "stay"} onClick={() => setRound2("stay")}>
              このまま継続する
            </DemoButton>
            <DemoButton selected={round2 === "switch"} onClick={() => setRound2("switch")}>
              プランAに切り替える
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {round1 && round2 && (
        <DemoResult title="2回の選択を比べてみると">
          {round1Kept && round2Kept ? (
            <DemoHint>
              1回目はAのまま、2回目はBのまま——つまり「現在契約中」と書かれている方をどちらも選びましたね。中身のプラン内容は入れ替わっただけなのに、選択が「現状」に引っ張られた可能性があります。それが現状維持バイアスです。
            </DemoHint>
          ) : (
            <DemoHint>
              あなたは2回とも同じプランの中身を基準に一貫して選びましたね。多くの人はここで「現在契約中」のラベルに引っ張られ、内容が入れ替わっても両方とも「そのまま」を選んでしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

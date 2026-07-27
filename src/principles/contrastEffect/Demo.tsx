import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type Phase = "intro" | "rate1" | "decoy" | "rate2" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [rating1, setRating1] = useState(3);
  const [rating2, setRating2] = useState(3);

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "intro" && (
        <>
          <DemoPrompt>とある中古マンションの物件情報です。まずは単独で見てみましょう。</DemoPrompt>
          <div className={styles.card}>
            <p className={styles.cardTitle}>本命物件</p>
            <p className={styles.cardDetail}>3,480万円・68㎡・駅徒歩12分・築15年</p>
          </div>
          <DemoButton variant="primary" onClick={() => setPhase("rate1")}>
            見てみる
          </DemoButton>
        </>
      )}

      {phase === "rate1" && (
        <>
          <DemoPrompt>この物件、魅力度はどのくらいだと感じますか？</DemoPrompt>
          <DemoSlider label="魅力度" value={rating1} min={1} max={10} displayValue={`${rating1}/10`} onChange={setRating1} />
          <DemoButton
            variant="primary"
            onClick={() => {
              setPhase("decoy");
            }}
          >
            次へ
          </DemoButton>
        </>
      )}

      {phase === "decoy" && (
        <>
          <DemoPrompt>別の日、不動産屋がまず別の物件を案内してくれました。</DemoPrompt>
          <div className={styles.card}>
            <p className={styles.cardTitle}>比較物件（先に見せられたもの）</p>
            <p className={styles.cardDetail}>3,600万円・55㎡・駅徒歩20分・築32年</p>
          </div>
          <DemoPrompt>続いて、さきほどと全く同じ本命物件を見せられました。</DemoPrompt>
          <div className={styles.card}>
            <p className={styles.cardTitle}>本命物件（さっきと同じ内容）</p>
            <p className={styles.cardDetail}>3,480万円・68㎡・駅徒歩12分・築15年</p>
          </div>
          <DemoButton variant="primary" onClick={() => setPhase("rate2")}>
            改めて評価する
          </DemoButton>
        </>
      )}

      {phase === "rate2" && (
        <>
          <DemoPrompt>この本命物件、魅力度はどのくらいだと感じますか？</DemoPrompt>
          <DemoSlider label="魅力度" value={rating2} min={1} max={10} displayValue={`${rating2}/10`} onChange={setRating2} />
          <DemoButton variant="primary" onClick={() => setPhase("done")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {phase === "done" && (
        <DemoResult title="2つの評価を比べてみると">
          <p style={{ margin: "0 0 10px" }}>
            単独で見たときの魅力度は {rating1}/10、条件の悪い物件を先に見たあとの魅力度は {rating2}/10 でした。
          </p>
          {rating2 > rating1 ? (
            <DemoHint>
              同じ物件・同じ条件なのに、条件の悪い物件を先に見せられたあとの方が魅力的に感じましたね。これがコントラスト効果です。不動産営業ではこの手法が「当て馬物件」として実際に使われることがあります。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は評価が変わりませんでしたが、多くの人は条件の悪い比較対象を直前に見せられると、同じ物件でもより魅力的に感じてしまいます。物件そのものの価値は変わっていないのに、比較対象次第で評価が揺れ動くのがコントラスト効果です。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

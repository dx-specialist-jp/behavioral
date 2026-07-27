import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type Choice = "premium" | "basic";

export function Demo({ accentHue }: DemoProps) {
  const [round1, setRound1] = useState<Choice | null>(null);
  const [round2, setRound2] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>【1回目】レジ横のチョコを1つもらえます。どちらにしますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={round1 === "premium"} onClick={() => setRound1("premium")}>
          高級チョコ（15円）
        </DemoButton>
        <DemoButton selected={round1 === "basic"} onClick={() => setRound1("basic")}>
          普通のチョコ（1円）
        </DemoButton>
      </DemoChoices>

      {round1 && (
        <>
          <DemoPrompt>【2回目】キャンペーンで両方1円値下げされました。価格差は変わりません。改めて選ぶとしたら？</DemoPrompt>
          <DemoChoices>
            <DemoButton selected={round2 === "premium"} onClick={() => setRound2("premium")}>
              高級チョコ（14円）
            </DemoButton>
            <DemoButton selected={round2 === "basic"} onClick={() => setRound2("basic")}>
              普通のチョコ（0円・無料）
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {round1 && round2 && (
        <DemoResult title="実際の実験データと比べると">
          <p style={{ margin: "0 0 10px" }}>
            1回目は「{round1 === "premium" ? "高級チョコ（15円）" : "普通のチョコ（1円）"}」、2回目は「
            {round2 === "premium" ? "高級チョコ（14円）" : "普通のチョコ（0円）"}」を選びましたね。価格差はどちらも14円で同じです。
          </p>
          <div className={styles.bars}>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>15円 vs 1円のとき（高級チョコ選択率）</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "73%" }} />
              </div>
              <span>約73%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>14円 vs 0円のとき（高級チョコ選択率）</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "31%" }} />
              </div>
              <span>約31%</span>
            </div>
          </div>
          {round1 === "premium" && round2 === "basic" ? (
            <DemoHint>
              あなたはまさにゼロ価格効果を体験しました。価格差は14円のままなのに、片方が「無料」になった瞬間に選択が入れ替わりましたね。実際のシャンパニエらの実験でも、高級チョコの選択率は73%から31%へと大きく下がり、多くの人が無料のチョコへ流れました。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は選択が変わりませんでしたが、実際の実験では「無料」という言葉が加わるだけで、同じ価格差でも選択が大きく逆転する人が多数を占めました。無料は単なる値引きとは違う特別な魅力を持っているのです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

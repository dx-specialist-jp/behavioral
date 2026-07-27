import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const NUMBERS = Array.from({ length: 15 }, (_, i) => i + 1);
const PICK_COUNT = 6;

function randomTicket(): number[] {
  const pool = [...NUMBERS];
  const picks: number[] = [];
  while (picks.length < PICK_COUNT) {
    const idx = Math.floor(Math.random() * pool.length);
    picks.push(pool.splice(idx, 1)[0]);
  }
  return picks.sort((a, b) => a - b);
}

export function Demo({ accentHue }: DemoProps) {
  const [selected, setSelected] = useState<number[]>([]);
  const [randomPick] = useState<number[]>(() => randomTicket());
  const [confirmed, setConfirmed] = useState(false);

  const toggle = (n: number) => {
    if (confirmed) return;
    setSelected((prev) =>
      prev.includes(n) ? prev.filter((x) => x !== n) : prev.length < PICK_COUNT ? [...prev, n] : prev,
    );
  };

  const sortedSelected = [...selected].sort((a, b) => a - b);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        宝くじを買います。{PICK_COUNT}個の数字を自分で選んでください（当せん確率はランダムに割り当てられる場合とまったく同じです）。
      </DemoPrompt>
      <div className={styles.grid}>
        {NUMBERS.map((n) => (
          <button
            key={n}
            type="button"
            className={`${styles.numberButton} ${selected.includes(n) ? styles.numberSelected : ""}`}
            onClick={() => toggle(n)}
          >
            {n}
          </button>
        ))}
      </div>

      {!confirmed && (
        <DemoButton variant="primary" disabled={selected.length < PICK_COUNT} onClick={() => setConfirmed(true)}>
          このチケットで購入する（{selected.length}/{PICK_COUNT}）
        </DemoButton>
      )}

      {confirmed && (
        <>
          <DemoPrompt>あなたが選んだチケット</DemoPrompt>
          <div className={styles.ticket}>
            {sortedSelected.map((n) => (
              <span key={n} className={styles.ticketNumber}>
                {n}
              </span>
            ))}
          </div>
          <DemoPrompt>比較用に、ランダムに割り当てられたチケット</DemoPrompt>
          <div className={styles.ticket}>
            {randomPick.map((n) => (
              <span key={n} className={styles.ticketNumber} style={{ background: "var(--color-text-muted)" }}>
                {n}
              </span>
            ))}
          </div>
          <DemoResult title="どちらのチケットを高く売りますか？">
            <DemoHint>
              当せん確率はどちらのチケットもまったく同じです。それでも心理学者エレン・ランガーの実験では、自分で数字を選んだ人は、ランダムに割り当てられた人より、他人にチケットを売ってほしいと頼まれたときに高い金額を要求しました。自分で選んだというだけで「当たりそうな気がする」——これが制御の錯覚です。
            </DemoHint>
          </DemoResult>
        </>
      )}
    </DemoShell>
  );
}

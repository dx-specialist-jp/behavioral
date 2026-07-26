import { useEffect, useState } from "react";
import { DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const CAFES = [
  { id: "forest", name: "森のカフェ", target: 14 },
  { id: "station", name: "駅前カフェ", target: 340 },
  { id: "alley", name: "路地裏カフェ", target: 21 },
  { id: "rooftop", name: "屋上カフェ", target: 9 },
];

export function Demo() {
  const [choice1, setChoice1] = useState<string | null>(null);
  const [choice2, setChoice2] = useState<string | null>(null);
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(CAFES.map((c) => [c.id, 0])),
  );

  useEffect(() => {
    if (choice1 === null) return;
    const timer = window.setInterval(() => {
      setCounts((prev) => {
        let done = true;
        const next = { ...prev };
        for (const cafe of CAFES) {
          if (next[cafe.id] < cafe.target) {
            next[cafe.id] = Math.min(cafe.target, next[cafe.id] + Math.ceil(cafe.target / 12));
            done = false;
          }
        }
        if (done) window.clearInterval(timer);
        return next;
      });
    }, 80);
    return () => window.clearInterval(timer);
  }, [choice1]);

  return (
    <DemoShell accentVar="--accent-social-proof">
      <DemoPrompt>今夜行くならどのカフェが気になりますか？（この時点では他の人の評判は分かりません）</DemoPrompt>
      <div className={styles.list}>
        {CAFES.map((cafe) => (
          <button
            key={cafe.id}
            type="button"
            className={`${styles.item} ${choice1 === cafe.id ? styles.selected : ""}`}
            onClick={() => choice1 === null && setChoice1(cafe.id)}
          >
            <span>{cafe.name}</span>
          </button>
        ))}
      </div>

      {choice1 && (
        <>
          <DemoPrompt>「今日すでに来店した人数」が見えるようになりました。もう一度選ぶなら？</DemoPrompt>
          <div className={styles.list}>
            {CAFES.map((cafe) => (
              <button
                key={cafe.id}
                type="button"
                className={`${styles.item} ${choice2 === cafe.id ? styles.selected : ""}`}
                onClick={() => setChoice2(cafe.id)}
              >
                <span>{cafe.name}</span>
                <span className={styles.count}>{counts[cafe.id]}人が来店</span>
              </button>
            ))}
          </div>
        </>
      )}

      {choice1 && choice2 && (
        <DemoResult title="1回目と2回目を比べてみると">
          {choice1 !== choice2 && choice2 === "station" ? (
            <DemoHint>
              情報がない1回目は「{CAFES.find((c) => c.id === choice1)?.name}
              」を選んだのに、来店人数が見えた2回目は最も人気の「駅前カフェ」に変わりましたね。カフェの中身は何も変わっていないのに、他の人の行動を見ただけで選択が動く——これが社会的証明の力です。
            </DemoHint>
          ) : choice1 === choice2 ? (
            <DemoHint>
              今回は2回とも同じ選択でしたね。ただ、多くの人は人数が見えた瞬間に一番人気の店へ選択を変えてしまいます。人数はそのカフェの「美味しさ」を保証するものではないのに、です。
            </DemoHint>
          ) : (
            <DemoHint>
              選択が変わりましたね。理由が「人数の多さ」だけだったとしたら、それは味やサービスの評価ではなく社会的証明に影響された可能性があります。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

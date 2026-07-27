import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

interface Member {
  team: "A" | "B";
  good: boolean;
}

// Aチーム9人・Bチーム3人。どちらも「望ましくない行動」の比率は3分の1でまったく同じ。
const MEMBERS: Member[] = [
  { team: "A", good: true },
  { team: "A", good: true },
  { team: "B", good: true },
  { team: "A", good: false },
  { team: "A", good: true },
  { team: "B", good: true },
  { team: "A", good: true },
  { team: "A", good: false },
  { team: "B", good: false },
  { team: "A", good: true },
  { team: "A", good: true },
  { team: "A", good: false },
];

type Guess = "A" | "B" | "same";

export function Demo({ accentHue }: DemoProps) {
  const [reviewed, setReviewed] = useState(false);
  const [guess, setGuess] = useState<Guess | null>(null);

  const badA = MEMBERS.filter((m) => m.team === "A" && !m.good).length;
  const totalA = MEMBERS.filter((m) => m.team === "A").length;
  const badB = MEMBERS.filter((m) => m.team === "B" && !m.good).length;
  const totalB = MEMBERS.filter((m) => m.team === "B").length;

  return (
    <DemoShell accentHue={accentHue}>
      {!reviewed && (
        <>
          <DemoPrompt>
            AチームとBチームのメンバーの行動記録です。◯は「望ましい行動」、✕は「望ましくない行動」を表します。ざっと眺めてみてください。
          </DemoPrompt>
          <div className={styles.grid}>
            {MEMBERS.map((m, i) => (
              <div key={i} className={`${styles.chip} ${m.good ? styles.good : styles.bad}`}>
                <span className={styles.team}>{m.team}</span>
                <span>{m.good ? "◯" : "✕"}</span>
              </div>
            ))}
          </div>
          <DemoButton variant="primary" onClick={() => setReviewed(true)}>
            次へ
          </DemoButton>
        </>
      )}

      {reviewed && guess === null && (
        <>
          <DemoPrompt>
            率直な印象で答えてください。「望ましくない行動（✕）」の割合が高いのは、どちらのチームだと感じましたか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => setGuess("A")}>Aチームの方が高い</DemoButton>
            <DemoButton onClick={() => setGuess("B")}>Bチームの方が高い</DemoButton>
            <DemoButton onClick={() => setGuess("same")}>同じくらい</DemoButton>
          </DemoChoices>
        </>
      )}

      {guess !== null && (
        <DemoResult title="実際の比率">
          <p style={{ margin: "0 0 8px" }}>
            Aチーム：{totalA}人中{badA}人が望ましくない行動（{Math.round((badA / totalA) * 100)}%） ／ Bチーム：
            {totalB}人中{badB}人が望ましくない行動（{Math.round((badB / totalB) * 100)}%）
          </p>
          {guess === "B" ? (
            <DemoHint>
              「Bチームの方が高い」と感じましたか？とても多くの人がそう答えますが、実際にはどちらもぴったり同じ比率です。心理学者ハミルトンとギフォードの実験でも、人数の少ない集団（少数派）が望ましくない行動を取ると、その組み合わせ自体が珍しく記憶に残りやすいため、実際の比率以上に「よくある」ことのように錯覚されることが確認されています。
            </DemoHint>
          ) : guess === "same" ? (
            <DemoHint>
              その通り、比率はまったく同じでした。多くの人はBチーム（少数派）の方が悪い行動の割合が高いと錯覚してしまいます。少数派＋珍しい行動という「珍しいもの同士の組み合わせ」が記憶に残りやすいためです。
            </DemoHint>
          ) : (
            <DemoHint>
              比率は実はまったく同じでした。多くの人はBチーム（少数派）の方が悪い行動の割合が高いと錯覚してしまいます。珍しい要素同士の組み合わせが記憶に残りやすいことが原因だと考えられています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type Answer = "buy" | "keep";

export function Demo({ accentHue }: DemoProps) {
  const [round1, setRound1] = useState<Answer | null>(null);
  const [round2, setRound2] = useState<Answer | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>【1回目】財布には1,000円札が1枚だけ入っています。会社帰りに250円の缶コーヒーを衝動買いしますか？</DemoPrompt>
      <div className={styles.visual}>
        <div className={styles.bill}>1,000円札 × 1枚</div>
      </div>
      <DemoChoices>
        <DemoButton selected={round1 === "buy"} onClick={() => setRound1("buy")}>
          買う
        </DemoButton>
        <DemoButton selected={round1 === "keep"} onClick={() => setRound1("keep")}>
          我慢する
        </DemoButton>
      </DemoChoices>

      {round1 && (
        <>
          <DemoPrompt>【2回目】今度は財布に100円玉が10枚（合計1,000円）入っています。同じ250円の缶コーヒーを衝動買いしますか？</DemoPrompt>
          <div className={styles.visual}>
            <div className={styles.coinsRow}>100円玉 × 10枚</div>
          </div>
          <DemoChoices>
            <DemoButton selected={round2 === "buy"} onClick={() => setRound2("buy")}>
              買う
            </DemoButton>
            <DemoButton selected={round2 === "keep"} onClick={() => setRound2("keep")}>
              我慢する
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {round1 && round2 && (
        <DemoResult title="2つの回答を比べてみると">
          {round1 === "keep" && round2 === "buy" ? (
            <DemoHint>
              同じ1,000円、同じ250円の買い物なのに、硬貨に分かれているときの方が「買う」を選びましたね。これがデノミネーション効果です。大きな額面のお札を崩すことは1つの大きな決断のように感じられますが、すでにバラバラになった硬貨は使うことへの抵抗感が小さくなります。ラグビルとスリヴァスタヴァの研究でも、小額紙幣や硬貨で渡された人の方が、その場で使ってしまう割合が高いことが確認されています。
            </DemoHint>
          ) : (
            <DemoHint>
              今回はどちらも同じ答えでしたね。ただし実際の研究では、多くの人が大きな額面の紙幣は崩したがらない一方、同じ金額でも小銭に分かれていると気軽に使ってしまう傾向が確認されています。お金の「形」が、使うかどうかの判断に影響しているのです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

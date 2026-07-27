import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type Choice1 = "web" | "webprint";
type Choice2 = "web" | "print" | "webprint";

const LABELS: Record<Choice1 | "print", string> = {
  web: "Web版のみ（590円/月）",
  webprint: "Web+印刷版セット（1,250円/月）",
  print: "印刷版のみ（1,250円/月）",
};

export function Demo({ accentHue }: DemoProps) {
  const [choice1, setChoice1] = useState<Choice1 | null>(null);
  const [choice2, setChoice2] = useState<Choice2 | null>(null);

  const switched = choice1 === "web" && choice2 === "webprint";

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>【1回目】雑誌の購読プランを選ぶとしたら、次のどちらにしますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice1 === "web"} onClick={() => setChoice1("web")}>
          {LABELS.web}
        </DemoButton>
        <DemoButton selected={choice1 === "webprint"} onClick={() => setChoice1("webprint")}>
          {LABELS.webprint}
        </DemoButton>
      </DemoChoices>

      {choice1 && (
        <>
          <DemoPrompt>【2回目】実は、こんな第3の選択肢も用意されていました。改めて3つから選ぶとしたら？</DemoPrompt>
          <DemoChoices>
            <DemoButton selected={choice2 === "web"} onClick={() => setChoice2("web")}>
              {LABELS.web}
            </DemoButton>
            <DemoButton selected={choice2 === "print"} onClick={() => setChoice2("print")}>
              {LABELS.print}
            </DemoButton>
            <DemoButton selected={choice2 === "webprint"} onClick={() => setChoice2("webprint")}>
              {LABELS.webprint}
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {choice1 && choice2 && (
        <DemoResult title="あなたの選択の変化">
          <p style={{ margin: "0 0 10px" }}>
            1回目は「{LABELS[choice1]}」、2回目は「{LABELS[choice2]}」を選びましたね。
          </p>
          <div className={styles.bars}>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>おとり無し・セット選択率</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "32%" }} />
              </div>
              <span>約32%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>おとり有り・セット選択率</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "84%" }} />
              </div>
              <span>約84%</span>
            </div>
          </div>
          {switched ? (
            <DemoHint>
              あなたはまさに「おとり効果」を体験しました。「印刷版のみ 1,250円」は、セットプランと同じ値段なのに内容だけ劣る、選ばれるはずのないおとりです。しかしそれが並んだ瞬間、セットプランが「同じ値段でお得」に見えて選びやすくなったのです。実際のThe Economist誌の実験でも、この第3の選択肢を加えるだけでセットプランの選択率が32%から84%まで跳ね上がりました。
            </DemoHint>
          ) : (
            <DemoHint>
              今回はおとりに惑わされず一貫した選択でしたね。ただし実際の実験では、多くの人が「印刷版のみ 1,250円」という劣ったおとりを見た瞬間に、同じ値段のセットプランへ選択を変えています。おとりは選ばれないための当て馬として機能するのです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

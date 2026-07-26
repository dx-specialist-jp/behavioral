import { useState } from "react";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const CARDS = ["E", "K", "4", "7"];

export function Demo() {
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const toggle = (card: string) => {
    if (checked) return;
    setSelected((prev) => (prev.includes(card) ? prev.filter((c) => c !== card) : [...prev, card]));
  };

  const pickedConfirming = selected.includes("E") && selected.includes("4") && selected.length === 2;
  const pickedCorrect = selected.includes("E") && selected.includes("7") && selected.length === 2;

  return (
    <DemoShell accentVar="--accent-confirmation">
      <DemoPrompt>
        ルール：「片面が母音なら、もう片面は偶数である」。このルールが正しいかを確かめるには、どのカードの裏を確認する必要がありますか？めくりたいカードをすべて選んでください。
      </DemoPrompt>
      <div className={styles.cards}>
        {CARDS.map((card) => (
          <button
            key={card}
            type="button"
            className={`${styles.card} ${selected.includes(card) ? styles.selected : ""}`}
            onClick={() => toggle(card)}
          >
            {card}
          </button>
        ))}
      </div>
      {!checked ? (
        <DemoButton variant="primary" onClick={() => setChecked(true)} disabled={selected.length === 0}>
          決定する
        </DemoButton>
      ) : (
        <DemoResult title="正解は「E」と「7」">
          <p style={{ margin: "0 0 8px" }}>
            「E」は母音なので裏が偶数か確認する必要があります。「7」は奇数なので、もし裏が母音だったらルールが崩れるため、これも確認が必要です。「K」は子音なので裏が何であってもルールに関係なく、「4」は裏が母音でも子音でもルールは崩れないため確認不要です。
          </p>
          {pickedCorrect ? (
            <DemoHint>
              正解です！反証できるカードまできちんと選べましたね。多くの人はここでつまずきます。
            </DemoHint>
          ) : pickedConfirming ? (
            <DemoHint>
              「E」と「4」を選びましたか？とても多くの人がそう答えます。この2枚は「ルールに当てはまる例」を探すには役立ちますが、ルールを覆す反例を探すには「7」を確認する必要があります。これがまさに確証バイアスです——私たちは規則を確かめるとき、無意識に「当てはまる証拠」ばかり探してしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              正解は「E」と「7」でした。人は無意識に「規則に当てはまる証拠」ばかりを探し、「規則を崩しうる反例」を見落としがちです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

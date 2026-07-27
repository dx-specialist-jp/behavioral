import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [startDay, setStartDay] = useState(10);
  const [revealed, setRevealed] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        3週間（21日間）後が締め切りの作業があります。作業量そのものは3〜4日あれば終わる程度です。あなたなら、今日から何日目に着手すると思いますか？
      </DemoPrompt>
      <DemoSlider
        label="着手する日"
        value={startDay}
        min={1}
        max={21}
        displayValue={`${startDay}日目`}
        onChange={setStartDay}
      />

      {!revealed && (
        <DemoButton variant="primary" onClick={() => setRevealed(true)}>
          回答する
        </DemoButton>
      )}

      {revealed && (
        <DemoResult title="あなたの着手予定日">
          <p style={{ margin: "0 0 8px" }}>{startDay}日目に着手すると答えましたね。</p>
          {startDay >= 15 ? (
            <DemoHint>
              締め切り間際での着手を選びましたね。これはまさに学生症候群です。余裕があるうちは切迫感を感じられず、締め切りが迫って初めて本腰が入る——多くの人がこのパターンに陥ります。作業量自体は変わらないのに、着手が遅れるほど失敗のリスクは高まります。
            </DemoHint>
          ) : (
            <DemoHint>
              比較的早めの着手を選びましたね。学生症候群の研究では、余裕がある期間の大半を先延ばしにしてしまう人が多数派です。早めに着手する意識は、締め切り直前の失敗リスクを大きく減らします。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const DEADLINES = [
  { id: "hour", label: "1時間後" },
  { id: "day", label: "明日中" },
  { id: "week", label: "1週間後" },
] as const;

type DeadlineId = (typeof DEADLINES)[number]["id"];

const EXPECTED: Record<DeadlineId, string> = {
  hour: "おそらく1時間ぎりぎりまで見直しや微調整を続けてしまうでしょう。",
  day: "おそらく明日の締め切り直前まで、少しずつ手を加え続けてしまうでしょう。",
  week: "おそらく1週間ぎりぎりまで、資料を練り直したり体裁を整えたりし続けてしまうでしょう。",
};

export function Demo({ accentHue }: DemoProps) {
  const [deadline, setDeadline] = useState<DeadlineId | null>(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        「簡単な1ページの報告書を書く」という、本来なら30分もあれば終わる作業を頼まれました。上司から締め切りを選べると言われたら、あなたはどれを選びますか？
      </DemoPrompt>
      <DemoChoices>
        {DEADLINES.map((d) => (
          <DemoButton key={d.id} selected={deadline === d.id} onClick={() => setDeadline(d.id)}>
            {d.label}
          </DemoButton>
        ))}
      </DemoChoices>

      {deadline && !revealed && (
        <DemoButton variant="primary" onClick={() => setRevealed(true)}>
          この締め切りで進める
        </DemoButton>
      )}

      {revealed && deadline && (
        <DemoResult title="実際にかかる時間を予想すると">
          <p style={{ margin: "0 0 8px" }}>
            作業量はどの締め切りを選んでも変わらず「30分」のはずです。しかし{EXPECTED[deadline]}
          </p>
          <DemoHint>
            これがパーキンソンの法則です。仕事にかかる時間は、作業の複雑さそのものよりも、与えられた時間の長さに合わせて膨張してしまいます。締め切りを短く区切ることが、時間の水増しを防ぐ有効な対策になります。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

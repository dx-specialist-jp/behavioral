import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const AMOUNTS = [
  { id: "0", label: "0パック（我慢できる）" },
  { id: "1", label: "1パック" },
  { id: "2", label: "2〜3パック" },
  { id: "3", label: "4パック以上" },
] as const;

type AmountId = (typeof AMOUNTS)[number]["id"];

export function Demo({ accentHue }: DemoProps) {
  const [predicted, setPredicted] = useState<AmountId | null>(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        あなたは今、満腹でお腹がいっぱいです。この状態で「来週1週間分の夜食用スナック」をネットスーパーで注文するとしたら、何パック買いますか？
      </DemoPrompt>
      <DemoChoices>
        {AMOUNTS.map((a) => (
          <DemoButton key={a.id} selected={predicted === a.id} onClick={() => setPredicted(a.id)}>
            {a.label}
          </DemoButton>
        ))}
      </DemoChoices>

      {predicted && !revealed && (
        <DemoButton variant="primary" onClick={() => setRevealed(true)}>
          回答する
        </DemoButton>
      )}

      {revealed && (
        <DemoResult title="満腹時と空腹時の違い">
          <p style={{ margin: "0 0 8px" }}>
            満腹な今のあなたは「{AMOUNTS.find((a) => a.id === predicted)?.label}」を選びましたね。では、同じ質問を空腹のときにされたらどうでしょうか。
          </p>
          <DemoHint>
            研究では、満腹時に見積もった購入量よりも、実際に空腹時に注文すると平均で数割多く、しかも予定になかった商品まで買い込んでしまうことが分かっています。冷静な「コールドな状態」の今のあなたは、空腹という「ホットな状態」の自分の欲求を正確に想像できていないのです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

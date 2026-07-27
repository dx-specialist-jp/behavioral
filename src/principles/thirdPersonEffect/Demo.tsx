import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [selfScore, setSelfScore] = useState(50);
  const [otherScore, setOtherScore] = useState(50);
  const [revealed, setRevealed] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        「絶対に痩せる」「必ず儲かる」といった、根拠の薄い誇大広告があるとします。
      </DemoPrompt>
      <DemoSlider
        label="あなた自身の購買判断への影響度"
        value={selfScore}
        min={0}
        max={100}
        displayValue={`${selfScore}%`}
        onChange={setSelfScore}
      />
      <DemoSlider
        label="一般的な他の消費者の購買判断への影響度"
        value={otherScore}
        min={0}
        max={100}
        displayValue={`${otherScore}%`}
        onChange={setOtherScore}
      />

      {!revealed && (
        <DemoButton variant="primary" onClick={() => setRevealed(true)}>
          回答する
        </DemoButton>
      )}

      {revealed && (
        <DemoResult title="自分と他人への影響度の差">
          <p style={{ margin: "0 0 8px" }}>
            自分自身：{selfScore}% ／ 他の消費者：{otherScore}%
          </p>
          {otherScore > selfScore ? (
            <DemoHint>
              他人の方が影響を受けやすいと評価しましたね。これはまさに第三者効果です。多くの人が、同じ誇大広告に対して「自分は騙されないが、他人は流されるだろう」と考えます。しかし実際には、自分自身も同程度に影響を受けている可能性があります。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は自分と他人を同程度、あるいは自分の方が影響を受けやすいと評価しましたね。これは少数派の回答です。多くの調査では、人は他人の方がメディアの影響を強く受けると見積もる傾向が一貫して確認されています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

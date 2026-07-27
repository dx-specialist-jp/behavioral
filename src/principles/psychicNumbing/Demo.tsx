import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

type Stage = "one" | "many" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("one");
  const [oneDonation, setOneDonation] = useState(1000);
  const [manyDonation, setManyDonation] = useState(1000);

  const perPersonMany = manyDonation / 3_000_000;

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "one" && (
        <>
          <DemoPrompt>
            マリアちゃん（7歳）は干ばつの被害で食料が手に入らず、あと数週間で命に関わる状態です。あなたは彼女のために、いくら寄付しますか？
          </DemoPrompt>
          <DemoSlider
            label="寄付額"
            value={oneDonation}
            min={0}
            max={5000}
            step={100}
            displayValue={`¥${oneDonation.toLocaleString()}`}
            onChange={setOneDonation}
          />
          <DemoButton variant="primary" onClick={() => setStage("many")}>
            決定する
          </DemoButton>
        </>
      )}

      {stage === "many" && (
        <>
          <DemoPrompt>
            同じ干ばつにより、マリアちゃんを含む約300万人の子供たちが同じように命の危険にさらされています。あなたはこの300万人のために、いくら寄付しますか？
          </DemoPrompt>
          <DemoSlider
            label="寄付額"
            value={manyDonation}
            min={0}
            max={5000}
            step={100}
            displayValue={`¥${manyDonation.toLocaleString()}`}
            onChange={setManyDonation}
          />
          <DemoButton variant="primary" onClick={() => setStage("done")}>
            決定する
          </DemoButton>
        </>
      )}

      {stage === "done" && (
        <DemoResult title="1人への寄付と、300万人への寄付を比べると">
          <p style={{ margin: "0 0 8px" }}>
            マリアちゃん1人へ：¥{oneDonation.toLocaleString()} / 300万人へ：¥
            {manyDonation.toLocaleString()}（1人あたり約{perPersonMany < 0.01 ? "0.00" : perPersonMany.toFixed(2)}円）
          </p>
          {manyDonation <= oneDonation * 3 ? (
            <DemoHint>
              被害者の数はマリアちゃん1人から300万人へと、300万倍になりました。しかしあなたの寄付額はそれに比例して増えていませんね（多くの人がそうなります）。1人の具体的な物語には強く心が動くのに、その人数が膨大な統計になった途端、私たちの感情はほとんど反応しなくなってしまう——これが心理的無感覚です。研究者ポール・スロヴィックは、統計的な数字を付け加えるだけで、むしろ寄付額が減ることさえあると報告しています。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は人数の増加に応じて寄付額も増やせましたね。ただ実際の調査では、被害者の数が増えるほど1人あたりへの感情的な重みが急激に薄れ、寄付額が数字ほどには増えない人が大多数を占めることが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

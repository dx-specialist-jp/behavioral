import { useState } from "react";
import type { DemoProps } from "../types";
import {
  DemoButton,
  DemoChoices,
  DemoHint,
  DemoPrompt,
  DemoResult,
  DemoShell,
  DemoSlider,
} from "../../components/ui/DemoUI";

const FACTORS = ["年収が今の1.5倍になる", "毎日快晴の温暖な地域に引っ越す", "通勤時間がゼロになる", "理想の肩書き・役職に就く"];

export function Demo({ accentHue }: DemoProps) {
  const [baseline, setBaseline] = useState(6);
  const [factor, setFactor] = useState<string | null>(null);
  const [predicted, setPredicted] = useState(6);
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  const reset = () => {
    setBaseline(6);
    setFactor(null);
    setPredicted(6);
    setStage(0);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === 0 && (
        <>
          <DemoPrompt>まず、今のあなたの人生の満足度を10点満点で教えてください。</DemoPrompt>
          <DemoSlider
            label="今の生活満足度"
            value={baseline}
            min={0}
            max={10}
            displayValue={`${baseline}点`}
            onChange={setBaseline}
          />
          <DemoButton variant="primary" onClick={() => setStage(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 1 && (
        <>
          <DemoPrompt>次の中から、今しばらく「じっくり考えてみたい」ことを1つ選んでください。</DemoPrompt>
          <DemoChoices>
            {FACTORS.map((f) => (
              <DemoButton key={f} selected={factor === f} onClick={() => setFactor(f)}>
                {f}
              </DemoButton>
            ))}
          </DemoChoices>
          {factor && (
            <>
              <DemoPrompt>
                では実際に「{factor}」ことをじっくり想像してみてください。もしそれが現実になったら、あなたの人生の満足度は何点になると思いますか？
              </DemoPrompt>
              <DemoSlider
                label="実現後の満足度（予測）"
                value={predicted}
                min={0}
                max={10}
                displayValue={`${predicted}点`}
                onChange={setPredicted}
              />
              <DemoButton variant="primary" onClick={() => setStage(2)}>
                結果を見る
              </DemoButton>
            </>
          )}
        </>
      )}

      {stage === 2 && (
        <DemoResult title="予測を振り返ると">
          <p style={{ margin: "0 0 8px" }}>
            今の満足度：{baseline}点 → 「{factor}」を想像した後の予測：{predicted}点
          </p>
          {predicted - baseline >= 2 ? (
            <DemoHint>
              一つの要素を思い浮かべただけで、満足度の予測が{predicted - baseline}点も跳ね上がりましたね。しかし実際の研究（カーネマンとシュケイドの気候研究や、所得と幸福度の調査など）では、一つの要素がどれだけ改善しても、人生全体の満足度への実際の影響はずっと小さいことが繰り返し示されています。今まさに、その要素に意識を集中させたことで生まれた「フォーカシング・イリュージョン」です。
            </DemoHint>
          ) : (
            <DemoHint>
              予測を控えめに見積もりましたね。とても現実的です。多くの人はここで一つの要素に意識が集中するあまり、その影響を大きく見積もりすぎてしまいます。
            </DemoHint>
          )}
          <DemoButton onClick={reset}>別の要素で試す</DemoButton>
        </DemoResult>
      )}
    </DemoShell>
  );
}

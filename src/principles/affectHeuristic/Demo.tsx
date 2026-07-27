import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [benefitA, setBenefitA] = useState(5);
  const [riskA, setRiskA] = useState(5);
  const [benefitB, setBenefitB] = useState(5);
  const [riskB, setRiskB] = useState(5);

  return (
    <DemoShell accentHue={accentHue}>
      {stage === 0 && (
        <>
          <DemoPrompt>
            次の技術について、直感でどう感じるか教えてください。「クリーンで低炭素な次世代エネルギー技術」
          </DemoPrompt>
          <DemoSlider label="利益の大きさ" value={benefitA} min={0} max={10} onChange={setBenefitA} />
          <DemoSlider label="リスクの大きさ" value={riskA} min={0} max={10} onChange={setRiskA} />
          <DemoButton variant="primary" onClick={() => setStage(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 1 && (
        <>
          <DemoPrompt>
            別の技術についても教えてください。「放射性物質を扱い、事故時には広範囲に影響が及びうる発電技術」
          </DemoPrompt>
          <DemoSlider label="利益の大きさ" value={benefitB} min={0} max={10} onChange={setBenefitB} />
          <DemoSlider label="リスクの大きさ" value={riskB} min={0} max={10} onChange={setRiskB} />
          <DemoButton variant="primary" onClick={() => setStage(2)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === 2 && (
        <DemoResult title="実はどちらも「原子力発電」の説明でした">
          <p style={{ margin: "0 0 8px" }}>
            1つ目は利益 {benefitA} ／ リスク {riskA}、2つ目は利益 {benefitB} ／ リスク {riskB} と評価しましたね。
          </p>
          {benefitA !== benefitB || riskA !== riskB ? (
            <DemoHint>
              同じ技術のはずなのに、言葉の印象だけで評価が変わりましたね。心理学者ポール・スロビックの研究では、人は対象への全体的な「好き・嫌い」という感情が先に生まれ、その感情に沿う形でリスクと利益の両方の評価を後付けしてしまうことが分かっています。好印象な説明ではリスクを低く、利益を高く見積もり、不安をあおる説明ではその逆が起きやすいのです。
            </DemoHint>
          ) : (
            <DemoHint>
              2つの評価がほぼ同じでしたね。素晴らしい判断です。多くの人は言葉の印象（感情）だけでリスクと利益の評価を変えてしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

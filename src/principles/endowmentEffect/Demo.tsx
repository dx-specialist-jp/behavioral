import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [sellPrice, setSellPrice] = useState(1000);
  const [buyPrice, setBuyPrice] = useState(1000);

  return (
    <DemoShell accentHue={accentHue}>
      {stage === 0 && (
        <>
          <DemoPrompt>
            想像してください。あなたは今、シンプルな無地のマグカップを1つ持っています。もしこれを売るとしたら、最低いくらなら手放してもいいですか？
          </DemoPrompt>
          <DemoSlider label="最低売却希望額" value={sellPrice} min={0} max={3000} step={100} displayValue={`${sellPrice}円`} onChange={setSellPrice} />
          <DemoButton variant="primary" onClick={() => setStage(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 1 && (
        <>
          <DemoPrompt>
            今度は、そのマグカップをまだ持っていないとします。雑貨屋の棚で同じマグカップを見つけました。いくらまでなら払って買いますか？
          </DemoPrompt>
          <DemoSlider label="最大支払希望額" value={buyPrice} min={0} max={3000} step={100} displayValue={`${buyPrice}円`} onChange={setBuyPrice} />
          <DemoButton variant="primary" onClick={() => setStage(2)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === 2 && (
        <DemoResult title="2つの金額を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            持っている前提での売却希望額：{sellPrice}円 ／ 持っていない前提での購入希望額：{buyPrice}円
          </p>
          {sellPrice > buyPrice ? (
            <DemoHint>
              まったく同じマグカップなのに、売る値段の方が買う値段より高くなりましたね（差は{sellPrice - buyPrice}
              円）。これはカーネマンらのマグカップ実験と同じ結果です。「自分の物」になったとたん、手放すことが損失のように感じられ、価値が高く見積もられてしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は売却希望額と購入希望額がほぼ同じでしたね。素晴らしい判断です。多くの人はここで売却希望額の方が高くなり、保有効果が表れます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [fullQty, setFullQty] = useState(5);
  const [hungryQty, setHungryQty] = useState(5);

  const reset = () => {
    setFullQty(5);
    setHungryQty(5);
    setStage(0);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === 0 && (
        <>
          <DemoPrompt>
            想像してください。あなたは今、大盛りの定食を食べ終えたばかりで、お腹がぱんぱんです。この状態のまま、1週間分の食料品の買い出しに行きます。カゴにいくつ商品を入れますか？
          </DemoPrompt>
          <DemoSlider
            label="満腹のときに買う品数"
            value={fullQty}
            min={1}
            max={20}
            displayValue={`${fullQty}品`}
            onChange={setFullQty}
          />
          <DemoButton variant="primary" onClick={() => setStage(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 1 && (
        <>
          <DemoPrompt>
            今度は逆を想像してください。あなたは昼食を抜いて、お腹がぐうぐう鳴るほど空腹です。この状態のまま、同じく1週間分の食料品の買い出しに行きます。カゴにいくつ商品を入れますか？
          </DemoPrompt>
          <DemoSlider
            label="空腹のときに買う品数"
            value={hungryQty}
            min={1}
            max={20}
            displayValue={`${hungryQty}品`}
            onChange={setHungryQty}
          />
          <DemoButton variant="primary" onClick={() => setStage(2)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === 2 && (
        <DemoResult title="2つの答えを比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            満腹時の予想：{fullQty}品 ／ 空腹時の予想：{hungryQty}品
          </p>
          {hungryQty > fullQty ? (
            <DemoHint>
              「1週間分必要な量」という客観的な事実はどちらの想像でも同じはずなのに、空腹を想像しただけで買う量が{hungryQty - fullQty}
              品も増えましたね。これが投影バイアスです。実際の研究でも、空腹時にスーパーへ行った人は満腹時に行った人より多く買い込んでしまうことが分かっています。「今」の感覚が、将来必要な量の予測に紛れ込んでしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              満腹時と空腹時でほぼ同じ品数を選びましたね。素晴らしい判断です。多くの人は空腹を想像した瞬間に予想量が増えてしまい、「今の状態」を将来にそのまま投影してしまいます。
            </DemoHint>
          )}
          <DemoButton onClick={reset}>もう一度試す</DemoButton>
        </DemoResult>
      )}
    </DemoShell>
  );
}

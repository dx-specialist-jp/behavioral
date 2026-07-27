import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

type Stage = "before" | "correction" | "after";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("before");
  const [before, setBefore] = useState(50);
  const [after, setAfter] = useState(50);

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "before" && (
        <>
          <DemoPrompt>
            ネットで「電子レンジで温めた水をあげると、植物は数日で枯れる」という噂を見かけました。この噂をどれくらい信じますか？
          </DemoPrompt>
          <DemoSlider
            label="信じる度合い"
            value={before}
            min={0}
            max={100}
            displayValue={`${before}%`}
            onChange={setBefore}
          />
          <DemoButton variant="primary" onClick={() => setStage("correction")}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === "correction" && (
        <>
          <DemoPrompt>
            調べてみると、複数の追試実験で「電子レンジで温めた水」と「普通に温めた水」のどちらを与えても植物の育ち方に有意な差は見られない、という検証結果が見つかりました。噂には科学的根拠が乏しいようです。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={() => setStage("after")}>
            この情報を読んだ
          </DemoButton>
        </>
      )}

      {stage === "after" && (
        <>
          <DemoPrompt>改めて聞きます。この噂をどれくらい信じますか？</DemoPrompt>
          <DemoSlider
            label="信じる度合い"
            value={after}
            min={0}
            max={100}
            displayValue={`${after}%`}
            onChange={setAfter}
          />
          <DemoResult title="信じる度合いの変化">
            <p style={{ margin: "0 0 8px" }}>
              訂正前：{before}% → 訂正後：{after}%
            </p>
            {after > before ? (
              <DemoHint>
                訂正を読んだのに、信じる度合いがむしろ上がりましたね。これがバックファイア効果です。反証を突きつけられると、人は素直に考えを改めるのではなく、かえって元の考えにしがみつくことがあります。
              </DemoHint>
            ) : (
              <DemoHint>
                今回は訂正を受けて信じる度合いが下がりましたね。多くの場合、事実の訂正は信念を弱める方向に働きますが、自分のアイデンティティと強く結びついた信念については、こうした訂正だけでは変わりにくいことが分かっています。
              </DemoHint>
            )}
          </DemoResult>
        </>
      )}
    </DemoShell>
  );
}

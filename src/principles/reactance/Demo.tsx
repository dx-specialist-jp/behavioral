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

const DESSERTS = ["チョコレートタルト", "チーズケーキ", "抹茶プリン", "フルーツパフェ"];

type Stage = "pick" | "before" | "restrict" | "after" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("pick");
  const [pick, setPick] = useState<string | null>(null);
  const [before, setBefore] = useState(50);
  const [after, setAfter] = useState(50);

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "pick" && (
        <>
          <DemoPrompt>デザートメニューです。次に食べたいものを1つ選んでください。</DemoPrompt>
          <DemoChoices>
            {DESSERTS.map((d) => (
              <DemoButton
                key={d}
                onClick={() => {
                  setPick(d);
                  setStage("before");
                }}
              >
                {d}
              </DemoButton>
            ))}
          </DemoChoices>
        </>
      )}

      {stage === "before" && pick && (
        <>
          <DemoPrompt>
            「{pick}」を選びましたね。今、それをどれくらい食べたいですか？
          </DemoPrompt>
          <DemoSlider
            label="食べたい気持ちの強さ"
            value={before}
            min={0}
            max={100}
            displayValue={`${before}`}
            onChange={setBefore}
          />
          <DemoButton variant="primary" onClick={() => setStage("restrict")}>
            決定する
          </DemoButton>
        </>
      )}

      {stage === "restrict" && pick && (
        <>
          <DemoPrompt>
            店員が申し訳なさそうにやってきました。「大変恐れ入りますが、『{pick}』は本日ちょうど提供を終了してしまいまして……こちらだけはご注文いただけません」
          </DemoPrompt>
          <DemoButton variant="primary" onClick={() => setStage("after")}>
            その説明を聞いた
          </DemoButton>
        </>
      )}

      {stage === "after" && pick && (
        <>
          <DemoPrompt>
            もう一度聞きます。今、この瞬間「{pick}」をどれくらい食べたいですか？（もう注文できないと分かった上で答えてください）
          </DemoPrompt>
          <DemoSlider
            label="食べたい気持ちの強さ"
            value={after}
            min={0}
            max={100}
            displayValue={`${after}`}
            onChange={setAfter}
          />
          <DemoButton variant="primary" onClick={() => setStage("done")}>
            回答する
          </DemoButton>
        </>
      )}

      {stage === "done" && pick && (
        <DemoResult title="提供禁止の前と後を比べると">
          <p style={{ margin: "0 0 8px" }}>
            禁止される前：{before} → 禁止だと知った後：{after}
          </p>
          {after > before ? (
            <DemoHint>
              選べなくなった途端に、食べたい気持ちがむしろ強くなりましたね。「{pick}」の味も見た目も何も変わっていないのに、「選べない」という制限がかかっただけで魅力が増して感じられる——これが心理的リアクタンスです。禁止や制限は、失われた選択の自由を取り戻したいという欲求を刺激します。
            </DemoHint>
          ) : after === before ? (
            <DemoHint>
              今回は気持ちに変化がなかったようですね。ただ多くの人は、選択肢を禁止されると、その選択肢への欲求がむしろ強まることが実験で確認されています（有名な例が「禁止された恋ほど燃え上がる」というロミオとジュリエット効果です）。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は気持ちが下がりましたね。ただ実際には、多くの人が「選べない」と言われた選択肢を以前より魅力的に感じてしまう傾向があることが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

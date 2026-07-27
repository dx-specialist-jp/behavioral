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

// 実際の(想定)世論調査の結果。ユーザーの選択に関わらず、真の値は固定。
const ACTUAL_PERCENT: Record<string, number> = {
  yes: 42,
  no: 58,
};

type Stage = "opinion" | "estimate" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("opinion");
  const [opinion, setOpinion] = useState<"yes" | "no" | null>(null);
  const [estimate, setEstimate] = useState(50);

  const actual = opinion ? ACTUAL_PERCENT[opinion] : 0;

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "opinion" && (
        <>
          <DemoPrompt>パイナップルはピザに乗せるべきだと思いますか？</DemoPrompt>
          <DemoChoices>
            <DemoButton
              onClick={() => {
                setOpinion("yes");
                setStage("estimate");
              }}
            >
              乗せるべき
            </DemoButton>
            <DemoButton
              onClick={() => {
                setOpinion("no");
                setStage("estimate");
              }}
            >
              乗せるべきでない
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {stage === "estimate" && opinion && (
        <>
          <DemoPrompt>
            あなたと同じ意見（「{opinion === "yes" ? "乗せるべき" : "乗せるべきでない"}」）の人は、日本の成人のうち何%くらいいると思いますか？
          </DemoPrompt>
          <DemoSlider
            label="同じ意見の人の割合"
            value={estimate}
            min={0}
            max={100}
            displayValue={`${estimate}%`}
            onChange={setEstimate}
          />
          <DemoButton variant="primary" onClick={() => setStage("done")}>
            回答する
          </DemoButton>
        </>
      )}

      {stage === "done" && opinion && (
        <DemoResult title="あなたの推測と、実際の調査結果">
          <p style={{ margin: "0 0 8px" }}>
            あなたの推測：{estimate}% / 実際の調査結果：{actual}%
          </p>
          {estimate > actual ? (
            <DemoHint>
              実際よりも高く見積もりましたね。自分と同じ意見を持つ人の割合を、実際以上に多いと感じてしまう——これが偽の合意効果です。私たちは自分と価値観の近い人と接する機会が多いため、狭い交友関係から「世間一般」を推測してしまいがちです。
            </DemoHint>
          ) : estimate === actual ? (
            <DemoHint>
              驚くほど正確な推測でしたね。ただ一般的には、多くの人が自分の意見を持つ人の割合を実際より高く見積もる傾向があることが分かっています。
            </DemoHint>
          ) : (
            <DemoHint>
              実際よりも控えめに見積もりましたね。ただ多くの人はこの手の質問で、自分と同じ意見の人の割合を実際より多く見積もってしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [actionScore, setActionScore] = useState(5);
  const [omissionScore, setOmissionScore] = useState(5);

  const reset = () => {
    setActionScore(5);
    setOmissionScore(5);
    setStage(0);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === 0 && (
        <>
          <DemoPrompt>
            ある工場が、老朽化した設備を新しい設備に交換しました。ところが新設備の不具合により事故が起き、作業員10人が怪我をしました。この会社の責任の重さを0〜10点で採点してください。
          </DemoPrompt>
          <DemoSlider
            label="責任の重さ（新設備に交換した結果の事故）"
            value={actionScore}
            min={0}
            max={10}
            displayValue={`${actionScore}点`}
            onChange={setActionScore}
          />
          <DemoButton variant="primary" onClick={() => setStage(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 1 && (
        <>
          <DemoPrompt>
            別の工場は、老朽化した設備をそのまま使い続けていました（交換しませんでした）。その古い設備が原因で事故が起き、作業員10人が怪我をしました。この会社の責任の重さを0〜10点で採点してください。
          </DemoPrompt>
          <DemoSlider
            label="責任の重さ（設備を交換しなかった結果の事故）"
            value={omissionScore}
            min={0}
            max={10}
            displayValue={`${omissionScore}点`}
            onChange={setOmissionScore}
          />
          <DemoButton variant="primary" onClick={() => setStage(2)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === 2 && (
        <DemoResult title="2つの採点を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            設備を交換した末の事故：{actionScore}点 ／ 設備を交換しなかった末の事故：{omissionScore}点
          </p>
          <p style={{ margin: "0 0 8px" }}>どちらも「作業員10人が怪我をした」というまったく同じ被害の大きさです。</p>
          {actionScore > omissionScore ? (
            <DemoHint>
              まったく同じ被害なのに、「行動（交換）」した結果の事故の方を{actionScore - omissionScore}
              点重く採点しましたね。これが不作為バイアスです。私たちは、何かをした結果の害を、何もしなかった結果の同じ害よりも重く感じてしまいます。ワクチンの副反応を過度に恐れる一方で、より高い確率の自然感染リスクを容認してしまう心理も同じ構造です。
            </DemoHint>
          ) : (
            <DemoHint>
              同じ被害の大きさを、ほぼ同じ責任の重さで採点できましたね。公平な判断です。多くの人はここで「行動した結果」の方を重く採点してしまい、不作為バイアスが表れます。
            </DemoHint>
          )}
          <DemoButton onClick={reset}>もう一度試す</DemoButton>
        </DemoResult>
      )}
    </DemoShell>
  );
}

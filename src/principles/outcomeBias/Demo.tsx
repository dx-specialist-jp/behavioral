import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

type Outcome = "success" | "failure";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [before, setBefore] = useState(5);
  const [after, setAfter] = useState(5);
  const [outcome, setOutcome] = useState<Outcome | null>(null);

  const reveal = () => {
    setOutcome(Math.random() < 0.7 ? "success" : "failure");
    setAfter(before);
    setStage(1);
  };

  const reset = () => {
    setBefore(5);
    setAfter(5);
    setOutcome(null);
    setStage(0);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === 0 && (
        <>
          <DemoPrompt>
            あるスタートアップのCEOが、専門家の分析にもとづき「成功確率70%」と見積もられた新規事業に10億円を投資すると決めました。結果はまだ分かりません。
          </DemoPrompt>
          <DemoPrompt>この時点の情報だけを踏まえて、この意思決定の質を採点してください。</DemoPrompt>
          <DemoSlider
            label="意思決定の質（結果を知る前）"
            value={before}
            min={0}
            max={10}
            displayValue={`${before}点`}
            onChange={setBefore}
          />
          <DemoButton variant="primary" onClick={reveal}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === 1 && outcome && (
        <>
          <DemoPrompt>
            結果が出ました。この新規事業は{outcome === "success" ? "成功し、大きな利益を生みました。" : "失敗し、10億円は損失になりました。"}
          </DemoPrompt>
          <DemoPrompt>では改めて、この意思決定の質を採点し直してください。</DemoPrompt>
          <DemoSlider
            label="意思決定の質（結果を知った後）"
            value={after}
            min={0}
            max={10}
            displayValue={`${after}点`}
            onChange={setAfter}
          />
          <DemoButton variant="primary" onClick={() => setStage(2)}>
            比較する
          </DemoButton>
        </>
      )}

      {stage === 2 && outcome && (
        <DemoResult title="2回の採点を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            結果を知る前：{before}点 ／ 結果を知った後：{after}点
          </p>
          <p style={{ margin: "0 0 8px" }}>
            決定した時点の情報（成功確率70%という見積もり）は、結果を知る前後でまったく変わっていません。
          </p>
          {after !== before ? (
            <DemoHint>
              意思決定そのものの情報は変わっていないのに、結果を知っただけで採点が{Math.abs(after - before)}
              点動きましたね。これが結果バイアスです。{outcome === "success" ? "成功した" : "失敗した"}
              という目に見える結果に引っ張られて、当時の判断の質そのものへの評価まで変わってしまいました。
            </DemoHint>
          ) : (
            <DemoHint>
              結果を知っても採点を変えませんでしたね。素晴らしい一貫性です。多くの人は結果を知った瞬間に採点を大きく変えてしまい、決定の質と結果を混同してしまいます。
            </DemoHint>
          )}
          <DemoButton onClick={reset}>もう一度試す</DemoButton>
        </DemoResult>
      )}
    </DemoShell>
  );
}

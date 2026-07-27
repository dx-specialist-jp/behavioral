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

const EVENTS = [
  "楽しみにしていた旅行やイベントが中止になった",
  "大事な試験や面接に落ちた",
  "欲しかった仕事やポストを逃した",
  "友人や恋人と大きなケンカをした",
];

export function Demo({ accentHue }: DemoProps) {
  const [event, setEvent] = useState<string | null>(null);
  const [predicted, setPredicted] = useState(14);
  const [actual, setActual] = useState(14);
  const [stage, setStage] = useState<0 | 1 | 2>(0);

  const reset = () => {
    setEvent(null);
    setPredicted(14);
    setActual(14);
    setStage(0);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === 0 && (
        <>
          <DemoPrompt>あなた自身の過去を振り返ってみましょう。近いものを1つ選んでください。</DemoPrompt>
          <DemoChoices>
            {EVENTS.map((e) => (
              <DemoButton key={e} selected={event === e} onClick={() => setEvent(e)}>
                {e}
              </DemoButton>
            ))}
          </DemoChoices>
          {event && (
            <DemoButton variant="primary" onClick={() => setStage(1)}>
              次へ
            </DemoButton>
          )}
        </>
      )}

      {stage === 1 && (
        <>
          <DemoPrompt>
            その出来事が起きた直後、あなたは「この気持ちはどれくらい続く」と予想したでしょうか？（当時の自分の予想を思い出してください）
          </DemoPrompt>
          <DemoSlider
            label="当時、予想した持続期間"
            value={predicted}
            min={1}
            max={90}
            displayValue={`${predicted}日間`}
            onChange={setPredicted}
          />
          <DemoButton variant="primary" onClick={() => setStage(2)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 2 && (
        <>
          <DemoPrompt>では実際には、そのつらい気持ちや強い感情は何日くらいで薄れていきましたか？</DemoPrompt>
          <DemoSlider
            label="実際に続いた期間"
            value={actual}
            min={1}
            max={90}
            displayValue={`${actual}日間`}
            onChange={setActual}
          />
          <DemoResult title="予想と実際を比べてみると">
            <p style={{ margin: "0 0 8px" }}>
              当時の予想：{predicted}日間 ／ 実際：{actual}日間
            </p>
            {predicted > actual ? (
              <DemoHint>
                実際に続いた期間より、当時の予想の方が{predicted - actual}
                日も長かったですね。これはギルバートらが示した「インパクト・バイアス」そのものです。私たちは自分の心が立ち直る力（心理的な免疫システム）を過小評価し、感情の持続期間を過大に予測してしまいます。
              </DemoHint>
            ) : (
              <DemoHint>
                今回は予想と実際の期間が近かったようですね。多くの人はここで予想の方が大きく上振れし、実際よりずっと長く感情が続くと思い込んでしまいます。
              </DemoHint>
            )}
            <DemoButton onClick={reset}>別の出来事で試す</DemoButton>
          </DemoResult>
        </>
      )}
    </DemoShell>
  );
}

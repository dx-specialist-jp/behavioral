import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const TRIAL_A = [7, 7, 7, 7, 7, 7];
const TRIAL_B = [7, 7, 7, 7, 7, 7, 5, 5, 5];

type Phase = "idle" | "playA" | "playB" | "choose" | "result";

function total(seq: number[]) {
  return seq.reduce((a, b) => a + b, 0);
}

export function Demo({ accentHue }: DemoProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [stepIndex, setStepIndex] = useState(0);
  const [choice, setChoice] = useState<"A" | "B" | null>(null);

  useEffect(() => {
    if (phase !== "playA" && phase !== "playB") return;
    const seq = phase === "playA" ? TRIAL_A : TRIAL_B;
    if (stepIndex >= seq.length) {
      const timer = window.setTimeout(() => {
        if (phase === "playA") {
          setStepIndex(0);
          setPhase("playB");
        } else {
          setPhase("choose");
        }
      }, 350);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => setStepIndex((i) => i + 1), 350);
    return () => window.clearTimeout(timer);
  }, [phase, stepIndex]);

  const start = () => {
    setStepIndex(0);
    setPhase("playA");
  };

  const renderBars = (seq: number[], upto: number) => (
    <div className={styles.barsRow}>
      {seq.slice(0, upto).map((v, i) => (
        <div key={i} className={styles.barCol}>
          <div className={styles.bar} style={{ height: `${v * 8}px` }} />
        </div>
      ))}
    </div>
  );

  const handleChoice = (c: "A" | "B") => {
    setChoice(c);
    setPhase("result");
  };

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "idle" && (
        <>
          <DemoPrompt>
            冷たい水に手を浸す実験を模擬体験してみましょう。2つの試行（不快感の推移）を再生します。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={start}>
            試行Aを再生する
          </DemoButton>
        </>
      )}

      {phase === "playA" && (
        <>
          <DemoPrompt>試行A（不快感の推移／短め）</DemoPrompt>
          {renderBars(TRIAL_A, stepIndex)}
        </>
      )}

      {phase === "playB" && (
        <>
          <DemoPrompt>試行B（不快感の推移／少し長め）</DemoPrompt>
          {renderBars(TRIAL_B, stepIndex)}
        </>
      )}

      {phase === "choose" && (
        <>
          <DemoPrompt>試行A（6秒間）と試行B（9秒間）、どちらもすでに体験しました。もう一度受けるとしたら、どちらを選びますか？</DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => handleChoice("A")}>試行Aを繰り返す</DemoButton>
            <DemoButton onClick={() => handleChoice("B")}>試行Bを繰り返す</DemoButton>
          </DemoChoices>
        </>
      )}

      {phase === "result" && (
        <DemoResult title="実は、試行Bの方が不快感の総量は多いのです">
          <p style={{ margin: "0 0 8px" }}>
            試行A：長さ6秒・不快感の合計 {total(TRIAL_A)} ／ 試行B：長さ9秒・不快感の合計 {total(TRIAL_B)}
          </p>
          <p style={{ margin: "0 0 8px" }}>
            試行Bは試行Aとまったく同じ6秒間を含んだ上に、さらに3秒分の不快感が上乗せされています。合理的に考えれば試行Aの方が常に「お得」なはずです。
          </p>
          {choice === "B" ? (
            <DemoHint>
              それでもあなたは試行Bを選びましたね。多くの人が同じ選択をします。試行Bは最後の3秒で痛みが少し和らいだため、記憶の中の印象が良くなったのです。持続時間そのものは記憶の評価にはほとんど反映されず、無視されてしまう——これが持続時間の無視です。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は合理的な試行Aを選びましたね。ただし実際の実験では、多くの参加者が「長くて不快の総量も多い」はずの試行Bを選びます。終わり方が穏やかだと、持続時間の長さそのものは記憶の評価からほとんど抜け落ちてしまうのです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

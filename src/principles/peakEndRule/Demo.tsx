import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const SEQ_A = [5, 7, 9, 6, 4, 2];
const SEQ_B = [2, 6, 9, 4, 4, 8];

type Phase = "idle" | "playA" | "rateA" | "playB" | "rateB" | "result";

function average(seq: number[]) {
  return seq.reduce((a, b) => a + b, 0) / seq.length;
}

function peakEndAverage(seq: number[]) {
  return (Math.max(...seq) + seq[seq.length - 1]) / 2;
}

export function Demo({ accentHue }: DemoProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [stepIndex, setStepIndex] = useState(0);
  const [ratingA, setRatingA] = useState(5);
  const [ratingB, setRatingB] = useState(5);

  useEffect(() => {
    if (phase !== "playA" && phase !== "playB") return;
    const seq = phase === "playA" ? SEQ_A : SEQ_B;
    if (stepIndex >= seq.length) {
      const timer = window.setTimeout(() => setPhase(phase === "playA" ? "rateA" : "rateB"), 300);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => setStepIndex((i) => i + 1), 450);
    return () => window.clearTimeout(timer);
  }, [phase, stepIndex]);

  const startA = () => {
    setStepIndex(0);
    setPhase("playA");
  };
  const startB = () => {
    setStepIndex(0);
    setPhase("playB");
  };

  const renderBars = (seq: number[], upto: number) => (
    <div className={styles.barsRow}>
      {seq.slice(0, upto).map((v, i) => (
        <div key={i} className={styles.barCol}>
          <span className={styles.barValue}>{v}</span>
          <div className={styles.bar} style={{ height: `${v * 8}px` }} />
        </div>
      ))}
    </div>
  );

  const avgA = average(SEQ_A);
  const avgB = average(SEQ_B);
  const peakEndA = peakEndAverage(SEQ_A);
  const peakEndB = peakEndAverage(SEQ_B);

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "idle" && (
        <>
          <DemoPrompt>
            これから、ある「不快な体験（検査の痛みなど）」を数値の推移として2パターン再生します。それぞれ最後まで見たあと、全体としての不快感を0〜10で評価してください。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={startA}>
            体験Aを再生する
          </DemoButton>
        </>
      )}

      {(phase === "playA" || phase === "rateA") && (
        <>
          <DemoPrompt>体験A（時間ごとの不快感の推移）</DemoPrompt>
          {renderBars(SEQ_A, phase === "playA" ? stepIndex : SEQ_A.length)}
        </>
      )}

      {phase === "rateA" && (
        <>
          <DemoSlider label="体験A：全体としての不快感" value={ratingA} min={0} max={10} onChange={setRatingA} />
          <DemoButton variant="primary" onClick={startB}>
            評価して体験Bへ
          </DemoButton>
        </>
      )}

      {(phase === "playB" || phase === "rateB") && (
        <>
          <DemoPrompt>体験B（時間ごとの不快感の推移）</DemoPrompt>
          {renderBars(SEQ_B, phase === "playB" ? stepIndex : SEQ_B.length)}
        </>
      )}

      {phase === "rateB" && (
        <>
          <DemoSlider label="体験B：全体としての不快感" value={ratingB} min={0} max={10} onChange={setRatingB} />
          <DemoButton variant="primary" onClick={() => setPhase("result")}>
            評価して結果を見る
          </DemoButton>
        </>
      )}

      {phase === "result" && (
        <DemoResult title="実は、AとBの「平均の不快感」は同じでした">
          <p style={{ margin: "0 0 8px" }}>
            体験A：あなたの評価 {ratingA} ／ 真の平均 {avgA.toFixed(1)} ／ ピーク+終わりの平均 {peakEndA.toFixed(1)}
          </p>
          <p style={{ margin: "0 0 8px" }}>
            体験B：あなたの評価 {ratingB} ／ 真の平均 {avgB.toFixed(1)} ／ ピーク+終わりの平均 {peakEndB.toFixed(1)}
          </p>
          {ratingB > ratingA ? (
            <DemoHint>
              AもBも不快感の「真の平均」はまったく同じ5.5でした。それでも体験Bを「より不快だった」と評価したのではないでしょうか。違いはただ一つ、Bは苦しいまま終わったことです。ピークの強さと終わり方だけで全体の記憶が決まる、ピークエンドの法則がここに現れています。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は同じくらいの評価になりましたね。それでも多くの人は、平均がまったく同じでも「苦しいまま終わった」体験Bの方をより不快だったと感じます。終わり方が記憶の評価を大きく左右するのがピークエンドの法則です。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

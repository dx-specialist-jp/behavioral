import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const STEPS = ["側板を組む", "棚板を取り付ける", "背板を固定する", "ネジを締めて完成"];

type Phase = "building" | "priceOwn" | "priceReady" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>("building");
  const [priceOwn, setPriceOwn] = useState(3000);
  const [priceReady, setPriceReady] = useState(3000);

  const handleNextStep = () => {
    const next = step + 1;
    setStep(next);
    if (next >= STEPS.length) setPhase("priceOwn");
  };

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "building" && (
        <>
          <DemoPrompt>簡単な収納棚を、あなた自身の手で組み立ててみましょう。</DemoPrompt>
          <div className={styles.progress}>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: `${(step / STEPS.length) * 100}%` }} />
            </div>
            <ul className={styles.stepList}>
              {STEPS.map((s, i) => (
                <li key={s} className={i < step ? styles.stepDone : ""}>
                  {i < step ? "✓ " : `${i + 1}. `}
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <DemoButton variant="primary" onClick={handleNextStep}>
            {step === 0 ? "組み立てを始める" : "次の工程へ"}
          </DemoButton>
        </>
      )}

      {phase === "priceOwn" && (
        <>
          <DemoPrompt>棚が完成しました。この、あなたが自分で組み立てた棚に、いくらなら払ってもよいと思いますか？</DemoPrompt>
          <DemoSlider
            label="自分で組み立てた棚の価値"
            value={priceOwn}
            min={500}
            max={8000}
            step={100}
            displayValue={`${priceOwn.toLocaleString()}円`}
            onChange={setPriceOwn}
          />
          <DemoButton variant="primary" onClick={() => setPhase("priceReady")}>
            次へ
          </DemoButton>
        </>
      )}

      {phase === "priceReady" && (
        <>
          <DemoPrompt>家具店で、まったく同じ棚が完成品として売られているのを見つけました。こちらにはいくらなら払ってもよいと思いますか？</DemoPrompt>
          <DemoSlider
            label="完成品として買う場合の価値"
            value={priceReady}
            min={500}
            max={8000}
            step={100}
            displayValue={`${priceReady.toLocaleString()}円`}
            onChange={setPriceReady}
          />
          <DemoButton variant="primary" onClick={() => setPhase("done")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {phase === "done" && (
        <DemoResult title="2つの見積もりを比べてみると">
          <p style={{ margin: "0 0 10px" }}>
            自分で組み立てた棚には {priceOwn.toLocaleString()}円、同じ棚の完成品には {priceReady.toLocaleString()}円という見積もりでした。
          </p>
          {priceOwn > priceReady ? (
            <DemoHint>
              まったく同じ棚なのに、自分で組み立てた方を高く評価しましたね。これがイケア効果です。実際の実験でも、自分で組み立てた人は完成品を見ただけの人より平均で約63%も高い金額を提示しました。注いだ労力が、対象そのものの価値の一部であるかのように感じられてしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は同じくらいの評価でしたが、実際の実験では多くの人が自分で組み立てた家具を完成品より平均で約63%も高く評価しました。中身は同じでも、自分の手で完成させたという経験が、価値の感じ方を変えてしまうのです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

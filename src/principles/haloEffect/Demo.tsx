import { useState } from "react";
import type { DemoProps } from "../types";
import {
  DemoButton,
  DemoHint,
  DemoPrompt,
  DemoResult,
  DemoShell,
  DemoSlider,
} from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const RESUME =
  "前職：中堅メーカーで営業事務を3年経験。TOEIC780点。特別な表彰歴はなく、同僚からの評判は「特に可もなく不可もなく」。";

type Stage = "candidateA" | "candidateB" | "result";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("candidateA");
  const [askill, setAskill] = useState(5);
  const [alead, setAlead] = useState(5);
  const [asincere, setAsincere] = useState(5);
  const [bskill, setBskill] = useState(5);
  const [blead, setBlead] = useState(5);
  const [bsincere, setBsincere] = useState(5);

  const avgA = (askill + alead + asincere) / 3;
  const avgB = (bskill + blead + bsincere) / 3;
  const diff = avgA - avgB;

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "candidateA" && (
        <>
          <DemoPrompt>ある採用候補者Aのプロフィールです。3つの項目を10点満点で評価してください。</DemoPrompt>
          <div className={styles.card}>
            <p style={{ margin: 0 }}>{RESUME}</p>
            <p className={styles.cue}>
              補足：応募書類の自己紹介文はとても丁寧で読みやすく、字も整っていて好印象だった。
            </p>
          </div>
          <DemoSlider label="実務能力" value={askill} min={0} max={10} onChange={setAskill} />
          <DemoSlider label="リーダーシップ" value={alead} min={0} max={10} onChange={setAlead} />
          <DemoSlider label="誠実さ" value={asincere} min={0} max={10} onChange={setAsincere} />
          <DemoButton variant="primary" onClick={() => setStage("candidateB")}>
            次の候補者へ
          </DemoButton>
        </>
      )}

      {stage === "candidateB" && (
        <>
          <DemoPrompt>続いて候補者Bのプロフィールです。同じく3項目を10点満点で評価してください。</DemoPrompt>
          <div className={styles.card}>
            <p style={{ margin: 0 }}>{RESUME}</p>
            <p className={styles.cue}>
              補足：応募書類の自己紹介文には誤字が多く、字も乱雑で雑な印象だった。
            </p>
          </div>
          <DemoSlider label="実務能力" value={bskill} min={0} max={10} onChange={setBskill} />
          <DemoSlider label="リーダーシップ" value={blead} min={0} max={10} onChange={setBlead} />
          <DemoSlider label="誠実さ" value={bsincere} min={0} max={10} onChange={setBsincere} />
          <DemoButton variant="primary" onClick={() => setStage("result")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === "result" && (
        <DemoResult title="実は、2人の経歴は一字一句まったく同じでした">
          <div className={styles.summaryRow}>
            <span>候補者A（丁寧な自己紹介文）の平均点</span>
            <strong>{avgA.toFixed(1)}点</strong>
          </div>
          <div className={styles.summaryRow}>
            <span>候補者B（雑な自己紹介文）の平均点</span>
            <strong>{avgB.toFixed(1)}点</strong>
          </div>
          {Math.abs(diff) >= 0.4 ? (
            <DemoHint>
              評価した「実務能力」「リーダーシップ」「誠実さ」は、自己紹介文の丁寧さとは本来なんの関係もない項目です。それでも
              {diff > 0 ? "字が丁寧だった候補者Aの方を" : "字が丁寧だった候補者Bの方を"}
              高く評価してしまいましたね。一つの好印象（または悪印象）が無関係な評価にまで染み出す——これがハロー効果（悪い場合はホーン効果）です。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は2人にほぼ同じ点数をつけましたね。それでも多くの人は、字の丁寧さのような無関係な手がかりだけで、実務能力まで違う評価をしてしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

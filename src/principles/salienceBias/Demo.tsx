import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import {
  DemoButton,
  DemoChoices,
  DemoHint,
  DemoPrompt,
  DemoResult,
  DemoShell,
} from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type Stage = "intro" | "viewing" | "question" | "result";

const CHOICES = ["在庫はあと1点", "在庫はあと2点", "在庫はあと5点", "在庫は無制限"];
const CORRECT_INDEX = 1;

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("intro");
  const [seconds, setSeconds] = useState(5);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (stage !== "viewing") return;
    if (seconds <= 0) {
      setStage("question");
      return;
    }
    const timer = window.setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [stage, seconds]);

  const start = () => {
    setSeconds(5);
    setStage("viewing");
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "intro" && (
        <>
          <DemoPrompt>
            5秒間だけ、あるオンラインショップの案内を見せます。表示されている情報をよく見ておいてください。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={start}>
            案内を見る
          </DemoButton>
        </>
      )}

      {stage === "viewing" && (
        <>
          <p className={styles.timer}>残り {seconds} 秒</p>
          <div className={styles.adCard}>
            <div className={styles.banner}>本日限定 全品50%オフ！</div>
            <p className={styles.finePrint}>
              ※在庫はあと2点。購入後のキャンセル・返品はできません。表示価格は税別です。
            </p>
          </div>
        </>
      )}

      {stage === "question" && (
        <>
          <DemoPrompt>先ほどの案内の小さな文字には、在庫について何と書かれていましたか？</DemoPrompt>
          <DemoChoices>
            {CHOICES.map((c, i) => (
              <DemoButton key={i} selected={selected === i} onClick={() => setSelected(i)}>
                {c}
              </DemoButton>
            ))}
          </DemoChoices>
          <DemoButton variant="primary" disabled={selected === null} onClick={() => setStage("result")}>
            答え合わせ
          </DemoButton>
        </>
      )}

      {stage === "result" && (
        <DemoResult title={selected === CORRECT_INDEX ? "正解です" : "不正解でした"}>
          <p style={{ margin: "0 0 8px" }}>
            正解は「{CHOICES[CORRECT_INDEX]}」でした。大きく目立つ「全品50%オフ！」のバナーは覚えていても、隅の小さな注意書きは見落としやすかったのではないでしょうか。
          </p>
          <DemoHint>
            派手で目を引く情報は自動的に注意を引きつけ、記憶にも残りやすくなります。一方で、返品不可や在庫数といった地味だが本当に重要な情報は、意識して読まない限り見落とされがちです。これが顕現性バイアスです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

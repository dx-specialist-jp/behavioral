import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const SMALL_FLAVORS = ["いちご", "ブルーベリー", "マーマレード", "あんず", "りんご", "ぶどう"];

const LARGE_FLAVORS = [
  "いちご", "ブルーベリー", "マーマレード", "あんず", "りんご", "ぶどう",
  "もも", "キウイ", "マンゴー", "パイナップル", "さくらんぼ", "ラズベリー",
  "いちじく", "カシス", "ゆず", "みかん", "レモン", "メロン",
  "バナナ", "プルーン", "クランベリー", "グレープフルーツ", "すもも", "パッションフルーツ",
];

interface Result {
  chose: boolean;
  seconds: number;
}

type Phase = "small" | "large" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [phase, setPhase] = useState<Phase>("small");
  const [seconds, setSeconds] = useState(0);
  const [smallResult, setSmallResult] = useState<Result | null>(null);
  const [largeResult, setLargeResult] = useState<Result | null>(null);

  useEffect(() => {
    if (phase === "done") return;
    setSeconds(0);
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  function decide(chose: boolean) {
    if (phase === "small") {
      setSmallResult({ chose, seconds });
      setPhase("large");
    } else if (phase === "large") {
      setLargeResult({ chose, seconds });
      setPhase("done");
    }
  }

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "small" && (
        <>
          <DemoPrompt>ジャム売り場に6種類の試食があります。1つ選んで購入するか、決めずに立ち去るか選んでください。（経過時間: {seconds}秒）</DemoPrompt>
          <div className={styles.grid}>
            {SMALL_FLAVORS.map((f) => (
              <DemoButton key={f} onClick={() => decide(true)}>
                {f}
              </DemoButton>
            ))}
          </div>
          <DemoButton onClick={() => decide(false)}>決めずに立ち去る</DemoButton>
        </>
      )}

      {phase === "large" && (
        <>
          <DemoPrompt>今度は24種類の試食が並んでいます。同じく1つ選んで購入するか、決めずに立ち去るか選んでください。（経過時間: {seconds}秒）</DemoPrompt>
          <div className={styles.grid}>
            {LARGE_FLAVORS.map((f, i) => (
              <DemoButton key={`${f}-${i}`} onClick={() => decide(true)}>
                {f}
              </DemoButton>
            ))}
          </div>
          <DemoButton onClick={() => decide(false)}>決めずに立ち去る</DemoButton>
        </>
      )}

      {phase === "done" && smallResult && largeResult && (
        <DemoResult title="2つの売り場を比べてみると">
          <p style={{ margin: "0 0 10px" }}>
            6種類のときは{smallResult.seconds}秒で「{smallResult.chose ? "購入した" : "決めずに立ち去った"}」、24種類のときは{largeResult.seconds}
            秒で「{largeResult.chose ? "購入した" : "決めずに立ち去った"}」という結果でした。
          </p>
          <div className={styles.bars}>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>6種類のときの実際の購入率</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "30%" }} />
              </div>
              <span>約30%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>24種類のときの実際の購入率</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "3%" }} />
              </div>
              <span>約3%</span>
            </div>
          </div>
          <DemoHint>
            アイエンガーとレッパーのジャム実験でも、選択肢が24種類に増えると、足を止めて試食する人は増えたのに、実際に購入した人は6種類のときよりずっと少なくなりました。選択肢が多いほど比較に迷い、「あとで考える」「決めない」を選びやすくなるのが選択過多の典型的な現れです。あなた自身も、24種類のときの方が時間がかかったり、決めずに立ち去りたくなったりしませんでしたか？
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

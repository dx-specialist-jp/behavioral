import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const WORDS = ["りんご", "椅子", "傘", "時計", "窓", "靴", "鉛筆", "本棚", "自転車", "眼鏡", "財布", "扇風機"];
const DISTRACTORS = ["帽子", "鏡", "毛布", "切符"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = "intro" | "flash" | "recall" | "result";

export function Demo({ accentHue }: DemoProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [flashIndex, setFlashIndex] = useState(0);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [choices] = useState(() => shuffle([...WORDS, ...DISTRACTORS]));

  useEffect(() => {
    if (phase !== "flash") return;
    if (flashIndex >= WORDS.length) {
      const timer = window.setTimeout(() => setPhase("recall"), 300);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => setFlashIndex((i) => i + 1), 700);
    return () => window.clearTimeout(timer);
  }, [phase, flashIndex]);

  const start = () => {
    setFlashIndex(0);
    setPhase("flash");
  };

  const toggle = (word: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      return next;
    });
  };

  const flags = WORDS.map((w) => selected.has(w));
  const edgeFlags = [...flags.slice(0, 3), ...flags.slice(-3)];
  const middleFlags = flags.slice(3, -3);
  const rate = (arr: boolean[]) => (arr.length > 0 ? (arr.filter(Boolean).length / arr.length) * 100 : 0);
  const edgeRate = rate(edgeFlags);
  const middleRate = rate(middleFlags);

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "intro" && (
        <>
          <DemoPrompt>これから単語を1つずつ、テンポよく表示します。覚えられるだけ覚えてください。</DemoPrompt>
          <DemoButton variant="primary" onClick={start}>
            はじめる
          </DemoButton>
        </>
      )}

      {phase === "flash" && flashIndex < WORDS.length && (
        <div className={styles.flashBox}>{WORDS[flashIndex]}</div>
      )}

      {phase === "recall" && (
        <>
          <DemoPrompt>先ほど表示された単語だと思うものを、すべてクリックしてください。</DemoPrompt>
          <div className={styles.grid}>
            {choices.map((word) => (
              <button
                key={word}
                type="button"
                className={`${styles.chip} ${selected.has(word) ? styles.chipSelected : ""}`}
                onClick={() => toggle(word)}
              >
                {word}
              </button>
            ))}
          </div>
          <DemoButton variant="primary" onClick={() => setPhase("result")}>
            回答を確定する
          </DemoButton>
        </>
      )}

      {phase === "result" && (
        <DemoResult title="単語ごとの記憶を位置順に見てみると">
          <div className={styles.positionRow}>
            {WORDS.map((w, i) => (
              <div key={w} className={`${styles.posBox} ${flags[i] ? styles.posRecalled : ""}`}>
                <span>{i + 1}</span>
              </div>
            ))}
          </div>
          <p style={{ margin: "8px 0" }}>
            最初と最後の3語の再生率：{edgeRate.toFixed(0)}% ／ 真ん中6語の再生率：{middleRate.toFixed(0)}%
          </p>
          {edgeRate > middleRate ? (
            <DemoHint>
              最初と最後の単語の方が、真ん中あたりの単語よりよく覚えていましたね。最初の単語は繰り返し思い出す時間があったため（初頭効果）、最後の単語はまだ記憶に新しかったため（新近効果）、よく残ります。真ん中の単語はその両方の恩恵を受けられず、忘れられやすいのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は真ん中の単語もよく覚えていましたね。それでも一般的には、リストの両端がよく記憶に残り、真ん中が抜け落ちやすいというU字型の記憶パターン（系列位置効果）が繰り返し確認されています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

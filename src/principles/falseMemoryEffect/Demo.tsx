import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const SHOWN_WORDS = ["布団", "あくび", "夜", "休む", "枕", "夢", "いびき", "疲れた"];
const LURE = "睡眠";
const DISTRACTOR = "自転車";
const CANDIDATES_BASE = [SHOWN_WORDS[0], SHOWN_WORDS[3], SHOWN_WORDS[5], LURE, DISTRACTOR];

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
  const [candidates] = useState(() => shuffle(CANDIDATES_BASE));

  useEffect(() => {
    if (phase !== "flash") return;
    if (flashIndex >= SHOWN_WORDS.length) {
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

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "intro" && (
        <>
          <DemoPrompt>これから単語を1つずつ表示します。よく集中して覚えてください。</DemoPrompt>
          <DemoButton variant="primary" onClick={start}>
            はじめる
          </DemoButton>
        </>
      )}

      {phase === "flash" && flashIndex < SHOWN_WORDS.length && (
        <div className={styles.flashBox}>{SHOWN_WORDS[flashIndex]}</div>
      )}

      {phase === "recall" && (
        <>
          <DemoPrompt>先ほど表示された単語だと思うものを、すべてクリックしてください。</DemoPrompt>
          <div className={styles.grid}>
            {candidates.map((word) => (
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
        <DemoResult title="実際に表示されていたのは…">
          <p style={{ margin: "0 0 8px" }}>
            表示した単語：{SHOWN_WORDS.join("、")}
            <br />
            「{LURE}」という単語は、実は一度も表示していません。
          </p>
          {selected.has(LURE) ? (
            <DemoHint>
              あなたは表示されていない「{LURE}」を「見た」と選びましたね。これはまさに虚偽記憶効果です。関連する単語をたくさん見せられると、脳はそれらに共通するテーマ自体を「見た」ことと錯覚してしまいます。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は「{LURE}」を選ばずに済みましたね。ただしDRMパラダイムと呼ばれるこの実験では、多くの人が関連するテーマ語を「見た」と誤って報告することが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

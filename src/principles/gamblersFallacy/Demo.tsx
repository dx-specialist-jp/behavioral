import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type Coin = "H" | "T";
type Guess = "same" | "opposite" | "even";

const STREAK_NEEDED = 4;
const ROUNDS_TARGET = 3;

function flipCoin(): Coin {
  return Math.random() < 0.5 ? "H" : "T";
}

function label(c: Coin) {
  return c === "H" ? "表" : "裏";
}

function opposite(c: Coin): Coin {
  return c === "H" ? "T" : "H";
}

function currentStreak(history: Coin[]): { value: Coin; length: number } | null {
  if (history.length === 0) return null;
  const last = history[history.length - 1];
  let length = 0;
  for (let i = history.length - 1; i >= 0 && history[i] === last; i--) length++;
  return { value: last, length };
}

interface RoundRecord {
  streakLength: number;
  streakValue: Coin;
  guess: Guess;
  actual: Coin;
}

export function Demo({ accentHue }: DemoProps) {
  const [history, setHistory] = useState<Coin[]>([]);
  const [records, setRecords] = useState<RoundRecord[]>([]);
  const [awaitingGuess, setAwaitingGuess] = useState(false);

  const streak = currentStreak(history);
  const finished = records.length >= ROUNDS_TARGET;

  const handleFlip = () => {
    const next = flipCoin();
    const newHistory = [...history, next];
    setHistory(newHistory);
    const s = currentStreak(newHistory);
    if (s && s.length >= STREAK_NEEDED) {
      setAwaitingGuess(true);
    }
  };

  const handleGuess = (guess: Guess) => {
    if (!streak) return;
    const actual = flipCoin();
    setRecords((prev) => [...prev, { streakLength: streak.length, streakValue: streak.value, guess, actual }]);
    setHistory((prev) => [...prev, actual]);
    setAwaitingGuess(false);
  };

  const oppositeCount = records.filter((r) => r.guess === "opposite").length;
  const evenCount = records.filter((r) => r.guess === "even").length;
  const displayHistory = history.slice(-10);

  return (
    <DemoShell accentHue={accentHue}>
      {!finished && (
        <>
          <DemoPrompt>
            コインを投げて、同じ面が連続したときにどう感じるかを観察してみましょう（合計{ROUNDS_TARGET}回、連続が起きたところで予想してもらいます）。
          </DemoPrompt>
          {displayHistory.length > 0 && (
            <div className={styles.history}>
              {displayHistory.map((c, i) => (
                <div
                  key={i}
                  className={`${styles.coin} ${i === displayHistory.length - 1 ? styles.coinLatest : ""}`}
                >
                  {label(c)}
                </div>
              ))}
            </div>
          )}

          {!awaitingGuess && (
            <DemoButton variant="primary" onClick={handleFlip}>
              コインを投げる
            </DemoButton>
          )}

          {awaitingGuess && streak && (
            <>
              <DemoPrompt>
                {label(streak.value)}が{streak.length}回連続しました。次の1回はどうなると思いますか？
              </DemoPrompt>
              <DemoChoices>
                <DemoButton onClick={() => handleGuess("same")}>
                  まだ{label(streak.value)}が出やすい
                </DemoButton>
                <DemoButton onClick={() => handleGuess("opposite")}>
                  そろそろ{label(opposite(streak.value))}が出やすい
                </DemoButton>
                <DemoButton onClick={() => handleGuess("even")}>確率は五分五分で変わらない</DemoButton>
              </DemoChoices>
            </>
          )}
        </>
      )}

      {finished && (
        <DemoResult title="結果の記録">
          <ul className={styles.log}>
            {records.map((r, i) => (
              <li key={i}>
                {label(r.streakValue)}が{r.streakLength}回連続 → あなたの予想「
                {r.guess === "same" ? `まだ${label(r.streakValue)}` : r.guess === "opposite" ? `そろそろ${label(opposite(r.streakValue))}` : "五分五分"}
                」 → 実際の結果は「{label(r.actual)}」
              </li>
            ))}
          </ul>
          <DemoHint>
            コイン投げのような独立試行では、それまで何回同じ面が連続していても、次に出る確率は常に五分五分（50%）のままです。
            {oppositeCount > 0 &&
              `今回「そろそろ逆が出る」と${oppositeCount}回答えましたね。これがまさにギャンブラーの誤謬です。`}
            {oppositeCount === 0 &&
              evenCount === ROUNDS_TARGET &&
              "全て「五分五分」を選べましたね。多くの人は連続を見ると帳尻合わせを期待してしまいますが、コインに記憶はありません。"}
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

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

interface EventItem {
  label: string;
  date: string;
}

const EVENTS: EventItem[] = [
  { label: "初代iPhoneが発売された", date: "2007-06-29" },
  { label: "東日本大震災が起きた", date: "2011-03-11" },
  { label: "WHOが新型コロナウイルスのパンデミックを宣言した", date: "2020-03-11" },
  { label: "延期された東京オリンピックが開幕した", date: "2021-07-23" },
];

function actualYearsAgo(dateStr: string): number {
  const then = new Date(dateStr).getTime();
  const now = Date.now();
  const years = (now - then) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.round(years * 10) / 10;
}

export function Demo({ accentHue }: DemoProps) {
  const [index, setIndex] = useState(0);
  const [guesses, setGuesses] = useState<number[]>(EVENTS.map(() => 10));
  const [finished, setFinished] = useState(false);

  const current = EVENTS[index];

  const setGuess = (v: number) => {
    setGuesses((prev) => prev.map((g, i) => (i === index ? v : g)));
  };

  const next = () => {
    if (index + 1 < EVENTS.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <DemoShell accentHue={accentHue}>
      {!finished && (
        <>
          <DemoPrompt>「{current.label}」のは、今から何年前だと思いますか？</DemoPrompt>
          <DemoSlider
            label="何年前だと思うか"
            value={guesses[index]}
            min={0}
            max={25}
            displayValue={`${guesses[index]}年前`}
            onChange={setGuess}
          />
          <DemoButton variant="primary" onClick={next}>
            {index + 1 < EVENTS.length ? "次の出来事へ" : "答え合わせをする"}
          </DemoButton>
        </>
      )}

      {finished && (
        <DemoResult title="実際の経過年数と比べてみると">
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {EVENTS.map((e, i) => {
              const actual = actualYearsAgo(e.date);
              const diff = Math.round((actual - guesses[i]) * 10) / 10;
              let verdict: string;
              if (Math.abs(diff) < 1) {
                verdict = "ほぼぴったり";
              } else if (diff > 0) {
                verdict = "実際より最近だと感じていた（前方テレスコーピング）";
              } else {
                verdict = "実際より昔だと感じていた（後方テレスコーピング）";
              }
              return (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {e.label}：あなたの予想 {guesses[i]}年前 ／ 実際は約{actual}年前 —— {verdict}
                </li>
              );
            })}
          </ul>
          <DemoHint>
            多くの人は、離れた過去の出来事ほど実際より最近のことのように感じてしまいます（前方テレスコーピング）。強く印象に残っている出来事ほど鮮明に思い出せるため、脳がその鮮明さを「最近の記憶」の手がかりとして誤って使ってしまうのです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

interface RoundDef {
  question: string;
  truth: number;
  min: number;
  max: number;
  step: number;
  unit: string;
}

const ROUNDS: RoundDef[] = [
  { question: "エベレスト山の標高は何mでしょうか？", truth: 8849, min: 0, max: 10000, step: 50, unit: "m" },
  { question: "地球から月までの平均距離は何kmでしょうか？", truth: 384400, min: 0, max: 500000, step: 1000, unit: "km" },
  { question: "東京スカイツリーの高さは何mでしょうか？", truth: 634, min: 0, max: 1000, step: 10, unit: "m" },
  { question: "ナイル川（アフリカ大陸で最も長い川）の長さは何kmでしょうか？", truth: 6650, min: 0, max: 10000, step: 50, unit: "km" },
];

interface RoundResult {
  question: string;
  truth: number;
  low: number;
  high: number;
  unit: string;
  hit: boolean;
}

function defaultRange(round: RoundDef) {
  const span = round.max - round.min;
  return {
    low: Math.round(round.min + span * 0.45),
    high: Math.round(round.min + span * 0.55),
  };
}

export function Demo({ accentHue }: DemoProps) {
  const [results, setResults] = useState<RoundResult[]>([]);
  const currentIndex = results.length;
  const finished = currentIndex >= ROUNDS.length;
  const current = !finished ? ROUNDS[currentIndex] : null;
  const initRange = current ? defaultRange(current) : { low: 0, high: 0 };
  const [low, setLow] = useState(initRange.low);
  const [high, setHigh] = useState(initRange.high);

  const handleSubmit = () => {
    if (!current) return;
    const finalLow = Math.min(low, high);
    const finalHigh = Math.max(low, high);
    setResults((prev) => [
      ...prev,
      {
        question: current.question,
        truth: current.truth,
        low: finalLow,
        high: finalHigh,
        unit: current.unit,
        hit: current.truth >= finalLow && current.truth <= finalHigh,
      },
    ]);
    const next = ROUNDS[currentIndex + 1];
    if (next) {
      const r = defaultRange(next);
      setLow(r.low);
      setHigh(r.high);
    }
  };

  const hitCount = results.filter((r) => r.hit).length;

  return (
    <DemoShell accentHue={accentHue}>
      {!finished && current && (
        <>
          <DemoPrompt>
            {current.question}
            「90%の確率で正解を含む」と思える範囲（下限〜上限）を、自信を持ってできるだけ狭く設定してください。
          </DemoPrompt>
          <DemoSlider
            label="下限"
            value={low}
            min={current.min}
            max={current.max}
            step={current.step}
            displayValue={`${low.toLocaleString()}${current.unit}`}
            onChange={setLow}
          />
          <DemoSlider
            label="上限"
            value={high}
            min={current.min}
            max={current.max}
            step={current.step}
            displayValue={`${high.toLocaleString()}${current.unit}`}
            onChange={setHigh}
          />
          <DemoButton variant="primary" onClick={handleSubmit}>
            この範囲で決定
          </DemoButton>
        </>
      )}

      {finished && (
        <DemoResult title={`結果：90%の自信で答えた範囲のうち ${hitCount} / ${ROUNDS.length} 問が的中`}>
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {results.map((r, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                <strong>{r.hit ? "◯的中" : "×外れ"}</strong> {r.question} 正解は{r.truth.toLocaleString()}
                {r.unit}（あなたの範囲：{r.low.toLocaleString()}〜{r.high.toLocaleString()}
                {r.unit}）
              </li>
            ))}
          </ul>
          <DemoHint>
            「90%の確率で当たる」と思って範囲を決めたなら、4問中およそ3.6問は的中するはずです。ところが較正実験を繰り返し行った研究では、多くの人が実際の的中率よりも自信を持ちすぎ、範囲を狭く設定しすぎる傾向（オーバープレシジョン）が確認されています。あなたの的中数は目安と比べてどうでしたか？
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

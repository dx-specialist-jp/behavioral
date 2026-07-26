import { useState } from "react";
import {
  DemoButton,
  DemoHint,
  DemoPrompt,
  DemoResult,
  DemoShell,
  DemoSlider,
} from "../../components/ui/DemoUI";

interface Round {
  anchor: number;
  guess: number;
}

function randomAnchor() {
  return Math.random() < 0.5 ? Math.floor(Math.random() * 15) + 1 : Math.floor(Math.random() * 20) + 70;
}

export function Demo() {
  const [anchor, setAnchor] = useState<number | null>(null);
  const [guess, setGuess] = useState(50);
  const [rounds, setRounds] = useState<Round[]>([]);

  const handleDraw = () => {
    setAnchor(randomAnchor());
    setGuess(50);
  };

  const handleSubmit = () => {
    if (anchor === null) return;
    setRounds((prev) => [...prev, { anchor, guess }]);
    setAnchor(null);
  };

  return (
    <DemoShell accentVar="--accent-anchoring">
      {anchor === null && rounds.length === 0 && (
        <>
          <DemoPrompt>ボタンを押して、ランダムな数字を1つ引いてみましょう。</DemoPrompt>
          <DemoButton variant="primary" onClick={handleDraw}>
            数字を引く
          </DemoButton>
        </>
      )}

      {anchor !== null && (
        <>
          <DemoPrompt>
            出た数字は <strong style={{ fontSize: "1.3em" }}>{anchor}</strong> でした。
          </DemoPrompt>
          <DemoPrompt>
            この数字とは関係ありませんが——「世界の国のうち、日本より人口が多い国の割合」は何%だと思いますか？
          </DemoPrompt>
          <DemoSlider
            label="あなたの見積もり"
            value={guess}
            min={0}
            max={100}
            displayValue={`${guess}%`}
            onChange={setGuess}
          />
          <DemoButton variant="primary" onClick={handleSubmit}>
            回答して次の数字へ
          </DemoButton>
        </>
      )}

      {rounds.length > 0 && anchor === null && (
        <DemoResult title="あなたの回答の記録">
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {rounds.map((r, i) => (
              <li key={i}>
                引いた数字 {r.anchor} → あなたの見積もり {r.guess}%
              </li>
            ))}
          </ul>
          {rounds.length >= 2 ? (
            <DemoHint>
              引いた数字が大きい回ほど、見積もりも大きくなっていませんか？ちなみに正解は約21%（40か国前後）です。ランダムに引いただけの無関係な数字が、あなたの答えを引っ張っていた可能性があります。
            </DemoHint>
          ) : (
            <DemoButton onClick={handleDraw}>もう一度、別の数字で試す</DemoButton>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

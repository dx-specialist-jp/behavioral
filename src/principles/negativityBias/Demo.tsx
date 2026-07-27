import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const TRAITS = ["真面目", "実行力がある", "コミュニケーション上手", "向上心がある", "時々遅刻することがある", "協調性がある", "アイデア豊富"];

export function Demo({ accentHue }: DemoProps) {
  const [score, setScore] = useState(50);
  const [revealed, setRevealed] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>ある求人応募者のプロフィールです。この人物への印象を0（悪い）〜100（良い）で評価してください。</DemoPrompt>
      <ul style={{ margin: "0 0 12px", paddingLeft: 20 }}>
        {TRAITS.map((t) => (
          <li key={t} style={{ color: t.includes("遅刻") ? "var(--accent)" : "var(--color-text)" }}>
            {t}
          </li>
        ))}
      </ul>
      <DemoSlider label="この人物への印象" value={score} min={0} max={100} displayValue={`${score}点`} onChange={setScore} />

      {!revealed && (
        <DemoButton variant="primary" onClick={() => setRevealed(true)}>
          評価を確定する
        </DemoButton>
      )}

      {revealed && (
        <DemoResult title="7つの特徴のうち、ネガティブなのは1つだけ">
          <p style={{ margin: "0 0 8px" }}>
            あなたはこの人物を{score}点と評価しました。7つの特徴のうち6つはポジティブな内容で、ネガティブなのは「時々遅刻することがある」の1つだけでした。
          </p>
          <DemoHint>
            それでも、この1つの短所が印象評価にかなりの影響を与えていませんでしたか？実際の研究では、印象形成においてネガティブな情報はポジティブな情報より2〜3倍重く扱われることが示されています。良い情報がいくつあっても、たった1つの悪い情報が全体の印象を大きく引き下げてしまう——これがネガティビティ・バイアスです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

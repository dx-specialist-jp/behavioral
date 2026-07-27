import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

interface Round {
  size: number;
  likelihood: number;
}

export function Demo({ accentHue }: DemoProps) {
  const [size, setSize] = useState(2);
  const [likelihood, setLikelihood] = useState(80);
  const [rounds, setRounds] = useState<Round[]>([]);

  const handleRecord = () => {
    setRounds((prev) => [...prev, { size, likelihood }]);
  };

  const sorted = rounds.slice().sort((a, b) => a.size - b.size);
  const trendDown =
    sorted.length >= 2 && sorted[sorted.length - 1].likelihood < sorted[0].likelihood;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        あなたはチームで1本の報告書を提出することになりました。誤字や数字の間違いがないか、提出前に「自分が」最終チェックをする可能性はどれくらいですか？チームの人数を変えながら、そのつど答えを記録してみてください。
      </DemoPrompt>
      <DemoSlider
        label="チームの人数"
        value={size}
        min={1}
        max={20}
        displayValue={`${size}人`}
        onChange={setSize}
      />
      <DemoSlider
        label="自分が最終チェックをする可能性"
        value={likelihood}
        min={0}
        max={100}
        displayValue={`${likelihood}%`}
        onChange={setLikelihood}
      />
      <DemoButton variant="primary" onClick={handleRecord}>
        この状況での回答を記録する
      </DemoButton>

      {rounds.length > 0 && (
        <DemoResult title="記録した回答">
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {sorted.map((r, i) => (
              <li key={i}>
                人数 {r.size}人 → 自分がチェックする可能性 {r.likelihood}%
              </li>
            ))}
          </ul>
          {rounds.length >= 3 ? (
            trendDown ? (
              <DemoHint>
                人数が増えるほど、あなたの「自分がチェックする」という可能性が下がっていませんか？報告書の正確さという「責任の総量」は人数が増えても減っていないのに、一人あたりの心理的な責任感だけが薄まってしまう——これが責任の分散です。結果的に、大人数のチームほど「全員が誰かに任せてしまい、誰も確認しない」という事態が起きやすくなります。
              </DemoHint>
            ) : (
              <DemoHint>
                今回は人数が増えても回答があまり下がりませんでしたね。ただ実際の職場では、大人数のチームになるほど「自分の分担が見えにくくなる」ことで、多くの人が最終確認を他人任せにしてしまう傾向が報告されています。
              </DemoHint>
            )
          ) : (
            <DemoHint>あと{3 - rounds.length}回、人数を変えて記録してみましょう。</DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

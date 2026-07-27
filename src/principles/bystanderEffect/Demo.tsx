import { useState } from "react";
import type { DemoProps } from "../types";
import {
  DemoButton,
  DemoChoices,
  DemoHint,
  DemoPrompt,
  DemoResult,
  DemoShell,
  DemoSlider,
} from "../../components/ui/DemoUI";

const CROWD_SIZES = [1, 4, 10, 30];

interface Round {
  size: number;
  likelihood: number;
}

export function Demo({ accentHue }: DemoProps) {
  const [size, setSize] = useState<number | null>(null);
  const [likelihood, setLikelihood] = useState(50);
  const [rounds, setRounds] = useState<Round[]>([]);
  const remaining = CROWD_SIZES.filter((s) => !rounds.some((r) => r.size === s));

  const handlePick = (s: number) => {
    setSize(s);
    setLikelihood(50);
  };

  const handleSubmit = () => {
    if (size === null) return;
    setRounds((prev) => [...prev, { size, likelihood }]);
    setSize(null);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {size === null && (
        <>
          <DemoPrompt>
            駅のホームで、一人の人がしゃがみ込んで苦しそうにしています。あなたの他に、その場に何人の人がいる状況を想像しますか？
          </DemoPrompt>
          <DemoChoices>
            {remaining.map((s) => (
              <DemoButton key={s} onClick={() => handlePick(s)}>
                自分以外に{s}人
              </DemoButton>
            ))}
          </DemoChoices>
          {remaining.length === 0 && rounds.length > 0 && (
            <DemoResult title="4つの状況でのあなたの回答">
              <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
                {rounds
                  .slice()
                  .sort((a, b) => a.size - b.size)
                  .map((r) => (
                    <li key={r.size}>
                      自分以外に{r.size}人 → 助けに動く可能性 {r.likelihood}%
                    </li>
                  ))}
              </ul>
              <DemoHint>
                多くの人は、周りの人数が増えるほど自分の申告した可能性を下げます。これが傍観者効果です。「自分が動かなくても誰かがやるだろう」という責任の分散と、「周りが平然としているなら大したことではないのかも」という状況判断の誤りが同時に働くため、人数が増えるほど誰も動かなくなってしまうのです。実際には人数が多いほど、その場にいる「助ける義務がある人」は減っていません——分母が増えただけで、あなたの責任がなくなったわけではないのです。
              </DemoHint>
            </DemoResult>
          )}
        </>
      )}

      {size !== null && (
        <>
          <DemoPrompt>
            自分以外に<strong>{size}人</strong>がその場にいます。あなたが実際に声をかけたり助けに動いたりする可能性はどれくらいだと思いますか？
          </DemoPrompt>
          <DemoSlider
            label="助けに動く可能性"
            value={likelihood}
            min={0}
            max={100}
            displayValue={`${likelihood}%`}
            onChange={setLikelihood}
          />
          <DemoButton variant="primary" onClick={handleSubmit}>
            回答する
          </DemoButton>
        </>
      )}
    </DemoShell>
  );
}

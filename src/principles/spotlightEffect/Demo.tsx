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

type Stage = "round1" | "reveal1" | "round2" | "reveal2";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("round1");
  const [guess1, setGuess1] = useState(50);
  const [guess2, setGuess2] = useState(50);

  const actual1 = 23;
  const actual2 = Math.round(guess2 / 2);

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "round1" && (
        <>
          <DemoPrompt>
            想像してください。あなたは、場違いな有名歌手の顔が大きくプリントされた、少し恥ずかしいTシャツを着て教室に入りました。
          </DemoPrompt>
          <DemoSlider
            label="クラスメートの何%が気づいたと思いますか？"
            value={guess1}
            min={0}
            max={100}
            displayValue={`${guess1}%`}
            onChange={setGuess1}
          />
          <DemoButton variant="primary" onClick={() => setStage("reveal1")}>
            回答する
          </DemoButton>
        </>
      )}

      {stage === "reveal1" && (
        <>
          <DemoResult title="実際の実験結果（ギロビッチら, 2000）">
            <p style={{ margin: "0 0 8px" }}>
              あなたの予想：{guess1}% ／ 実際に気づいて覚えていた人：約{actual1}%
            </p>
            <DemoHint>
              {guess1 > actual1
                ? "予想の方が実際の数字よりかなり高かったですね。まさにこれが実験でも起きたことです。"
                : "今回はかなり控えめな予想でしたね。ただ多くの人は実際の約2倍で予想する傾向があります。"}
            </DemoHint>
          </DemoResult>
          <DemoButton variant="primary" onClick={() => setStage("round2")}>
            もう1つの場面で試す
          </DemoButton>
        </>
      )}

      {stage === "round2" && (
        <>
          <DemoPrompt>
            今度は、友人の集まりで飲み物をうっかりこぼしてしまい、少し慌てて片付けた場面を想像してください。
          </DemoPrompt>
          <DemoSlider
            label="その場にいた人の何%が、後々までそのことを覚えていると思いますか？"
            value={guess2}
            min={0}
            max={100}
            displayValue={`${guess2}%`}
            onChange={setGuess2}
          />
          <DemoButton variant="primary" onClick={() => setStage("reveal2")}>
            回答する
          </DemoButton>
        </>
      )}

      {stage === "reveal2" && (
        <DemoResult title="スポットライト効果のパターンに当てはめると">
          <p style={{ margin: "0 0 8px" }}>
            あなたの予想：{guess2}% ／ 目安となる実際の値：約{actual2}%
          </p>
          <DemoHint>
            多くの実験に共通するパターンとして、実際に気づいて記憶に残す人の割合は、本人の予想のおよそ半分程度になることが多いとされています（上の「約{actual2}%」はその目安です）。自分のミスや外見は自分にとって強烈な体験ですが、他人にとってはその他大勢の些細な出来事の一つに過ぎないことがほとんどです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

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

type Team = "circle" | "triangle";

export function Demo({ accentHue }: DemoProps) {
  const [team, setTeam] = useState<Team | null>(null);
  const [points, setPoints] = useState(5);
  const [confirmed, setConfirmed] = useState(false);

  const otherTeam: Team | null = team === "circle" ? "triangle" : team === "triangle" ? "circle" : null;
  const label = (t: Team) => (t === "circle" ? "○チーム" : "△チーム");

  return (
    <DemoShell accentHue={accentHue}>
      {team === null && (
        <>
          <DemoPrompt>まず、好きな図形を選んでください。これだけであなたの所属グループが決まります。</DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => setTeam("circle")}>○ の方が好き</DemoButton>
            <DemoButton onClick={() => setTeam("triangle")}>△ の方が好き</DemoButton>
          </DemoChoices>
        </>
      )}

      {team !== null && !confirmed && (
        <>
          <DemoPrompt>
            図形の好みだけで、あなたは<strong>{label(team)}</strong>に割り当てられました。他のメンバーの顔も名前も分かりませんし、実際の利害関係も一切ありません。
          </DemoPrompt>
          <DemoPrompt>
            今から合計10ポイントを、見知らぬ「{label(team)}のメンバーA」さんと「{otherTeam && label(otherTeam)}のメンバーB」さんの2人に配分してください。ポイントは実際の謝礼に相当します。
          </DemoPrompt>
          <DemoSlider
            label={`${label(team)}のメンバーAに渡すポイント`}
            value={points}
            min={0}
            max={10}
            displayValue={`${points} / 10`}
            onChange={setPoints}
          />
          <p style={{ margin: "0 0 12px", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
            {otherTeam && label(otherTeam)}のメンバーBには残り {10 - points} ポイントが渡ります。
          </p>
          <DemoButton variant="primary" onClick={() => setConfirmed(true)}>
            この配分に決める
          </DemoButton>
        </>
      )}

      {team !== null && confirmed && (
        <DemoResult title="配分の結果">
          <p style={{ margin: "0 0 8px" }}>
            同じ{label(team)}のメンバーAさんに {points} ポイント、{otherTeam && label(otherTeam)}のメンバーBさんに {10 - points} ポイントを配分しました。
          </p>
          {points > 5 ? (
            <DemoHint>
              自分と同じグループのメンバーに多く配分しましたね。しかし思い出してください——このグループ分けは「○と△、どちらが好きか」というだけの、あなたの人生に何の関係もない基準で決まったものです。メンバーAさんの顔も名前も知らないのに、「同じチーム」というラベルだけで、無意識に肩入れしてしまう。これが内集団バイアスです。タジフェルの実験でも、まったく同じことが起きました。
            </DemoHint>
          ) : points < 5 ? (
            <DemoHint>
              今回は外集団側に多く配分しましたね。これは内集団バイアスに逆らう選択です。実際の実験では、些細な基準で分けられたグループでも、多くの人が無意識に自分の側へ多く配分する傾向が確認されています。
            </DemoHint>
          ) : (
            <DemoHint>
              ちょうど半分ずつでしたね。公平な配分です。ただし多くの人は、些細な基準で分けられただけの「自分のチーム」に対しても、無意識のうちに多めに配分してしまう傾向があることが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

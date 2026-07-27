import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoTally } from "../../components/ui/DemoUI";

const SCENARIOS = [
  {
    situation: "明日は大事な資格試験です。今夜のあなたは？",
    handicap: "友達に誘われて、夜遅くまで遊びに行く",
    safe: "早めに寝て、当日のコンディションを整える",
  },
  {
    situation: "来週、大勢の前でプレゼンをします。前日の過ごし方は？",
    handicap: "準備を後回しにして、直前までほとんど手をつけない",
    safe: "スライドを見直し、通して練習しておく",
  },
  {
    situation: "大事な試合の前夜、あなたは？",
    handicap: "つい夜更かしして、動画を見続けてしまう",
    safe: "コンディションを整えて、いつも通りの時間に休む",
  },
  {
    situation: "重要な商談の朝、あなたは？",
    handicap: "「今回はあまり準備できていなくて……」と周りに前置きしておく",
    safe: "資料を最終確認し、集中して臨む",
  },
];

export function Demo({ accentHue }: DemoProps) {
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<("handicap" | "safe")[]>([]);

  const done = index >= SCENARIOS.length;
  const handicapCount = choices.filter((c) => c === "handicap").length;

  const handleChoose = (choice: "handicap" | "safe") => {
    setChoices((prev) => [...prev, choice]);
    setIndex((i) => i + 1);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {!done && (
        <>
          <DemoPrompt>{SCENARIOS[index].situation}</DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => handleChoose("handicap")}>{SCENARIOS[index].handicap}</DemoButton>
            <DemoButton onClick={() => handleChoose("safe")}>{SCENARIOS[index].safe}</DemoButton>
          </DemoChoices>
        </>
      )}

      {done && (
        <DemoResult title="あなたの選択の傾向">
          <DemoTally>
            <span>言い訳になりうる行動を選んだ回数：{handicapCount} / {SCENARIOS.length}</span>
          </DemoTally>
          {handicapCount >= 2 ? (
            <DemoHint>
              4つの場面のうち{handicapCount}回、後で「本気を出していなかったから」と言い訳できる行動を選びましたね。これはセルフ・ハンディキャッピングと呼ばれる自己防衛のパターンです。心理学者ジョーンズとバーグラスの実験では、次の課題に自信が持てない参加者ほど、あえて集中を妨げる薬をわざわざ選ぶ傾向が見られました。失敗しても能力のせいにされないよう、無意識に「言い訳」を先回りして用意してしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              言い訳になりうる行動をほとんど選びませんでしたね。多くの人は自信が持てない場面ほど、無意識のうちに準備不足や夜更かしといった「ハンディキャップ」を自分から作り、失敗の理由をあらかじめ確保しようとすることが研究で分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

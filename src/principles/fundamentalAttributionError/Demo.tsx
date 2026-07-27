import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoTally } from "../../components/ui/DemoUI";

const SCENARIOS = [
  {
    text: "高速道路で、後ろの車が異常に車間距離を詰めてクラクションを鳴らしてきました。",
    situational: "実はその運転手は、破水した妻を病院へ運んでいる途中でした。",
  },
  {
    text: "コンビニのレジで、店員がぶっきらぼうに商品を渡してきて、目も合わせませんでした。",
    situational: "実はその店員は、直前に理不尽なクレームを長時間浴びせられたばかりでした。",
  },
  {
    text: "チームメンバーが、約束していた資料の提出期限に間に合いませんでした。",
    situational: "実はそのメンバーは、家族の急病で前日に病院へ駆けつけていました。",
  },
];

type Answer = "character" | "situation";

export function Demo({ accentHue }: DemoProps) {
  const [round, setRound] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [revealed, setRevealed] = useState(false);

  const scenario = SCENARIOS[round];
  const characterCount = answers.filter((a) => a === "character").length;

  const handleAnswer = (a: Answer) => {
    const next = [...answers, a];
    setAnswers(next);
    if (round < SCENARIOS.length - 1) {
      setRound(round + 1);
    } else {
      setRevealed(true);
    }
  };

  return (
    <DemoShell accentHue={accentHue}>
      {!revealed ? (
        <>
          <DemoPrompt>{scenario.text} なぜこの人はこんな態度を取ったと思いますか？</DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => handleAnswer("character")}>もともとそういう性格・人柄の人なのだろう</DemoButton>
            <DemoButton onClick={() => handleAnswer("situation")}>何か事情があったのかもしれない</DemoButton>
          </DemoChoices>
          <DemoTally>
            <span>質問 {round + 1} / {SCENARIOS.length}</span>
          </DemoTally>
        </>
      ) : (
        <DemoResult title="実は、それぞれにこんな事情がありました">
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {SCENARIOS.map((s, i) => (
              <li key={i} style={{ marginBottom: 4 }}>
                {s.situational}（あなたの回答：
                {answers[i] === "character" ? "性格のせい" : "事情があったかも"}）
              </li>
            ))}
          </ul>
          {characterCount >= 2 ? (
            <DemoHint>
              3問中{characterCount}問で「性格・人柄のせい」を選びましたね。実際にはどの場面にも、私たちからは見えない切実な状況がありました。他人の行動を見るとき、私たちはその人自身にしか注意が向かず、背景にある状況要因を見落としがちです。これが根本的帰属の誤りです。
            </DemoHint>
          ) : (
            <DemoHint>
              「事情があったかも」を多く選べましたね。それでも実際の生活では、見知らぬ相手の行動をとっさに「性格のせい」と決めつけてしまうことが非常に多いことが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

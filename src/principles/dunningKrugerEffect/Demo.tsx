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

interface QuizDef {
  question: string;
  options: string[];
  correct: string;
}

const QUIZ: QuizDef[] = [
  {
    question: "バットとボールを合わせると1,100円。バットはボールより1,000円高い。ボールの値段は？",
    options: ["100円", "50円", "150円", "10円"],
    correct: "50円",
  },
  {
    question: "5台の機械が5個の部品を作るのに5分かかる。100台の機械が100個の部品を作るのに何分かかる？",
    options: ["100分", "20分", "5分", "1分"],
    correct: "5分",
  },
  {
    question: "実際の直径（サイズそのもの）が大きいのはどちらでしょうか？",
    options: ["太陽", "月", "ほぼ同じ"],
    correct: "太陽",
  },
  {
    question: "1kgの鉄と1kgの綿、重いのはどちらでしょうか？",
    options: ["鉄", "綿", "同じ重さ"],
    correct: "同じ重さ",
  },
  {
    question: "日本の都道府県の数は？",
    options: ["43", "45", "47", "50"],
    correct: "47",
  },
];

export function Demo({ accentHue }: DemoProps) {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [sliderValue, setSliderValue] = useState(3);
  const [answers, setAnswers] = useState<(string | null)[]>(QUIZ.map(() => null));

  const currentIndex = answers.findIndex((a) => a === null);
  const quizFinished = currentIndex === -1;

  const handlePredict = () => setPrediction(sliderValue);

  const setAnswer = (choice: string) => {
    setAnswers((prev) => prev.map((a, i) => (i === currentIndex ? choice : a)));
  };

  const actualScore = answers.filter((a, i) => a === QUIZ[i].correct).length;
  const gap = prediction !== null ? prediction - actualScore : 0;

  return (
    <DemoShell accentHue={accentHue}>
      {prediction === null && (
        <>
          <DemoPrompt>
            これから5問のクイズに答えてもらいます。まずは、その前に——あなたはこの5問中、何問正解できると思いますか？
          </DemoPrompt>
          <DemoSlider
            label="予想する正解数"
            value={sliderValue}
            min={0}
            max={5}
            displayValue={`${sliderValue} / 5問`}
            onChange={setSliderValue}
          />
          <DemoButton variant="primary" onClick={handlePredict}>
            予想を決めてクイズに進む
          </DemoButton>
        </>
      )}

      {prediction !== null && !quizFinished && (
        <>
          <DemoPrompt>{QUIZ[currentIndex].question}</DemoPrompt>
          <DemoChoices>
            {QUIZ[currentIndex].options.map((opt) => (
              <DemoButton key={opt} onClick={() => setAnswer(opt)}>
                {opt}
              </DemoButton>
            ))}
          </DemoChoices>
        </>
      )}

      {prediction !== null && quizFinished && (
        <DemoResult title={`予想 ${prediction}問 → 実際の正解 ${actualScore}問`}>
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {QUIZ.map((q, i) => (
              <li key={i} style={{ marginBottom: "4px" }}>
                <strong>{answers[i] === q.correct ? "◯" : "×"}</strong> {q.question}（正解：{q.correct}）
              </li>
            ))}
          </ul>
          <DemoHint>
            {gap > 0 &&
              `予想より実際の正解数が${gap}問少なかったですね。この5問はどれも「簡単そうに見えて直感で間違えやすい」クイズ（認知反射テスト）でした。よく分かっていない領域ほど、自分の理解度を過大評価してしまう——これがダニング＝クルーガー効果です。`}
            {gap === 0 &&
              "予想とぴったり一致しました。自分の実力を正確に見積もれるのは、実はその分野についてある程度分かっている証拠でもあります。"}
            {gap < 0 &&
              `予想より実際の正解数が${Math.abs(gap)}問多かったですね。優れた実力を持つ人ほど、逆に自分を控えめに評価する傾向があることも研究で示されています。`}
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

interface RoundDef {
  prompt: string;
  optionA: string;
  optionB: string;
  correct: "A" | "B";
  explanation: string;
}

const ROUNDS: RoundDef[] = [
  {
    prompt: "アメリカで、1年間に亡くなる人数が多いのはどちらだと思いますか？",
    optionA: "サメに襲われて亡くなる人",
    optionB: "雷に打たれて亡くなる人",
    correct: "B",
    explanation:
      "アメリカでのサメによる死者は年間平均1人前後なのに対し、雷による死者は年間20〜30人ほどと、実は雷の方がはるかに多いのです。サメのニュースは強い印象を残すため、実際の頻度以上に恐ろしく感じてしまいます。",
  },
  {
    prompt: "先進国で、1年間に亡くなる人数が多いのはどちらだと思いますか？",
    optionA: "交通事故で亡くなる人",
    optionB: "テロ事件で亡くなる人",
    correct: "A",
    explanation:
      "多くの先進国では、交通事故による死者数がテロ事件による死者数を桁違いに上回っています。それでもテロ事件は大きく報道されるため、体感的な危険度が実際の頻度以上に感じられてしまいます。",
  },
];

export function Demo() {
  const [answers, setAnswers] = useState<("A" | "B" | null)[]>([null, null]);
  const currentIndex = answers.findIndex((a) => a === null);
  const finished = currentIndex === -1;

  const setAnswer = (choice: "A" | "B") => {
    setAnswers((prev) => prev.map((a, i) => (i === currentIndex ? choice : a)));
  };

  const correctCount = answers.filter((a, i) => a === ROUNDS[i].correct).length;

  return (
    <DemoShell accentVar="--accent-availability">
      {!finished && (
        <>
          <DemoPrompt>{ROUNDS[currentIndex].prompt}</DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => setAnswer("A")}>{ROUNDS[currentIndex].optionA}</DemoButton>
            <DemoButton onClick={() => setAnswer("B")}>{ROUNDS[currentIndex].optionB}</DemoButton>
          </DemoChoices>
        </>
      )}

      {finished && (
        <DemoResult title={`結果：${correctCount} / ${ROUNDS.length} 問正解`}>
          {ROUNDS.map((round, i) => (
            <p key={i} style={{ margin: "0 0 8px" }}>
              <strong>{answers[i] === round.correct ? "◯" : "×"}</strong> {round.explanation}
            </p>
          ))}
          <DemoHint>
            印象に残りやすい出来事ほど「よくある」と感じてしまうのが利用可能性ヒューリスティックです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

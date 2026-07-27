import { useState } from "react";
import type { DemoProps } from "../types";
import {
  DemoButton,
  DemoChoices,
  DemoHint,
  DemoPrompt,
  DemoResult,
  DemoShell,
} from "../../components/ui/DemoUI";

type Answer = "増えた" | "減った" | "ほぼ変わらない";

interface Question {
  question: string;
  correct: Answer;
  note: string;
}

const QUESTIONS: Question[] = [
  {
    question: "世界の人口のうち「極度の貧困」の中で暮らす人の割合は、約200年前と比べてどうなったか？",
    correct: "減った",
    note: "研究による推定では、約200年前は世界人口の8〜9割が極度の貧困状態にあったのに対し、現在は1割未満まで減少したとされています。",
    },
  {
    question: "世界全体の識字率（文字の読み書きができる人の割合）は、約200年前と比べてどうなったか？",
    correct: "増えた",
    note: "推定では約200年前の世界の識字率は1割程度でしたが、現在は8割台後半まで上昇したとされています。",
  },
  {
    question: "多くの先進国における「平均寿命」は、50年前と比べてどうなったか？",
    correct: "増えた",
    note: "多くの国で医療や公衆衛生の向上により、平均寿命は50年前より延びています。",
  },
  {
    question: "多くの先進国における長期的な「犯罪発生率」は、数十年前と比べてどうなったか？",
    correct: "減った",
    note: "体感としては悪化していると感じられがちですが、多くの先進国で長期的な犯罪発生率の統計は数十年前より低下傾向にあります。",
  },
];

export function Demo({ accentHue }: DemoProps) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(Answer | null)[]>(QUESTIONS.map(() => null));
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);

  const current = QUESTIONS[index];

  const choose = (a: Answer) => {
    setAnswers((prev) => prev.map((x, i) => (i === index ? a : x)));
    setRevealed(true);
  };

  const next = () => {
    if (index + 1 < QUESTIONS.length) {
      setIndex(index + 1);
      setRevealed(false);
    } else {
      setFinished(true);
    }
  };

  const misjudgedTowardDecline = answers.filter((a, i) => a !== null && a !== QUESTIONS[i].correct).length;

  return (
    <DemoShell accentHue={accentHue}>
      {!finished && (
        <>
          <DemoPrompt>{current.question}</DemoPrompt>
          <DemoChoices>
            {(["増えた", "減った", "ほぼ変わらない"] as Answer[]).map((a) => (
              <DemoButton key={a} selected={answers[index] === a} onClick={() => !revealed && choose(a)}>
                {a}
              </DemoButton>
            ))}
          </DemoChoices>
          {revealed && (
            <DemoResult title={answers[index] === current.correct ? "実際のデータと一致していました" : "実際のデータとは違いました"}>
              <p style={{ margin: "0 0 8px" }}>
                実際の傾向：<strong>{current.correct}</strong>
              </p>
              <DemoHint>{current.note}</DemoHint>
              <DemoButton variant="primary" onClick={next} style={{ marginTop: "12px" }}>
                {index + 1 < QUESTIONS.length ? "次の質問へ" : "まとめを見る"}
              </DemoButton>
            </DemoResult>
          )}
        </>
      )}

      {finished && (
        <DemoResult title="4問を振り返ると">
          <p style={{ margin: "0 0 8px" }}>
            実際のデータと違う方向に答えた質問は {misjudgedTowardDecline} / {QUESTIONS.length} 問でした。
          </p>
          <DemoHint>
            {misjudgedTowardDecline > 0
              ? "多くの人は、実際には改善している物事についても「悪化している」「変わらない」と感じてしまいます。ニュースやSNSは衝撃的な悪い話題ほど拡散されやすく、長期的な改善はニュースになりにくいため、印象と現実にズレが生まれるのです。"
              : "今回はすべて実際のデータ通りに答えられましたね。それでも多くの人は、長期的に改善している物事を「衰退している」と感じてしまいがちです。"}
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

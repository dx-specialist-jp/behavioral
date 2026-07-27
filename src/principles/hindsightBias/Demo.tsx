import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

interface Question {
  prompt: string;
  optionA: string;
  optionB: string;
  correct: "A" | "B";
  explanation: string;
}

const QUESTIONS: Question[] = [
  {
    prompt: "1日の長さ（自転周期）が長いのはどちらだと思いますか？",
    optionA: "金星",
    optionB: "水星",
    correct: "A",
    explanation:
      "金星の自転周期は約243日と太陽系の惑星の中で最も遅く、水星（約59日）よりもずっと長いのです。",
  },
  {
    prompt: "先に生まれたのはどちらだと思いますか？",
    optionA: "コロンブス",
    optionB: "レオナルド・ダ・ヴィンチ",
    correct: "A",
    explanation: "コロンブスは1451年生まれ、ダ・ヴィンチは1452年生まれで、意外にもコロンブスの方が1年ほど先に生まれています。",
  },
  {
    prompt: "現在、人口が多い国はどちらだと思いますか？",
    optionA: "インド",
    optionB: "中国",
    correct: "A",
    explanation: "国連の推計によれば2023年にインドの人口が中国を上回り、現在は世界で最も人口が多い国はインドです。",
  },
];

type Stage = "predict" | "reveal" | "recall" | "compare";

interface RoundResult {
  correct: boolean;
  original: number;
  recalled: number;
}

export function Demo({ accentHue }: DemoProps) {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("predict");
  const [choice, setChoice] = useState<"A" | "B" | null>(null);
  const [confidence, setConfidence] = useState(50);
  const [recalled, setRecalled] = useState(50);
  const [results, setResults] = useState<RoundResult[]>([]);

  const q = QUESTIONS[index];
  const finished = index >= QUESTIONS.length;

  const pickChoice = (c: "A" | "B") => {
    setChoice(c);
    setConfidence(50);
  };

  const submitPrediction = () => {
    setStage("reveal");
  };

  const goToRecall = () => {
    setStage("recall");
    setRecalled(50);
  };

  const submitRecall = () => {
    const wasCorrect = choice === q.correct;
    setResults((prev) => [...prev, { correct: wasCorrect, original: confidence, recalled }]);
    setStage("compare");
  };

  const nextRound = () => {
    setIndex((i) => i + 1);
    setStage("predict");
    setChoice(null);
    setConfidence(50);
    setRecalled(50);
  };

  const correctResults = results.filter((r) => r.correct);
  const avgCreep =
    correctResults.length > 0
      ? correctResults.reduce((sum, r) => sum + (r.recalled - r.original), 0) / correctResults.length
      : 0;

  return (
    <DemoShell accentHue={accentHue}>
      {!finished && stage === "predict" && (
        <>
          <DemoPrompt>
            第{index + 1}問／全{QUESTIONS.length}問：{q.prompt}
          </DemoPrompt>
          <DemoChoices>
            <DemoButton selected={choice === "A"} onClick={() => pickChoice("A")}>
              {q.optionA}
            </DemoButton>
            <DemoButton selected={choice === "B"} onClick={() => pickChoice("B")}>
              {q.optionB}
            </DemoButton>
          </DemoChoices>
          {choice && (
            <>
              <DemoSlider
                label="その答えへの自信度"
                value={confidence}
                min={50}
                max={100}
                displayValue={`${confidence}%`}
                onChange={setConfidence}
              />
              <DemoButton variant="primary" onClick={submitPrediction}>
                回答する
              </DemoButton>
            </>
          )}
        </>
      )}

      {!finished && stage === "reveal" && (
        <>
          <DemoPrompt>
            正解は「{q.correct === "A" ? q.optionA : q.optionB}」でした。{q.explanation}
          </DemoPrompt>
          <DemoButton variant="primary" onClick={goToRecall}>
            次へ
          </DemoButton>
        </>
      )}

      {!finished && stage === "recall" && (
        <>
          <DemoPrompt>
            では思い出してください。正解を知る前、あなたは自分の答えにどれくらい自信がありましたか？
          </DemoPrompt>
          <DemoSlider
            label="思い出した自信度"
            value={recalled}
            min={50}
            max={100}
            displayValue={`${recalled}%`}
            onChange={setRecalled}
          />
          <DemoButton variant="primary" onClick={submitRecall}>
            確定する
          </DemoButton>
        </>
      )}

      {!finished && stage === "compare" && (
        <DemoResult title="実際に記録した自信度と比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            あなたが実際に答えた時の自信度：{confidence}% ／ 今思い出した自信度：{recalled}%
          </p>
          <DemoButton variant="primary" onClick={nextRound}>
            {index + 1 < QUESTIONS.length ? "次の問題へ" : "全体の結果を見る"}
          </DemoButton>
        </DemoResult>
      )}

      {finished && (
        <DemoResult title={`${QUESTIONS.length}問を振り返って`}>
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {results.map((r, i) => (
              <li key={i}>
                第{i + 1}問：{r.correct ? "正解" : "不正解"} ／ 実際の自信度 {r.original}% → 思い出した自信度 {r.recalled}%
              </li>
            ))}
          </ul>
          {correctResults.length > 0 && avgCreep > 0 ? (
            <DemoHint>
              正解した問題では、実際に記録した自信度より思い出した自信度の方が平均で約{avgCreep.toFixed(0)}
              ポイント高くなっていました。正解を知った後で「自分はもっと自信があった」と記憶が書き換わる——これが後知恵バイアスです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回はきれいに記憶が保たれていましたね。多くの人は正解を知った後、当時の自信度を実際より高く思い出してしまいます。「最初から分かっていた」という感覚には注意が必要です。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

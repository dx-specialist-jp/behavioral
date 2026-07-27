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

interface Statement {
  speaker: string;
  line: string;
  isLie: boolean;
}

const STATEMENTS: Statement[] = [
  { speaker: "同僚", line: "「このプレゼン、すごく分かりやすかったです！」", isLie: true },
  { speaker: "友人", line: "「新しくできたカフェ、思ったより美味しかったよ」", isLie: false },
  { speaker: "部下", line: "「体調は全然大丈夫です、問題ありません」", isLie: true },
  { speaker: "上司", line: "「今回の企画は、任せて安心して見ていられるよ」", isLie: false },
];

export function Demo({ accentHue }: DemoProps) {
  const [answers, setAnswers] = useState<(boolean | null)[]>(STATEMENTS.map(() => null));
  const [done, setDone] = useState(false);

  const answer = (index: number, guessLie: boolean) => {
    setAnswers((prev) => prev.map((a, i) => (i === index ? guessLie : a)));
  };

  const allAnswered = answers.every((a) => a !== null);
  const correctCount = answers.filter((a, i) => a === STATEMENTS[i].isLie).length;

  return (
    <DemoShell accentHue={accentHue}>
      {!done && (
        <>
          <DemoPrompt>
            次の4つの発言は、本音をそのまま言っているもの（本当）と、内心では思っていないのに口にしたもの（嘘）が混ざっています。あなたが観察者として、どちらか見抜けるか試してみましょう。
          </DemoPrompt>
          {STATEMENTS.map((s, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              <DemoPrompt>
                {s.speaker}：{s.line}
              </DemoPrompt>
              <DemoChoices>
                <DemoButton selected={answers[i] === false} onClick={() => answer(i, false)}>
                  本当だと思う
                </DemoButton>
                <DemoButton selected={answers[i] === true} onClick={() => answer(i, true)}>
                  嘘だと思う
                </DemoButton>
              </DemoChoices>
            </div>
          ))}
          <DemoButton variant="primary" disabled={!allAnswered} onClick={() => setDone(true)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {done && (
        <DemoResult title={`あなたの正解率：${correctCount} / ${STATEMENTS.length}`}>
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {STATEMENTS.map((s, i) => (
              <li key={i}>
                {s.speaker}の発言は「{s.isLie ? "嘘" : "本当"}」でした
                {answers[i] === s.isLie ? "（あなたの回答：正解）" : "（あなたの回答：不正解）"}
              </li>
            ))}
          </ul>
          <DemoHint>
            2006年のボンドとデパウロによる大規模なメタ分析でも、他人の嘘を見抜く平均的な正答率は54%程度、つまりコイン投げとほとんど変わりませんでした。あなたが観察者としてどうだったかに関わらず、嘘や本心を隠している本人は「きっと見抜かれているはずだ」と過大に感じています。実際にはその内面は、あなたが思うよりずっと伝わっていないのです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

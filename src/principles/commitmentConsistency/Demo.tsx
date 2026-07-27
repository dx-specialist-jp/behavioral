import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

type Step = "r1-guess" | "r1-challenge" | "r2-guess" | "r2-locked" | "r2-challenge" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [step, setStep] = useState<Step>("r1-guess");
  const [guess1, setGuess1] = useState(20);
  const [guess2, setGuess2] = useState(7);
  const [revise1, setRevise1] = useState<boolean | null>(null);
  const [revise2, setRevise2] = useState<boolean | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      {step === "r1-guess" && (
        <>
          <DemoPrompt>【1回目】日本国内で発生する食品ロスは、生産量のうち何%だと思いますか？（気軽に考えるだけでOKです）</DemoPrompt>
          <DemoSlider label="あなたの見積もり" value={guess1} min={0} max={50} displayValue={`${guess1}%`} onChange={setGuess1} />
          <DemoButton variant="primary" onClick={() => setStep("r1-challenge")}>
            次へ
          </DemoButton>
        </>
      )}

      {step === "r1-challenge" && (
        <>
          <DemoPrompt>
            実はさきほど別の100人に同じ質問をしたところ、平均の回答は「{guess1}%」とはかなり違う数字でした。考えを変えますか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              selected={revise1 === true}
              onClick={() => {
                setRevise1(true);
                setStep("r2-guess");
              }}
            >
              変える
            </DemoButton>
            <DemoButton
              selected={revise1 === false}
              onClick={() => {
                setRevise1(false);
                setStep("r2-guess");
              }}
            >
              変えない
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {step === "r2-guess" && (
        <>
          <DemoPrompt>【2回目】日本人の1日の平均睡眠時間は何時間だと思いますか？</DemoPrompt>
          <DemoSlider label="あなたの見積もり" value={guess2} min={4} max={10} step={0.5} displayValue={`${guess2}時間`} onChange={setGuess2} />
          <DemoButton variant="primary" onClick={() => setStep("r2-locked")}>
            この回答を確定して記録する
          </DemoButton>
        </>
      )}

      {step === "r2-locked" && (
        <>
          <DemoPrompt>
            回答を確定しました。あなたの答えは「
            <strong>{guess2}時間</strong>」として記録されています。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={() => setStep("r2-challenge")}>
            次へ
          </DemoButton>
        </>
      )}

      {step === "r2-challenge" && (
        <>
          <DemoPrompt>
            実はさきほど別の100人に同じ質問をしたところ、平均の回答は「{guess2}時間」とはかなり違う数字でした。確定した回答を、考え直しますか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              selected={revise2 === true}
              onClick={() => {
                setRevise2(true);
                setStep("done");
              }}
            >
              変える
            </DemoButton>
            <DemoButton
              selected={revise2 === false}
              onClick={() => {
                setRevise2(false);
                setStep("done");
              }}
            >
              変えない
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {step === "done" && (
        <DemoResult title="1回目と2回目を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            1回目（確定ボタンなし）: {revise1 ? "考えを変えた" : "変えなかった"} ／ 2回目（確定ボタンあり）:{" "}
            {revise2 ? "考えを変えた" : "変えなかった"}
          </p>
          {revise1 === true && revise2 === false ? (
            <DemoHint>
              1回目は気軽に答えただけなので考えを変えやすかったのに、2回目は「確定して記録する」というひと手間を挟んだだけで、意見を変えにくくなりましたね。ドイッチュとジェラードの実験(1955年)でも、答えを紙に書いたり人前で発表したりした人ほど、後から矛盾する情報が来ても最初の答えに固執することが確認されています。「確定する」という小さな行為が、一貫性を保とうとする心理を強めるのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は2回とも同じ反応でしたね。それでも一般的には、「確定する」「署名する」「人に話す」といった小さなコミットメントを挟むだけで、後から反対の情報が来ても意見を変えにくくなることが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

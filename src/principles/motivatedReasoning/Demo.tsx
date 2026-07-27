import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [habit, setHabit] = useState<"yes" | "no" | null>(null);
  const [stage, setStage] = useState<"ask" | "studyA" | "studyB" | "result">("ask");
  const [ratingA, setRatingA] = useState(50);
  const [ratingB, setRatingB] = useState(50);

  const handleHabit = (value: "yes" | "no") => {
    setHabit(value);
    setStage("studyA");
  };

  const favorableRating = habit === "yes" ? ratingA : ratingB;
  const unfavorableRating = habit === "yes" ? ratingB : ratingA;
  const gap = favorableRating - unfavorableRating;

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "ask" && (
        <>
          <DemoPrompt>あなたはコーヒーを日常的によく飲みますか？</DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => handleHabit("yes")}>よく飲む</DemoButton>
            <DemoButton onClick={() => handleHabit("no")}>あまり飲まない</DemoButton>
          </DemoChoices>
        </>
      )}

      {stage === "studyA" && (
        <>
          <DemoPrompt>
            ある研究によると「コーヒーを習慣的に飲む人は、飲まない人より長生きでリスクが低い傾向がある」と報告されました。
          </DemoPrompt>
          <DemoSlider
            label="この研究はどれくらい信頼できると思いますか？"
            value={ratingA}
            min={0}
            max={100}
            displayValue={`${ratingA}%`}
            onChange={setRatingA}
          />
          <DemoButton variant="primary" onClick={() => setStage("studyB")}>
            次の研究へ
          </DemoButton>
        </>
      )}

      {stage === "studyB" && (
        <>
          <DemoPrompt>
            別の研究によると「コーヒーを習慣的に飲む人は、不安を感じやすい傾向がある」と報告されました。
          </DemoPrompt>
          <DemoSlider
            label="この研究はどれくらい信頼できると思いますか？"
            value={ratingB}
            min={0}
            max={100}
            displayValue={`${ratingB}%`}
            onChange={setRatingB}
          />
          <DemoButton variant="primary" onClick={() => setStage("result")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === "result" && (
        <DemoResult title="2つの研究への評価を比べると">
          <p style={{ margin: "0 0 8px" }}>
            長寿に関する研究への信頼度：{ratingA}% ／ 不安に関する研究への信頼度：{ratingB}%
          </p>
          {gap >= 10 ? (
            <DemoHint>
              あなたの習慣にとって都合の良い方の研究（コーヒーを{habit === "yes" ? "飲む" : "飲まない"}
              自分を支持する内容）を、そうでない方より{gap}ポイントも信頼できると評価しましたね。これが動機づけられた推論です。同じ質の情報でも、自分にとって望ましい結論かどうかによって、批判の厳しさや信頼度の評価が無意識に変わってしまうのです。心理学者ジフ・クンダの研究でも、コーヒーをよく飲む人ほど「カフェインは体に悪い」というデータの欠陥を熱心に探す傾向が示されました。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は2つの研究への信頼度にあまり差が出ませんでしたね、公平な評価ができています。多くの人は、自分の習慣を支持する研究の方を無意識に高く評価し、都合の悪い研究には粗探しをしてしまう「動機づけられた推論」に陥りやすいことが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

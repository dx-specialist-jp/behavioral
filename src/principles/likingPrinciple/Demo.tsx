import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const HOBBIES = ["登山", "映画鑑賞", "料理", "ランニング"];

export function Demo({ accentHue }: DemoProps) {
  const [hobby, setHobby] = useState<string | null>(null);
  const [order] = useState<boolean>(() => Math.random() < 0.5);
  const [ratingSimilar, setRatingSimilar] = useState(5);
  const [ratingGeneric, setRatingGeneric] = useState(5);
  const [step, setStep] = useState(0);

  const request =
    "「今度、地域のイベントで使う募金活動のスタッフを探しています。2時間だけ手伝ってもらえませんか？」";

  const first = order ? "similar" : "generic";
  const second = order ? "generic" : "similar";

  return (
    <DemoShell accentHue={accentHue}>
      {!hobby && (
        <>
          <DemoPrompt>あなたが一番好きな趣味を選んでください。</DemoPrompt>
          <DemoChoices>
            {HOBBIES.map((h) => (
              <DemoButton key={h} onClick={() => setHobby(h)}>
                {h}
              </DemoButton>
            ))}
          </DemoChoices>
        </>
      )}

      {hobby && step === 0 && (
        <>
          <DemoPrompt>
            {first === "similar"
              ? `雑談の中で、頼みごとをしてきた人が「実は私も${hobby}が趣味なんです！」と話しました。その後、こう頼まれました。`
              : "特に共通点のない、初対面の人からこう頼まれました。"}{" "}
            {request}
          </DemoPrompt>
          <DemoSlider
            label="このお願いに応じたい気持ち"
            value={first === "similar" ? ratingSimilar : ratingGeneric}
            min={0}
            max={10}
            displayValue={`${first === "similar" ? ratingSimilar : ratingGeneric} / 10`}
            onChange={first === "similar" ? setRatingSimilar : setRatingGeneric}
          />
          <DemoButton variant="primary" onClick={() => setStep(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {hobby && step === 1 && (
        <>
          <DemoPrompt>
            別の日、また同じ内容を頼まれました。{" "}
            {second === "similar"
              ? `今度は雑談の中で、頼んできた人が「実は私も${hobby}が趣味なんです！」と話しました。`
              : "今回は特に共通点のない、初対面の人からの依頼です。"}{" "}
            {request}
          </DemoPrompt>
          <DemoSlider
            label="このお願いに応じたい気持ち"
            value={second === "similar" ? ratingSimilar : ratingGeneric}
            min={0}
            max={10}
            displayValue={`${second === "similar" ? ratingSimilar : ratingGeneric} / 10`}
            onChange={second === "similar" ? setRatingSimilar : setRatingGeneric}
          />
          <DemoButton variant="primary" onClick={() => setStep(2)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {hobby && step === 2 && (
        <DemoResult title="2つの評価を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            同じ趣味({hobby})を持つ人からの依頼: {ratingSimilar} / 10　／　共通点のない人からの依頼: {ratingGeneric}{" "}
            / 10
          </p>
          {ratingSimilar > ratingGeneric ? (
            <DemoHint>
              頼みごとの中身はまったく同じだったのに、「趣味が同じ」というだけで応じたい気持ちが上がりましたね。これが好意の原理です。類似性は相手への好意を生み、その好意が頼みごとへの承諾しやすさに直結します。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は評価に差が出ませんでしたね。それでも多くの人は、類似点(出身地・趣味・意見)を1つ見つけただけで相手への好意が急に高まり、頼みごとに応じやすくなることが実験で繰り返し示されています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

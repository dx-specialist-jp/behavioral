import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const CLAIM = "「1日1杯のあるスープを飲むと、内臓の疲労が和らぐ」";

export function Demo({ accentHue }: DemoProps) {
  const [order] = useState<boolean>(() => Math.random() < 0.5);
  const [ratingAuthority, setRatingAuthority] = useState(5);
  const [ratingPlain, setRatingPlain] = useState(5);
  const [step, setStep] = useState(0);

  const authorityLabel = "医学博士・〇〇大学病院 内科部長";
  const plainLabel = "近所に住むアキラさん(会社員・40代)";

  const first = order ? "authority" : "plain";
  const second = order ? "plain" : "authority";

  return (
    <DemoShell accentHue={accentHue}>
      {step === 0 && (
        <>
          <DemoPrompt>次の主張を読んでください。{CLAIM}</DemoPrompt>
          <DemoPrompt>
            発言者:{" "}
            <strong>{first === "authority" ? authorityLabel : plainLabel}</strong>
          </DemoPrompt>
          <DemoSlider
            label="この主張をどのくらい信じられますか？"
            value={first === "authority" ? ratingAuthority : ratingPlain}
            min={0}
            max={10}
            displayValue={`${first === "authority" ? ratingAuthority : ratingPlain} / 10`}
            onChange={first === "authority" ? setRatingAuthority : setRatingPlain}
          />
          <DemoButton variant="primary" onClick={() => setStep(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {step === 1 && (
        <>
          <DemoPrompt>同じ主張です。今度は発言者が違います。{CLAIM}</DemoPrompt>
          <DemoPrompt>
            発言者: <strong>{second === "authority" ? authorityLabel : plainLabel}</strong>
          </DemoPrompt>
          <DemoSlider
            label="この主張をどのくらい信じられますか？"
            value={second === "authority" ? ratingAuthority : ratingPlain}
            min={0}
            max={10}
            displayValue={`${second === "authority" ? ratingAuthority : ratingPlain} / 10`}
            onChange={second === "authority" ? setRatingAuthority : setRatingPlain}
          />
          <DemoButton variant="primary" onClick={() => setStep(2)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {step === 2 && (
        <DemoResult title="2つの評価を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            「{authorityLabel}」の発言としての評価: {ratingAuthority} / 10 ／「{plainLabel}」の発言としての評価:{" "}
            {ratingPlain} / 10
          </p>
          {ratingAuthority > ratingPlain ? (
            <DemoHint>
              主張の中身はどちらも一言一句同じだったのに、「医学博士」という肩書きがついた方を高く評価しましたね。実はこの主張自体に医学的根拠はありません。ミルグラムの服従実験が示したように、私たちは権威の記号（肩書き・白衣・話し方の自信）を見ただけで、内容の検証をすっ飛ばして信じてしまうことがあります。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は評価に差が出ませんでしたね。中身が同じ主張には同じ評価をつける——これは実は簡単なようで、多くの人が肩書きの有無で評価を変えてしまう「権威バイアス」に無自覚に影響されています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

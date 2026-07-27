import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Answer = "yes" | "no";

export function Demo({ accentHue }: DemoProps) {
  const [step, setStep] = useState<"ask1" | "gift" | "ask2" | "done">("ask1");
  const [answer1, setAnswer1] = useState<Answer | null>(null);
  const [answer2, setAnswer2] = useState<Answer | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      {step === "ask1" && (
        <>
          <DemoPrompt>
            見知らぬ人からいきなり声をかけられ、「5分だけ、簡単なアンケートに答えてもらえますか？」と頼まれました。あなたは応じますか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              selected={answer1 === "yes"}
              onClick={() => {
                setAnswer1("yes");
                setStep("gift");
              }}
            >
              応じる
            </DemoButton>
            <DemoButton
              selected={answer1 === "no"}
              onClick={() => {
                setAnswer1("no");
                setStep("gift");
              }}
            >
              断る
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {step === "gift" && (
        <>
          <DemoPrompt>
            今度は同じ状況ですが、声をかけてきた人は先にこう言いました。「暑いですよね、これどうぞ」と冷たい飲み物を無償で1本手渡してくれました。あなたはそれを受け取りました。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={() => setStep("ask2")}>
            次へ
          </DemoButton>
        </>
      )}

      {step === "ask2" && (
        <>
          <DemoPrompt>
            飲み物を渡した後、その人は続けて「実は5分だけ、簡単なアンケートに答えてもらえますか？」と頼んできました。あなたは応じますか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton
              selected={answer2 === "yes"}
              onClick={() => {
                setAnswer2("yes");
                setStep("done");
              }}
            >
              応じる
            </DemoButton>
            <DemoButton
              selected={answer2 === "no"}
              onClick={() => {
                setAnswer2("no");
                setStep("done");
              }}
            >
              断る
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {step === "done" && (
        <DemoResult title="1回目と2回目を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            1回目（何ももらっていない）: {answer1 === "yes" ? "応じる" : "断る"} / 2回目（飲み物をもらった後）:{" "}
            {answer2 === "yes" ? "応じる" : "断る"}
          </p>
          {answer1 === "no" && answer2 === "yes" ? (
            <DemoHint>
              何ももらっていないときは断ったのに、ちょっとした飲み物を1本もらっただけで応じる気持ちに変わりましたね。実際の実験（デニス・リーガン, 1971年）でも、コーラを1本奢られた人は、そうでない人のおよそ2倍もラッフルチケットを購入しました。もらった物の価値とお返しの大きさは釣り合っていないのに、「もらったからには」という負債感が判断を動かすのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回はどちらも同じ答えでしたね。それでも多くの人は、ちょっとした施しを受けた直後は「お返ししなければ」という気持ちが働き、普段なら断る頼みごとにも応じやすくなることが実験で繰り返し確認されています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const GENERIC_PROFILE =
  "あなたは他者からの好意や称賛を求める一方で、自分自身にはやや批判的な傾向があります。表面的には社交的で自制心があるように見えても、内面では不安や心配を抱えることがあります。ある時は外向的で親しみやすく振る舞いますが、また別の時には内向的で慎重、そして口数が少なくなることもあります。あなたの願望の中には、少し非現実的に思えるものもいくつかあります。自分は独立した思考をする人間でありたいと望んでおり、十分な証拠がない主張は簡単には受け入れません。また、他人に対してあまりに率直に自分をさらけ出すのは賢明でないとも感じています。";

export function Demo({ accentHue }: DemoProps) {
  const [q1, setQ1] = useState<string | null>(null);
  const [q2, setQ2] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const answered = q1 !== null && q2 !== null;

  return (
    <DemoShell accentHue={accentHue}>
      {!answered && (
        <>
          <DemoPrompt>簡単な性格診断に答えてください。（Q1）休日の過ごし方は？</DemoPrompt>
          <DemoChoices>
            <DemoButton selected={q1 === "out"} onClick={() => setQ1("out")}>
              外に出かける
            </DemoButton>
            <DemoButton selected={q1 === "home"} onClick={() => setQ1("home")}>
              家で過ごす
            </DemoButton>
          </DemoChoices>
          <DemoPrompt>（Q2）初対面の人と話すのは？</DemoPrompt>
          <DemoChoices>
            <DemoButton selected={q2 === "easy"} onClick={() => setQ2("easy")}>
              得意な方だ
            </DemoButton>
            <DemoButton selected={q2 === "hard"} onClick={() => setQ2("hard")}>
              苦手な方だ
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {answered && !submitted && (
        <>
          <DemoPrompt>あなたの回答をもとに生成された、あなただけの性格診断結果です。</DemoPrompt>
          <p
            style={{
              margin: "0 0 12px",
              padding: "12px",
              borderRadius: "8px",
              background: "var(--color-bg)",
              border: "1px solid var(--color-border-strong)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
            }}
          >
            {GENERIC_PROFILE}
          </p>
          <DemoSlider
            label="この診断結果は、どれくらい自分に当てはまっていますか"
            value={accuracy}
            min={0}
            max={10}
            onChange={setAccuracy}
          />
          <DemoButton variant="primary" onClick={() => setSubmitted(true)}>
            回答する
          </DemoButton>
        </>
      )}

      {submitted && (
        <DemoResult title="実はこの診断、質問への回答とは無関係でした">
          <p style={{ margin: "0 0 8px" }}>
            あなたの評価は{accuracy}/10でした。実はこの文章は、あなたがQ1・Q2にどう答えても、他の誰が読んでも、まったく同じ文章が表示されるようになっていました。
          </p>
          <DemoHint>
            心理学者バートラム・フォアラーが1948年に行った実験でも、参加者全員が同一の曖昧な文章を「自分専用の診断結果」として渡され、平均5点満点中4.26点という高い的中感を報告しました。曖昧で誰にでも当てはまる表現は、「まさに自分のことだ」と感じさせやすいのです（バーナム効果）。これが星占いや性格診断が「当たっている」と感じられる理由の一つです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

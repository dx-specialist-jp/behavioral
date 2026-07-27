import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "A" | "B";

export function Demo({ accentHue }: DemoProps) {
  const [staged, setStaged] = useState<Choice | null>(null);
  const [single, setSingle] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>【質問1】次の2段階のゲームに参加するとします。あなたならどちらを選びますか？</DemoPrompt>
      <DemoPrompt>
        まず75%の確率で何ももらえずゲームは終了、25%の確率で次の段階に進めます。次の段階に進めた場合、あなたは以下のどちらかを選べます。
      </DemoPrompt>
      <DemoChoices>
        <DemoButton selected={staged === "A"} onClick={() => setStaged("A")}>
          A：次の段階に進めたら、確実に3,000円もらえる
        </DemoButton>
        <DemoButton selected={staged === "B"} onClick={() => setStaged("B")}>
          B：次の段階に進めたら、80%の確率で4,500円もらえる（外れは0円）
        </DemoButton>
      </DemoChoices>

      {staged && (
        <>
          <DemoPrompt>
            【質問2】今度は、まったく別の1回きりのくじだと思って選んでください。
          </DemoPrompt>
          <DemoChoices>
            <DemoButton selected={single === "A"} onClick={() => setSingle("A")}>
              A'：25%の確率で3,000円もらえる（外れは0円）
            </DemoButton>
            <DemoButton selected={single === "B"} onClick={() => setSingle("B")}>
              B'：20%の確率で4,500円もらえる（外れは0円）
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {staged && single && (
        <DemoResult title="2つの質問を数字で比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            実は質問1のAは「25%の確率で3,000円」、Bは「20%の確率(25%×80%)で4,500円」と、質問2とまったく同じ確率構造です。
          </p>
          {staged === "A" && single === "B" ? (
            <DemoHint>
              質問1ではA（確実に見える方）を、質問2ではB'（期待値が高い方）を選びましたね。確率としては同じ選択肢のはずなのに、「次の段階に進めば確実」という言葉に選択が引っ張られました。これが疑似確実性効果です。段階の中だけを見ると確実に感じても、全体で見れば少しも確実ではありません。
            </DemoHint>
          ) : (
            <DemoHint>
              2つの質問で一貫した選び方でしたね。多くの人は質問1でA（確実に見える方）を選び、質問2ではB'（期待値が高い方）を選んで、選好が入れ替わってしまいます。「確実」という言葉が段階の中でどれほど強く感じられるか、体感できたと思います。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

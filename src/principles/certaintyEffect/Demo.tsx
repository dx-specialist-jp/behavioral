import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice1 = "certain" | "gamble85";
type Choice2 = "gamble20" | "gamble17";

export function Demo({ accentHue }: DemoProps) {
  const [choice1, setChoice1] = useState<Choice1 | null>(null);
  const [choice2, setChoice2] = useState<Choice2 | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>【質問1】次のどちらを選びますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice1 === "certain"} onClick={() => setChoice1("certain")}>
          A：確実に80万円もらえる
        </DemoButton>
        <DemoButton selected={choice1 === "gamble85"} onClick={() => setChoice1("gamble85")}>
          B：85%の確率で100万円（15%で0円）
        </DemoButton>
      </DemoChoices>

      {choice1 && (
        <>
          <DemoPrompt>【質問2】では、次のどちらを選びますか？</DemoPrompt>
          <DemoChoices>
            <DemoButton selected={choice2 === "gamble20"} onClick={() => setChoice2("gamble20")}>
              C：20%の確率で80万円（80%で0円）
            </DemoButton>
            <DemoButton selected={choice2 === "gamble17"} onClick={() => setChoice2("gamble17")}>
              D：17%の確率で100万円（83%で0円）
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {choice1 && choice2 && (
        <DemoResult title="実は、確率の比率はまったく同じです">
          <p style={{ margin: "0 0 8px" }}>
            質問2は、質問1の確率をどちらも0.2倍しただけのものです（85%×0.2=17%、100%×0.2=20%）。理論上は質問1でAを選んだ人は質問2でCを、Bを選んだ人はDを選ぶはずです。
          </p>
          {choice1 === "certain" && choice2 === "gamble17" ? (
            <DemoHint>
              あなたはまさに多くの人と同じパターン（AとD）を選びましたね。これがアレのパラドックスとして知られる確実性効果です。「確実」という選択肢がある質問1ではAを選びやすく、どちらも不確実になる質問2では期待値の高いDに切り替わる——確率が同じ比率で動いていても、「確実かどうか」が判断を大きく左右してしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は一貫した選び方をしましたね。ただ実際の実験では、質問1でAを選びながら質問2ではDを選ぶという、期待効用理論とは矛盾するパターンを選ぶ人が数多く見られます。「確実」という響きが持つ心理的な重みが、その原因だと考えられています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Answer = "single" | "conjunction";

export function Demo({ accentHue }: DemoProps) {
  const [answer, setAnswer] = useState<Answer | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        次の人物紹介を読んでください。「リンダは31歳、独身で率直な性格。大学では哲学を専攻し、学生時代は差別や社会正義の問題に強い関心を持ち、反核デモにも参加していた。」
      </DemoPrompt>
      <DemoPrompt>この2つの文のうち、どちらが起こる可能性が高いと思いますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={answer === "single"} onClick={() => setAnswer("single")}>
          リンダは銀行の窓口係である
        </DemoButton>
        <DemoButton selected={answer === "conjunction"} onClick={() => setAnswer("conjunction")}>
          リンダは銀行の窓口係であり、かつフェミニズム運動に積極的に参加している
        </DemoButton>
      </DemoChoices>

      {answer !== null && (
        <DemoResult title="正解は「銀行の窓口係である」の方が高い（か、少なくとも同じ）">
          <p style={{ margin: "0 0 8px" }}>
            「窓口係であり、かつフェミニズム運動に参加している」は、2つの条件が同時に成り立つ必要がある事象（連言事象）です。条件が1つの事象の確率が、それを含む連言事象の確率を下回ることは論理的にあり得ません——フェミニストの窓口係は、窓口係全体の中の一部分にすぎないからです。
          </p>
          {answer === "conjunction" ? (
            <DemoHint>
              多くの人がこちらを選びます（トベルスキーとカーネマンの元の実験でも8割以上）。人物紹介が「フェミニストらしい」イメージにとても似ていたため、その典型度（代表性）の高さにつられて、論理的な確率を見誤ってしまったのです。
            </DemoHint>
          ) : (
            <DemoHint>
              論理的に正しい方を選べましたね。多くの人は人物紹介の「らしさ」につられて、確率の低いはずの連言事象を選んでしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "red" | "black";

export function Demo({ accentHue }: DemoProps) {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        壺の中に赤玉が30個、黒玉と黄玉が合わせて60個入っています（黒玉と黄玉の内訳は公開されていません）。1回だけ玉を引き、当たった色なら賞金がもらえます。あなたはどちらに賭けますか？
      </DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice === "red"} onClick={() => setChoice("red")}>
          赤玉に賭ける（90個中、確実に30個）
        </DemoButton>
        <DemoButton selected={choice === "black"} onClick={() => setChoice("black")}>
          黒玉に賭ける（90個中、0〜60個の間だが内訳は不明）
        </DemoButton>
      </DemoChoices>

      {choice && (
        <DemoResult title="実は、どちらも当たる確率の期待値は同じです">
          <p style={{ margin: "0 0 8px" }}>
            黒玉と黄玉の内訳が分からない以上、黒玉の確率は平均すれば赤玉と同じ「90個中30個」だと考えるのが自然です。それでも多くの人は{choice === "red" ? "あなたと同じように" : "あなたとは逆に"}「赤玉」を選びます。
          </p>
          <DemoHint>
            これが曖昧性回避です。確率がはっきり分かっているリスクより、確率そのものが分からない曖昧な状況を、人は期待値以上に強く避けようとします。エルズバーグの実験では、多くの参加者がこの「赤玉」を選ぶ一方で、別の賭け方を比較させると期待効用理論では説明できない矛盾した選択をすることも示されています。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

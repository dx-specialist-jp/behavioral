import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "buy" | "sell" | "hold";

export function Demo({ accentHue }: DemoProps) {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        ある株について、あなたが独自に分析した結果は「割安で今が買い時」でした。しかし取引画面を見ると、直近10分で他の投資家98人中80人が「売り」を選択しています。あなたはどうしますか？
      </DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice === "buy"} onClick={() => setChoice("buy")}>
          自分の分析通り「買う」
        </DemoButton>
        <DemoButton selected={choice === "sell"} onClick={() => setChoice("sell")}>
          周りに合わせて「売る」
        </DemoButton>
        <DemoButton selected={choice === "hold"} onClick={() => setChoice("hold")}>
          様子見でどちらもしない
        </DemoButton>
      </DemoChoices>

      {choice && (
        <DemoResult title="あなたの選択">
          <p style={{ margin: "0 0 8px" }}>
            {choice === "buy"
              ? "自分の分析を貫き、「買う」を選びましたね。"
              : choice === "sell"
                ? "周囲に合わせて「売る」を選びましたね。"
                : "どちらにも動かず「様子見」を選びましたね。"}
          </p>
          <DemoHint>
            群集行動の面白いところは、多くの人が「他の投資家は自分の知らない情報を持っているはずだ」と合理的に考えて周囲に同調してしまう点です。しかし全員がそう考えて自分の情報を抑え込むと、実は誰の情報も市場に反映されないまま、群れの勢いだけで価格が動いてしまいます。それがバブルや暴落の連鎖につながることがあります。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

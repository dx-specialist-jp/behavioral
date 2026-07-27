import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "signup" | "nothing";

export function Demo({ accentHue }: DemoProps) {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        新しく入社した会社で、確定拠出年金の案内を渡されました。「加入したい人は、この用紙にサインして提出してください（何もしなければ加入しません）」と書かれています。あなたは実際に手続きをしてまで加入しますか？
      </DemoPrompt>
      <DemoChoices>
        <DemoButton selected={choice === "signup"} onClick={() => setChoice("signup")}>
          手続きして加入する
        </DemoButton>
        <DemoButton selected={choice === "nothing"} onClick={() => setChoice("nothing")}>
          何もしない（未加入のまま）
        </DemoButton>
      </DemoChoices>

      {choice && (
        <DemoResult title="デフォルトを変えるだけで、行動は大きく変わる">
          <p style={{ margin: "0 0 8px" }}>
            この案内は「オプトイン方式」（自分で手続きしないと加入しない）です。こうした企業の加入率は、実際の調査ではおよそ40%程度にとどまります。
          </p>
          <DemoHint>
            ところが「オプトアウト方式」（自動的に加入していて、やめたい人だけ手続きする）に変えるだけで、加入率は90%以上に跳ね上がることが分かっています。制度の中身も強制も何も変えていないのに、「デフォルト」を変えるだけで行動が大きく変わる——これがナッジです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "continue" | "stop";

export function Demo() {
  const [round1, setRound1] = useState<Choice | null>(null);
  const [round2, setRound2] = useState<Choice | null>(null);

  return (
    <DemoShell accentVar="--accent-sunk-cost">
      <DemoPrompt>
        【1回目】新規事業にすでに30万円投資しました。あと100万円投資すれば、成功確率は50%、成功すれば250万円のリターンです。追加投資しますか？
      </DemoPrompt>
      <DemoChoices>
        <DemoButton selected={round1 === "continue"} onClick={() => setRound1("continue")}>
          追加投資して続ける
        </DemoButton>
        <DemoButton selected={round1 === "stop"} onClick={() => setRound1("stop")}>
          ここで撤退する
        </DemoButton>
      </DemoChoices>

      {round1 && (
        <>
          <DemoPrompt>
            【2回目】別の新規事業に、すでに300万円投資しました。あと100万円投資すれば、成功確率は50%、成功すれば250万円のリターンです（条件は1回目とまったく同じです）。追加投資しますか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton selected={round2 === "continue"} onClick={() => setRound2("continue")}>
              追加投資して続ける
            </DemoButton>
            <DemoButton selected={round2 === "stop"} onClick={() => setRound2("stop")}>
              ここで撤退する
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {round1 && round2 && (
        <DemoResult title="2つの場面を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            すでに30万円投資：{round1 === "continue" ? "続ける" : "撤退する"} ／ すでに300万円投資：
            {round2 === "continue" ? "続ける" : "撤退する"}
          </p>
          {round1 !== round2 ? (
            <DemoHint>
              追加で必要な金額も、成功確率も、リターンもまったく同じなのに、判断が変わりましたね。すでに投じた金額（サンクコスト）が大きいほど「今さらやめられない」と感じてしまうのが、このバイアスの典型的な現れ方です。
            </DemoHint>
          ) : (
            <DemoHint>
              2回とも同じ判断でしたね。将来の条件だけで判断できていれば、それは合理的な選択です。多くの人はすでに投じた金額が大きいほど「続ける」を選びやすくなります。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

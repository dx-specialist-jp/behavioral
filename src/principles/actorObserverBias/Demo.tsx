import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const REASONS = [
  { id: "careless", label: "そそっかしい性格だから", type: "character" as const },
  { id: "skill", label: "そもそも確認能力が低いから", type: "character" as const },
  { id: "busy", label: "他の仕事に追われて余裕がなかったから", type: "situation" as const },
  { id: "unclear", label: "指示や情報が曖昧で確認しづらかったから", type: "situation" as const },
];

type Stage = "colleague" | "self" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("colleague");
  const [colleagueReason, setColleagueReason] = useState<string | null>(null);
  const [selfReason, setSelfReason] = useState<string | null>(null);

  const colleagueType = REASONS.find((r) => r.id === colleagueReason)?.type;
  const selfType = REASONS.find((r) => r.id === selfReason)?.type;

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "colleague" && (
        <>
          <DemoPrompt>
            同僚の田中さんが、取引先に提出する資料の数字を間違えたまま送ってしまいました。なぜこうなったと思いますか？もっとも納得できる理由を1つ選んでください。
          </DemoPrompt>
          <DemoChoices>
            {REASONS.map((r) => (
              <DemoButton
                key={r.id}
                onClick={() => {
                  setColleagueReason(r.id);
                  setStage("self");
                }}
              >
                {r.label}
              </DemoButton>
            ))}
          </DemoChoices>
        </>
      )}

      {stage === "self" && (
        <>
          <DemoPrompt>
            では場面を変えます。先週、あなた自身が取引先に提出する資料の<strong>まったく同じ間違い</strong>（数字の誤り）をしてしまいました。なぜこうなったと思いますか？
          </DemoPrompt>
          <DemoChoices>
            {REASONS.map((r) => (
              <DemoButton
                key={r.id}
                onClick={() => {
                  setSelfReason(r.id);
                  setStage("done");
                }}
              >
                {r.label}
              </DemoButton>
            ))}
          </DemoChoices>
        </>
      )}

      {stage === "done" && (
        <DemoResult title="2つの回答を並べてみると">
          <p style={{ margin: "0 0 8px" }}>
            同僚の間違い → 「{REASONS.find((r) => r.id === colleagueReason)?.label}」
            <br />
            自分の（同じ）間違い → 「{REASONS.find((r) => r.id === selfReason)?.label}」
          </p>
          {colleagueType === "character" && selfType === "situation" ? (
            <DemoHint>
              まったく同じ間違いなのに、同僚には性格・能力の理由を、自分には状況の理由を選びましたね。これがまさに行為者-観察者バイアスです。自分の失敗は「事情があった」と説明できる情報を豊富に持っているのに対し、他人の失敗は結果しか見えないため、性格のせいだと判断しやすくなるのです。
            </DemoHint>
          ) : colleagueType === selfType ? (
            <DemoHint>
              今回は同僚にも自分にも同じタイプの理由を選びましたね。一貫した見方は立派ですが、多くの人はこの場面で、自分の失敗にだけ「状況のせい」という理由を選ぶ傾向があることが分かっています。
            </DemoHint>
          ) : (
            <DemoHint>
              興味深い組み合わせですね。一般的には、他人の失敗には性格・能力を、自分の失敗には状況・事情を理由に挙げる人が多く、これは行為者-観察者バイアスと呼ばれています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

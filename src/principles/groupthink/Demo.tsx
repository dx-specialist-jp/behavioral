import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const RISKS = [
  { id: "budget", label: "予算の見積もりが甘すぎる" },
  { id: "schedule", label: "納期が現実的でない" },
  { id: "test", label: "安全テストの期間が足りない" },
  { id: "market", label: "競合調査がほぼされていない" },
];

type Stage = "private" | "reveal" | "voice" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<Stage>("private");
  const [privatePicks, setPrivatePicks] = useState<string[]>([]);
  const [voicedPicks, setVoicedPicks] = useState<string[]>([]);

  const toggle = (list: string[], setList: (v: string[]) => void, id: string) => {
    setList(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "private" && (
        <>
          <DemoPrompt>
            あなたはある新製品の発売計画会議に参加しています。まず、資料を一人で読んで「これは本当にリスクだ」と個人的に思う項目をすべて選んでください（この時点では誰にも見せません）。
          </DemoPrompt>
          <DemoChoices>
            {RISKS.map((r) => (
              <DemoButton
                key={r.id}
                selected={privatePicks.includes(r.id)}
                onClick={() => toggle(privatePicks, setPrivatePicks, r.id)}
              >
                {r.label}
              </DemoButton>
            ))}
          </DemoChoices>
          <DemoButton variant="primary" onClick={() => setStage("reveal")}>
            選び終わった
          </DemoButton>
        </>
      )}

      {stage === "reveal" && (
        <>
          <DemoPrompt>
            会議室を見回すと、他の5人のメンバー全員が資料にうなずき、「特に問題なさそうですね」「このまま進めましょう」と口々に言っています。誰も懸念を口にしていません。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={() => setStage("voice")}>
            この空気の中で、自分の番が回ってきた
          </DemoButton>
        </>
      )}

      {stage === "voice" && (
        <>
          <DemoPrompt>
            さて、あなたの発言の番です。先ほど個人的にリスクだと思った項目のうち、実際にこの場で「懸念点として」声に出すものを選んでください。
          </DemoPrompt>
          <DemoChoices>
            {RISKS.map((r) => (
              <DemoButton
                key={r.id}
                selected={voicedPicks.includes(r.id)}
                onClick={() => toggle(voicedPicks, setVoicedPicks, r.id)}
              >
                {r.label}
              </DemoButton>
            ))}
          </DemoChoices>
          <DemoButton variant="primary" onClick={() => setStage("done")}>
            発言を確定する
          </DemoButton>
        </>
      )}

      {stage === "done" && (
        <DemoResult title="個人的な懸念と、実際に声に出した懸念">
          <p style={{ margin: "0 0 8px" }}>
            個人的にリスクだと思った項目：{privatePicks.length}件 / 実際に声に出した項目：{voicedPicks.length}件
          </p>
          {voicedPicks.length < privatePicks.length ? (
            <DemoHint>
              思っていたことより、声に出したことの方が少なくなりましたね。全員が賛成しているように見える場の空気に押されて、疑問を飲み込んでしまった——これがまさに集団思考です。あなたが黙った懸念は、あなた以外の誰かも同じように黙って抱えている可能性があります。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は思ったことをそのまま声に出せましたね。ただ実際の会議室では、全員が賛成ムードのときに一人だけ異論を言うのは想像以上に勇気がいります。多くの人がこの場面で懸念を飲み込んでしまうことが分かっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

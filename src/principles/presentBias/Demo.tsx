import { useState } from "react";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

type Choice = "sooner" | "later";

export function Demo() {
  const [near, setNear] = useState<Choice | null>(null);
  const [far, setFar] = useState<Choice | null>(null);

  return (
    <DemoShell accentVar="--accent-present-bias">
      <DemoPrompt>【質問1】どちらを選びますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={near === "sooner"} onClick={() => setNear("sooner")}>
          今日、1万円もらう
        </DemoButton>
        <DemoButton selected={near === "later"} onClick={() => setNear("later")}>
          1週間後、1万1千円もらう
        </DemoButton>
      </DemoChoices>

      {near && (
        <>
          <DemoPrompt>【質問2】どちらを選びますか？</DemoPrompt>
          <DemoChoices>
            <DemoButton selected={far === "sooner"} onClick={() => setFar("sooner")}>
              30日後、1万円もらう
            </DemoButton>
            <DemoButton selected={far === "later"} onClick={() => setFar("later")}>
              37日後、1万1千円もらう
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {near && far && (
        <DemoResult title="2つの質問を比べてみると">
          {near === "sooner" && far === "later" ? (
            <DemoHint>
              質問1では「今すぐ」を、質問2では「7日多く待つ」を選びましたね。どちらも待つ期間の差は7日間で同じなのに、それが「今日から」か「30日後から」かで選択が変わる——これが現在バイアスです。「今」が関わると、私たちは特別に待てなくなります。
            </DemoHint>
          ) : (
            <DemoHint>
              2つの質問で一貫した選び方でしたね。多くの人は質問1で「今すぐ」を、質問2では「待つ」を選び、選好が入れ替わってしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

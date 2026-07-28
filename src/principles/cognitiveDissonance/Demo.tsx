import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const TOTAL_CLICKS = 12;

export function Demo({ accentHue }: DemoProps) {
  const [reward] = useState(() => (Math.random() < 0.5 ? 1 : 300));
  const [stage, setStage] = useState<"task" | "rateBoredom" | "write" | "rateEnjoy" | "result">("task");
  const [clicks, setClicks] = useState(0);
  const [boredom, setBoredom] = useState(5);
  const [message, setMessage] = useState("");
  const [enjoyment, setEnjoyment] = useState(5);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= TOTAL_CLICKS) setStage("rateBoredom");
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "task" && (
        <>
          <DemoPrompt>
            下の丸いボタンを{TOTAL_CLICKS}回クリックしてください。ただそれだけの、単調な作業です。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={handleClick}>
            クリック（{clicks} / {TOTAL_CLICKS}）
          </DemoButton>
        </>
      )}

      {stage === "rateBoredom" && (
        <>
          <DemoPrompt>お疲れさまでした。この作業は、正直どれくらい退屈でしたか？</DemoPrompt>
          <DemoSlider
            label="0＝全く退屈でなかった／10＝非常に退屈だった"
            value={boredom}
            min={0}
            max={10}
            onChange={setBoredom}
          />
          <DemoButton variant="primary" onClick={() => setStage("write")}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === "write" && (
        <>
          <DemoPrompt>
            この作業に対して、あなたには報酬<strong>{reward}円</strong>
            が支払われることになりました。お礼として、次にこの作業をする人へ向けて「この作業は面白かった」と伝える一言を書いてください。
          </DemoPrompt>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="例：思ったより楽しめる作業でした、など"
            rows={3}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid var(--color-border-strong)",
              fontFamily: "inherit",
              fontSize: "0.95rem",
              marginBottom: "12px",
            }}
          />
          <DemoButton variant="primary" onClick={() => setStage("rateEnjoy")} disabled={message.trim().length < 6}>
            書いて次へ
          </DemoButton>
        </>
      )}

      {stage === "rateEnjoy" && (
        <>
          <DemoPrompt>今度は本音で答えてください。この作業は実際のところ、どれくらい楽しかったと思いますか？</DemoPrompt>
          <DemoSlider
            label="0＝全く楽しくなかった／10＝とても楽しかった"
            value={enjoyment}
            min={0}
            max={10}
            onChange={setEnjoyment}
          />
          <DemoButton variant="primary" onClick={() => setStage("result")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === "result" && (
        <DemoResult title="あなたの報酬と評価の変化">
          <p style={{ margin: "0 0 8px" }}>
            今回の報酬設定：<strong>{reward}円</strong>（低額・高額はランダムに割り当てられました）
          </p>
          <p style={{ margin: "0 0 8px" }}>
            作業直後の退屈度：{boredom} / 10 ／ 「面白かった」と書いた後の本音の楽しさ評価：{enjoyment} / 10
          </p>
          {reward === 1 ? (
            <DemoHint>
              フェスティンガーとカールスミスの1959年の実験では、退屈な作業を「面白かった」と嘘をつくよう頼まれた参加者のうち、報酬が1ドルと少なかった人ほど、後で本当に「面白かった」と思うようになりました。報酬が少ないと「お金のためについた嘘」と割り切れず、代わりに自分の気持ちの方を変えて矛盾を解消したのです。このデモでは同じ発想を少額の報酬（1円）に置き換えて再現しています。今回のあなたの報酬は{reward}円でした——本音の楽しさ評価は{enjoyment} / 10。
            </DemoHint>
          ) : (
            <DemoHint>
              フェスティンガーの実験では、報酬が高い（20ドル）参加者は「お金のために嘘をついた」と納得できるため、態度をあまり変えずに済みました。このデモでは同じ発想を高額の報酬（300円）に置き換えて再現しています。今回のあなたの報酬は{reward}円でした——本音の楽しさ評価は{enjoyment} / 10。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

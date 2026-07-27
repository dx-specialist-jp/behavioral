import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [blame, setBlame] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        エリさんは、何年も真面目に働いてきた会社員です。ある日、会社の業績悪化を理由に、これといった正当な説明もないまま突然解雇されてしまいました。エリさん自身に落ち度は見当たりません。しかも、エリさんはこの先しばらく次の仕事が見つからず、苦しい生活が続くことが分かっています。
      </DemoPrompt>
      {!submitted ? (
        <>
          <DemoSlider
            label="「エリさん自身にも何か原因があったのでは」とどれくらい思いますか"
            value={blame}
            min={0}
            max={10}
            onChange={setBlame}
          />
          <DemoButton variant="primary" onClick={() => setSubmitted(true)}>
            回答する
          </DemoButton>
        </>
      ) : (
        <DemoResult title="心理学者メルヴィン・ラーナーの実験（1966年）">
          <p style={{ margin: "0 0 8px" }}>
            あなたの回答：{blame}/10
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem" }}>
              <span style={{ width: "150px", flexShrink: 0 }}>苦痛が今後も続くと聞いた観察者</span>
              <div style={{ flex: 1, height: "10px", borderRadius: "5px", background: "var(--color-border)" }}>
                <div style={{ width: "78%", height: "100%", borderRadius: "5px", background: "var(--accent)" }} />
              </div>
              <span>被害者を低評価</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem" }}>
              <span style={{ width: "150px", flexShrink: 0 }}>苦痛がすぐ終わる/補償されると聞いた観察者</span>
              <div style={{ flex: 1, height: "10px", borderRadius: "5px", background: "var(--color-border)" }}>
                <div style={{ width: "25%", height: "100%", borderRadius: "5px", background: "var(--accent)" }} />
              </div>
              <span>低評価は少ない</span>
            </div>
          </div>
          <DemoHint>
            ラーナーの実験では、何もしていない被害者が苦しみ続ける様子を、助けることもできずただ見ているだけの観察者ほど、その被害者の人柄を低く評価する傾向が確認されました。「世界は基本的に公正だ」と信じたい気持ちが強いほど、理不尽な被害者を見たときに「何か原因があったはず」と考えることで、その信念を守ろうとしてしまうのです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const BUDGET = 10000;

export function Demo({ accentHue }: DemoProps) {
  const [allocation, setAllocation] = useState(50);
  const [confirmed, setConfirmed] = useState(false);

  const toGirl = Math.round((BUDGET * allocation) / 100);
  const toFund = BUDGET - toGirl;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        あなたは1万円を寄付します。次の2つの支援先に、自由な割合で配分してください。
      </DemoPrompt>
      <DemoPrompt>
        A：マリアちゃん（7歳）。故郷の干ばつで食料が手に入らず、緊急の栄養支援が必要です。彼女の写真と名前入りのプロフィールが添えられています。
      </DemoPrompt>
      <DemoPrompt>
        B：ある地域で栄養不足に苦しむ推定300万人の子どもたちを支援する基金。一人当たりの支援コストはAとほぼ同じです。
      </DemoPrompt>
      <DemoSlider
        label="マリアちゃんへの配分"
        value={allocation}
        min={0}
        max={100}
        step={5}
        displayValue={`${allocation}% (${toGirl.toLocaleString()}円)`}
        onChange={setAllocation}
      />
      <p style={{ margin: "0 0 12px", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
        基金Bへの配分：{100 - allocation}%（{toFund.toLocaleString()}円）
      </p>
      {!confirmed && (
        <DemoButton variant="primary" onClick={() => setConfirmed(true)}>
          この配分で決定する
        </DemoButton>
      )}

      {confirmed && (
        <DemoResult title="あなたの配分を振り返ると">
          <p style={{ margin: "0 0 8px" }}>
            マリアちゃん1人に{toGirl.toLocaleString()}円、300万人の基金には{toFund.toLocaleString()}
            円を配分しました。同じ金額でも、基金Bに回したお金の方が、統計的にはずっと多くの子どもを支援できます。
          </p>
          {allocation > 50 ? (
            <DemoHint>
              名前と顔が分かるマリアちゃんの方に、多くの割合を配分しましたね。実際の研究でも、名前や写真がある一人の犠牲者への寄付は、同等かそれ以上に深刻な統計的な大勢への寄付より多く集まることが繰り返し確認されています。「一人の死は悲劇だが、百万人の死は統計に過ぎない」というわけです。
            </DemoHint>
          ) : (
            <DemoHint>
              統計的な基金Bに多く配分しましたね。多くの人はここでマリアちゃんのような具体的な一人に多く配分してしまい、身元のわかる犠牲者効果が表れます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

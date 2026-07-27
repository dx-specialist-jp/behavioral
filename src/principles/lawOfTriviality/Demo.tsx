import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [reactor, setReactor] = useState(20);
  const [contract, setContract] = useState(20);
  const [coffee, setCoffee] = useState(20);
  const [submitted, setSubmitted] = useState(false);

  const total = reactor + contract + coffee;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        あなたは経営会議の議長です。60分の会議で、次の3つの議題にそれぞれ何分使うか配分してください。
      </DemoPrompt>
      {!submitted ? (
        <>
          <DemoSlider
            label="320億円規模の新工場建設の承認（複雑・専門的）"
            value={reactor}
            min={0}
            max={60}
            displayValue={`${reactor}分`}
            onChange={setReactor}
          />
          <DemoSlider
            label="清掃業者との契約更新（そこそこ簡単）"
            value={contract}
            min={0}
            max={60}
            displayValue={`${contract}分`}
            onChange={setContract}
          />
          <DemoSlider
            label="休憩室に置くコーヒーメーカーの機種選び（誰でも意見が言える）"
            value={coffee}
            min={0}
            max={60}
            displayValue={`${coffee}分`}
            onChange={setCoffee}
          />
          <p style={{ margin: "0 0 8px", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>合計：{total}分</p>
          <DemoButton variant="primary" onClick={() => setSubmitted(true)}>
            この配分で会議を進める
          </DemoButton>
        </>
      ) : (
        <DemoResult title="あなたの配分">
          <p style={{ margin: "0 0 8px" }}>
            新工場建設：{reactor}分 ／ 契約更新：{contract}分 ／ コーヒーメーカー選び：{coffee}分
          </p>
          {coffee >= reactor ? (
            <DemoHint>
              320億円規模の議題より、コーヒーメーカー選びに同じかそれ以上の時間を割り当てましたね。これはパーキンソンの凡俗法則（些末性の法則）としてよく知られる現象そのものです。歴史学者C・ノースコート・パーキンソンが紹介した架空の委員会は、巨額の原子力発電所の予算を数分で承認する一方、駐輪場の屋根については誰もが意見を持てるからこそ長時間議論しました。複雑な議題ほど「自分には判断できない」と発言を控え、簡単な議題ほど全員が発言してしまうため、議論時間は重要度と逆比例しがちです。
            </DemoHint>
          ) : (
            <DemoHint>
              重要度に応じてバランス良く時間を配分できましたね。実際の会議では、多くの人が複雑で重要な議題ほど早く承認し、誰でも意見が言える些細な議題に不釣り合いなほど時間をかけてしまう「些末性の法則」に陥りがちです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

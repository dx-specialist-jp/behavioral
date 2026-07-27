import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [guess, setGuess] = useState(50);
  const [submitted, setSubmitted] = useState(false);

  const actual = 2.5;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        あなたは「たたく人」役です。誰もが知っている曲（『きらきら星』など）を選び、指で机をトントンと叩くリズムだけで、聞く人にその曲名を伝えてください——歌ったり口ずさんだりはできません。あなたの頭の中には、もちろんメロディーがはっきり流れています。
      </DemoPrompt>
      {!submitted ? (
        <>
          <DemoSlider
            label="聞く人が曲名を正しく当てられる確率"
            value={guess}
            min={0}
            max={100}
            displayValue={`${guess}%`}
            onChange={setGuess}
          />
          <DemoButton variant="primary" onClick={() => setSubmitted(true)}>
            予想を決定する
          </DemoButton>
        </>
      ) : (
        <DemoResult title="実際の正答率は約2.5%">
          <p style={{ margin: "0 0 8px" }}>
            あなたの予想は{guess}%でした。スタンフォード大学のエリザベス・ニュートンが1990年に行った実験では、「たたく人」たちの予想の平均は約50%でしたが、実際に聞く人が正しく当てられたのは120回中わずか3回、約2.5%にすぎませんでした。
          </p>
          {guess - actual >= 15 ? (
            <DemoHint>
              あなたの予想も、実際の正答率よりかなり高くなりましたね。頭の中でメロディーがはっきり流れているせいで、それがタッピングの音だけでどれほど伝わりにくいかを想像できなくなる——これが知識の呪縛です。一度知ってしまった知識は、知らなかった頃の感覚を思い出せなくしてしまいます。
            </DemoHint>
          ) : (
            <DemoHint>
              実験の平均予想（約50%）よりは控えめな予想でしたね。それでも多くの「たたく人」は、自分には自明に聞こえるリズムが相手にはほとんど伝わらないという事実を、大きく過小評価してしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

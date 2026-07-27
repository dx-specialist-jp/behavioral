import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [goodPercent, setGoodPercent] = useState(50);
  const [badPercent, setBadPercent] = useState(50);
  const [revealed, setRevealed] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        あなたは日頃から「ボランティアや寄付など、社会のためになる行動」を心がけているとします。同じように行動している人は、世の中にどれくらいの割合でいると思いますか？
      </DemoPrompt>
      <DemoSlider
        label="同じように行動している人の割合"
        value={goodPercent}
        min={0}
        max={100}
        displayValue={`${goodPercent}%`}
        onChange={setGoodPercent}
      />

      <DemoPrompt>
        次に、あなたには「スマホをつい長時間見てしまう」という自覚があるとします。同じような癖を持つ人は、世の中にどれくらいの割合でいると思いますか？
      </DemoPrompt>
      <DemoSlider
        label="同じような癖を持つ人の割合"
        value={badPercent}
        min={0}
        max={100}
        displayValue={`${badPercent}%`}
        onChange={setBadPercent}
      />

      {!revealed && (
        <DemoButton variant="primary" onClick={() => setRevealed(true)}>
          見積もりを確定する
        </DemoButton>
      )}

      {revealed && (
        <DemoResult title="あなたの見積もり">
          <p style={{ margin: "0 0 8px" }}>
            良い行動をしている人の割合を{goodPercent}%、悪い癖を持つ人の割合を{badPercent}%と見積もりましたね。
          </p>
          <DemoHint>
            多くの人は、望ましい行動をしている自分について「同じことをしている人は少ない（自分は特別だ）」と低く見積もり、望ましくない癖については「みんな同じようなものだ」と高く見積もる傾向があります。これが偽の独自性バイアスです。あなたの数字も、この傾向に当てはまっているかもしれません。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

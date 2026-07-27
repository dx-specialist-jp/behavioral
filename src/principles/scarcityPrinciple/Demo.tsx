import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [step, setStep] = useState<"plain" | "scarce" | "done">("plain");
  const [desirePlain, setDesirePlain] = useState(5);
  const [desireScarce, setDesireScarce] = useState(5);
  const [stock, setStock] = useState(7);
  const [seconds, setSeconds] = useState(180);

  useEffect(() => {
    if (step !== "scarce") return;
    const timer = window.setInterval(() => {
      setStock((s) => (s > 1 ? s - 1 : 1));
      setSeconds((s) => (s > 5 ? s - 7 : s));
    }, 900);
    return () => window.clearInterval(timer);
  }, [step]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <DemoShell accentHue={accentHue}>
      {step === "plain" && (
        <>
          <DemoPrompt>
            旅行かばん「トラベラーズ・ライト」。価格は12,000円。特に在庫や期限の情報はありません。
          </DemoPrompt>
          <DemoSlider
            label="今すぐ欲しい度合い"
            value={desirePlain}
            min={0}
            max={10}
            displayValue={`${desirePlain} / 10`}
            onChange={setDesirePlain}
          />
          <DemoButton variant="primary" onClick={() => setStep("scarce")}>
            次へ
          </DemoButton>
        </>
      )}

      {step === "scarce" && (
        <>
          <DemoPrompt>
            同じかばんです。ページを開き直すと、こんな表示が出ています（数字はリアルタイムで減っていきます）。
          </DemoPrompt>
          <p style={{ fontWeight: 700, fontSize: "1.1em", margin: "0 0 10px" }}>
            残り在庫: {stock}個　／　セール終了まで: {mm}:{ss}
          </p>
          <DemoSlider
            label="今すぐ欲しい度合い"
            value={desireScarce}
            min={0}
            max={10}
            displayValue={`${desireScarce} / 10`}
            onChange={setDesireScarce}
          />
          <DemoButton variant="primary" onClick={() => setStep("done")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {step === "done" && (
        <DemoResult title="2回の評価を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            情報なしのとき: {desirePlain} / 10　→　残り在庫・カウントダウンを見たとき: {desireScarce} / 10
          </p>
          {desireScarce > desirePlain ? (
            <DemoHint>
              かばんの中身は何も変わっていないのに、「残りわずか」「あと〇分」という表示を見ただけで欲しさが上がりましたね。これが希少性の原理です。手に入りにくいという情報は、そのモノ自体の品質とは関係ありません。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は数値が変わりませんでしたね。ただ多くの人は、在庫数やカウントダウンのような希少性の演出を見ると、中身が同じでも欲求が跳ね上がることが実験で繰り返し確認されています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

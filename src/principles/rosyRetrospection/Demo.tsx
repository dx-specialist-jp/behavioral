import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const MOMENTS = [
  "出発当日、飛行機が3時間も遅延し、空港で長時間待たされた。",
  "ホテルに到着すると、部屋は写真より狭く、Wi-Fiもうまく繋がらなかった。",
  "2日目は朝から雨で、予定していた観光ができずホテルの部屋で過ごした。",
  "3日目、天気が回復し、夕方に丘の上からとても美しい夕日を眺めることができた。",
  "最終日、空港へ向かう途中に立ち寄った小さな食堂の料理が、旅の中で一番美味しかった。",
];

type Phase = "trip" | "gap" | "retro" | "result";

export function Demo({ accentHue }: DemoProps) {
  const [phase, setPhase] = useState<Phase>("trip");
  const [step, setStep] = useState(0);
  const [ratings, setRatings] = useState<number[]>([]);
  const [current, setCurrent] = useState(5);
  const [retro, setRetro] = useState(5);

  const nextStep = () => {
    const updated = [...ratings, current];
    setRatings(updated);
    setCurrent(5);
    if (step + 1 < MOMENTS.length) {
      setStep((s) => s + 1);
    } else {
      setPhase("gap");
    }
  };

  const average = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0;

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "trip" && (
        <>
          <DemoPrompt>
            ある5日間の旅行を追体験してもらいます。1日ごとの出来事を読んで、「その瞬間」どれくらい満足していたかを評価してください。（{step + 1}
            /{MOMENTS.length}日目）
          </DemoPrompt>
          <DemoPrompt>{MOMENTS[step]}</DemoPrompt>
          <DemoSlider label="その瞬間の満足度" value={current} min={0} max={10} onChange={setCurrent} />
          <DemoButton variant="primary" onClick={nextStep}>
            {step + 1 < MOMENTS.length ? "次の日へ" : "旅行を終える"}
          </DemoButton>
        </>
      )}

      {phase === "gap" && (
        <>
          <DemoPrompt>——それから1ヶ月が経ちました。</DemoPrompt>
          <DemoButton variant="primary" onClick={() => setPhase("retro")}>
            旅行を振り返ってみる
          </DemoButton>
        </>
      )}

      {phase === "retro" && (
        <>
          <DemoPrompt>今、あらためて振り返ってみて、あの5日間の旅行全体にどれくらい満足していますか？</DemoPrompt>
          <DemoSlider label="今振り返っての満足度" value={retro} min={0} max={10} onChange={setRetro} />
          <DemoButton variant="primary" onClick={() => setPhase("result")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {phase === "result" && (
        <DemoResult title="「その瞬間」の記録と「今」の記憶を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            旅行中に記録した満足度の平均：{average.toFixed(1)} ／ 1ヶ月後に振り返った満足度：{retro}
          </p>
          {retro > average ? (
            <DemoHint>
              旅行中は遅延や狭い部屋、雨など不満な瞬間も多く記録していたのに、1ヶ月経った今の方が満足度が高くなりましたね。時間が経つと細かい不満は記憶から薄れ、夕日や食事などの良い場面だけが残りやすくなります。これが美化された過去への郷愁（ロジー・レトロスペクション）です。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は当時の記録に近い評価でしたね。ただ多くの人は、時間が経つほど不満だった瞬間を忘れ、良かった瞬間だけを覚えていることで、当時よりも高く過去を評価するようになります。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

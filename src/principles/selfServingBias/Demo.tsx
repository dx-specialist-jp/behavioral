import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const SCENARIOS = [
  { success: "難しい資格試験に合格した", failure: "資格試験に不合格だった" },
  { success: "今月の営業目標を大きく達成した", failure: "今月の営業目標に届かなかった" },
  { success: "マラソンで自己ベストを更新した", failure: "マラソンで思うようなタイムが出なかった" },
];

interface Round {
  success: number;
  failure: number;
}

export function Demo({ accentHue }: DemoProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"success" | "failure">("success");
  const [value, setValue] = useState(50);
  const [rounds, setRounds] = useState<Round[]>([]);

  const done = index >= SCENARIOS.length;
  const scenario = !done ? SCENARIOS[index] : null;

  const handleNext = () => {
    if (phase === "success") {
      setRounds((prev) => [...prev, { success: value, failure: 0 }]);
      setPhase("failure");
      setValue(50);
    } else {
      setRounds((prev) =>
        prev.map((r, i) => (i === prev.length - 1 ? { ...r, failure: value } : r))
      );
      setPhase("success");
      setValue(50);
      setIndex((i) => i + 1);
    }
  };

  const avgSuccess = rounds.length
    ? Math.round(rounds.reduce((s, r) => s + r.success, 0) / rounds.length)
    : 0;
  const avgFailure = rounds.length
    ? Math.round(rounds.reduce((s, r) => s + r.failure, 0) / rounds.length)
    : 0;

  return (
    <DemoShell accentHue={accentHue}>
      {!done && scenario && (
        <>
          <DemoPrompt>
            もしあなたが「{phase === "success" ? scenario.success : scenario.failure}」としたら——
          </DemoPrompt>
          <DemoPrompt>この結果は、どれくらい「自分自身の実力や努力」によるものだと思いますか？</DemoPrompt>
          <DemoSlider
            label="0＝すべて運や状況のせい／100＝すべて自分の実力"
            value={value}
            min={0}
            max={100}
            displayValue={`${value}`}
            onChange={setValue}
          />
          <DemoButton variant="primary" onClick={handleNext}>
            回答する
          </DemoButton>
        </>
      )}

      {done && (
        <DemoResult title="成功のときと失敗のとき、評価は違いましたか？">
          <p style={{ margin: "0 0 8px" }}>
            成功したケースでの平均自己評価：<strong>{avgSuccess}</strong> ／ 失敗したケースでの平均自己評価：
            <strong>{avgFailure}</strong>
          </p>
          {avgSuccess - avgFailure >= 10 ? (
            <DemoHint>
              成功は自分の実力、失敗は運や状況のせいと評価する傾向が出ましたね（差は{avgSuccess - avgFailure}
              ポイント）。これは自己奉仕バイアスと呼ばれる典型的なパターンです。多くの人が、成功は内的な要因に、失敗は外的な要因に結びつけて考えることが研究で示されています。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は成功と失敗であまり評価に差が出ませんでしたね。素晴らしいバランス感覚です。多くの人はここで成功時の自己評価の方が大きく高くなり、自己奉仕バイアスが表れます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

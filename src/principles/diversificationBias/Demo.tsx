import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const SNACKS = [
  { id: "choco", label: "チョコレート" },
  { id: "potato", label: "ポテトチップス" },
  { id: "cookie", label: "クッキー" },
  { id: "gummy", label: "グミ" },
  { id: "senbei", label: "せんべい" },
  { id: "nuts", label: "ナッツ" },
] as const;

type SnackId = (typeof SNACKS)[number]["id"];

const DAYS: { key: "day1" | "day2" | "day3"; label: string }[] = [
  { key: "day1", label: "1日目" },
  { key: "day2", label: "2日目" },
  { key: "day3", label: "3日目" },
];

export function Demo({ accentHue }: DemoProps) {
  const [picks, setPicks] = useState<Record<string, SnackId | null>>({ day1: null, day2: null, day3: null });
  const [revealed, setRevealed] = useState(false);

  const allPicked = DAYS.every((d) => picks[d.key]);
  const distinctCount = new Set(DAYS.map((d) => picks[d.key]).filter(Boolean)).size;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        これから3日間、毎日1つずつおやつを楽しみます。今すぐ3日分をまとめて選んでください（同じ種類を選んでも構いません）。
      </DemoPrompt>
      {DAYS.map((d) => (
        <div key={d.key}>
          <DemoPrompt>{d.label}のおやつ</DemoPrompt>
          <DemoChoices>
            {SNACKS.map((s) => (
              <DemoButton
                key={s.id}
                selected={picks[d.key] === s.id}
                onClick={() => setPicks((prev) => ({ ...prev, [d.key]: s.id }))}
              >
                {s.label}
              </DemoButton>
            ))}
          </DemoChoices>
        </div>
      ))}

      {allPicked && !revealed && (
        <DemoButton variant="primary" onClick={() => setRevealed(true)}>
          この組み合わせで確定する
        </DemoButton>
      )}

      {revealed && (
        <DemoResult title="選んだ種類の数を見てみると">
          <p style={{ margin: "0 0 8px" }}>あなたが選んだ3日分は、{distinctCount}種類の異なるおやつでした。</p>
          {distinctCount === 3 ? (
            <DemoHint>
              3日とも違う種類を選びましたね。実際のシモンソンの実験でも、まとめて選ぶ条件では約64%の人が3日とも異なる種類を選びました。一方、毎日その場で選ぶ条件では、同じお気に入りを繰り返し選ぶ人が大半で、3日とも異なる種類を選んだ人はわずか9%程度でした。「まとめて選ぶ自分」は、実際に毎日食べたくなる自分の好みを正しく予測できていないのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は同じ種類を繰り返し選びましたね。実はこれは少数派です。まとめて選ぶ場面では、多くの人が「将来も飽きないように」と必要以上に多様な種類を選んでしまう分散化バイアスに陥ります。あなたは実際に食べたくなる量を、うまく想像できていたのかもしれません。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

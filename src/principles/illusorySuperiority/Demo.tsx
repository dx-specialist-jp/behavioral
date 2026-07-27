import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const TRAITS = ["運転のうまさ", "誠実さ", "ユーモアのセンス", "仕事での生産性"];

export function Demo({ accentHue }: DemoProps) {
  const [index, setIndex] = useState(0);
  const [rank, setRank] = useState(50);
  const [ranks, setRanks] = useState<number[]>([]);

  const done = index >= TRAITS.length;

  const handleNext = () => {
    setRanks((prev) => [...prev, rank]);
    setRank(50);
    setIndex((i) => i + 1);
  };

  const aboveAverageCount = ranks.filter((r) => r < 50).length;

  return (
    <DemoShell accentHue={accentHue}>
      {!done && (
        <>
          <DemoPrompt>
            あなたと同じくらいの立場の人100人が並んでいるとします。「{TRAITS[index]}」という点で、あなたは上から何位くらいだと思いますか？（1位が最も優れている）
          </DemoPrompt>
          <DemoSlider
            label="あなたの順位（100人中）"
            value={rank}
            min={1}
            max={100}
            displayValue={`${rank}位`}
            onChange={setRank}
          />
          <DemoButton variant="primary" onClick={handleNext}>
            次へ
          </DemoButton>
        </>
      )}

      {done && (
        <DemoResult title="あなたの回答">
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {TRAITS.map((t, i) => (
              <li key={t}>
                {t}：{ranks[i]}位 {ranks[i] < 50 ? "（平均より上と回答）" : ""}
              </li>
            ))}
          </ul>
          <DemoHint>
            {TRAITS.length}項目中{aboveAverageCount}項目で「平均（50位）より上」と答えましたね。理論上、100人中「上位50位より上」に入れる人はちょうど半分のはずですが、実際の調査ではドライバーの8割以上が「自分の運転技術は平均より上」と回答した結果が有名です（心理学者オラ・スヴェンソンの研究）。全員が平均より上ということは統計的にありえず、これは優越の錯覚（平均以上効果）と呼ばれています。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

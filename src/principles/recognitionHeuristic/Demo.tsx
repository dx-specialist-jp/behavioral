import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

interface Round {
  famous: string;
  famousPop: number;
  obscure: string;
  obscurePop: number;
  famousIsBigger: boolean;
}

const ROUNDS: Round[] = [
  { famous: "大阪市", famousPop: 275, obscure: "八尾市", obscurePop: 26, famousIsBigger: true },
  { famous: "鎌倉市", famousPop: 17, obscure: "川口市", obscurePop: 60, famousIsBigger: false },
  { famous: "別府市", famousPop: 11, obscure: "加古川市", obscurePop: 26, famousIsBigger: false },
  { famous: "横浜市", famousPop: 377, obscure: "藤沢市", obscurePop: 44, famousIsBigger: true },
];

export function Demo({ accentHue }: DemoProps) {
  const [index, setIndex] = useState(0);
  const [picks, setPicks] = useState<("famous" | "obscure")[]>([]);

  const finished = index >= ROUNDS.length;
  const round = !finished ? ROUNDS[index] : null;

  const handlePick = (pick: "famous" | "obscure") => {
    setPicks((prev) => [...prev, pick]);
    setIndex((prev) => prev + 1);
  };

  const famousPicks = picks.filter((p) => p === "famous").length;
  const correctPicks = picks.filter((p, i) => {
    const r = ROUNDS[i];
    return (p === "famous") === r.famousIsBigger;
  }).length;

  return (
    <DemoShell accentHue={accentHue}>
      {round && (
        <>
          <DemoPrompt>
            ラウンド {index + 1} / {ROUNDS.length}：次の2つの市のうち、人口が多いのはどちらだと思いますか？
          </DemoPrompt>
          <DemoChoices>
            <DemoButton onClick={() => handlePick("famous")}>{round.famous}</DemoButton>
            <DemoButton onClick={() => handlePick("obscure")}>{round.obscure}</DemoButton>
          </DemoChoices>
        </>
      )}

      {finished && (
        <DemoResult title="結果発表">
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {ROUNDS.map((r, i) => (
              <li key={i}>
                {r.famous}（約{r.famousPop}万人）と{r.obscure}（約{r.obscurePop}万人）→ あなたの選択：
                {picks[i] === "famous" ? r.famous : r.obscure}
                {(picks[i] === "famous") === r.famousIsBigger ? "（正解）" : "（不正解）"}
              </li>
            ))}
          </ul>
          <p style={{ margin: "0 0 8px" }}>
            聞き覚えのある方（知名度で有名な方）を選んだ回数：{famousPicks}/{ROUNDS.length} ／ 正解数：
            {correctPicks}/{ROUNDS.length}
          </p>
          <DemoHint>
            大阪市や横浜市のように「有名で人口も多い」場合は再認ヒューリスティックがうまく機能しますが、鎌倉市や別府市のように「観光地として有名なだけで人口は少ない」場合には裏切られます。再認の頻度は本来、広告や観光地としての知名度など、知りたい基準（この場合は人口）とは無関係な理由で決まっていることがあるのです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

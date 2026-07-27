import { useState } from "react";
import type { DemoProps } from "../types";
import {
  DemoButton,
  DemoChoices,
  DemoHint,
  DemoPrompt,
  DemoResult,
  DemoShell,
  DemoTally,
} from "../../components/ui/DemoUI";

type Direction = "left" | "center" | "right";
const DIRS: Direction[] = ["left", "center", "right"];
const LABEL: Record<Direction, string> = { left: "左に飛ぶ", center: "中央に留まる", right: "右に飛ぶ" };
const TOTAL_ROUNDS = 6;

interface Round {
  choice: Direction;
  ball: Direction;
  saved: boolean;
}

export function Demo({ accentHue }: DemoProps) {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [lastBall, setLastBall] = useState<Direction | null>(null);

  const play = (choice: Direction) => {
    const ball = DIRS[Math.floor(Math.random() * 3)];
    setLastBall(ball);
    setRounds((prev) => [...prev, { choice, ball, saved: choice === ball }]);
  };

  const reset = () => {
    setRounds([]);
    setLastBall(null);
  };

  const done = rounds.length >= TOTAL_ROUNDS;
  const centerCount = rounds.filter((r) => r.choice === "center").length;
  const sideCount = rounds.length - centerCount;
  const centerSaves = rounds.filter((r) => r.choice === "center" && r.saved).length;
  const sideSaves = rounds.filter((r) => r.choice !== "center" && r.saved).length;

  return (
    <DemoShell accentHue={accentHue}>
      {!done && (
        <>
          <DemoPrompt>
            あなたはゴールキーパーです。相手のキックの方向は左・中央・右にほぼ均等です。PKを{TOTAL_ROUNDS}
            本、止めてください。（{rounds.length + 1}本目 / {TOTAL_ROUNDS}本）
          </DemoPrompt>
          {lastBall && (
            <DemoPrompt>
              直前のボールは「{LABEL[lastBall]}」方向でした。{rounds[rounds.length - 1]?.saved ? "止められました！" : "止められませんでした。"}
            </DemoPrompt>
          )}
          <DemoChoices>
            {DIRS.map((d) => (
              <DemoButton key={d} onClick={() => play(d)}>
                {LABEL[d]}
              </DemoButton>
            ))}
          </DemoChoices>
        </>
      )}

      {done && (
        <DemoResult title="6本の結果を振り返ると">
          <DemoTally>
            <span>中央に留まった回数：{centerCount}回（セーブ{centerSaves}回）</span>
            <span>左右に飛んだ回数：{sideCount}回（セーブ{sideSaves}回）</span>
          </DemoTally>
          {sideCount > centerCount ? (
            <DemoHint>
              ボールの方向は左・中央・右がほぼ均等なので、本来はどの選択も止められる確率は同じはずです。それでもあなたは左右に飛ぶ方を{sideCount}
              回選びましたね。実際のプロのPKでも、ゴールキーパーは94%もの確率で左右に飛び、統計的に有利な「中央に留まる」を選びません。「じっとしているより、何かした方がいい」という感覚が、結果に関係なく行動を選ばせてしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              中央に留まる選択を積極的に使えましたね。実際のプロの試合では、ゴールキーパーの94%が左右に飛んでしまい、統計的に有利な「中央に留まる」を選べていません。何もしないことへの抵抗感が、行動バイアスの正体です。
            </DemoHint>
          )}
          <DemoButton onClick={reset}>もう一度挑戦する</DemoButton>
        </DemoResult>
      )}
    </DemoShell>
  );
}

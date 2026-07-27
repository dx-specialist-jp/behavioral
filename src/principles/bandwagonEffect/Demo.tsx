import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";

const MAX_TICKS = 26;

export function Demo({ accentHue }: DemoProps) {
  const [counts, setCounts] = useState<{ a: number; b: number }>(() => ({
    a: 5 + (Math.random() < 0.5 ? 1 : 0),
    b: 5,
  }));
  const [tick, setTick] = useState(0);
  const [joined, setJoined] = useState<"A" | "B" | null>(null);
  const [joinTick, setJoinTick] = useState<number | null>(null);
  const [joinLeader, setJoinLeader] = useState<"A" | "B" | null>(null);

  useEffect(() => {
    if (tick >= MAX_TICKS) return;
    const timer = window.setTimeout(() => {
      setCounts((prev) => {
        let a = prev.a;
        let b = prev.b;
        for (let i = 0; i < 4; i++) {
          const shareA = a / (a + b || 1);
          if (Math.random() < shareA) a++;
          else b++;
        }
        return { a, b };
      });
      setTick((t) => t + 1);
    }, 380);
    return () => window.clearTimeout(timer);
  }, [tick]);

  const total = counts.a + counts.b;
  const pctA = Math.round((counts.a / total) * 100);
  const pctB = 100 - pctA;
  const finished = tick >= MAX_TICKS;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        新発売のアイスの味「フレーバーA」と「フレーバーB」。中身の違いは分かりません。今、リアルタイムで他の人たちの支持がどちらかに集まっていっています。あなたも好きな方に投票できます。
      </DemoPrompt>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: 4 }}>
            <span>フレーバーA</span>
            <span>{counts.a}人 ({pctA}%)</span>
          </div>
          <div style={{ background: "var(--color-border)", borderRadius: 6, height: 14, overflow: "hidden" }}>
            <div
              style={{
                width: `${pctA}%`,
                height: "100%",
                background: "var(--accent)",
                transition: "width 0.35s ease",
              }}
            />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: 4 }}>
            <span>フレーバーB</span>
            <span>{counts.b}人 ({pctB}%)</span>
          </div>
          <div style={{ background: "var(--color-border)", borderRadius: 6, height: 14, overflow: "hidden" }}>
            <div
              style={{
                width: `${pctB}%`,
                height: "100%",
                background: "var(--color-text-muted)",
                transition: "width 0.35s ease",
              }}
            />
          </div>
        </div>
      </div>

      {!joined ? (
        <div style={{ display: "flex", gap: 8 }}>
          <DemoButton
            variant="primary"
            onClick={() => {
              setJoined("A");
              setJoinTick(tick);
              setJoinLeader(counts.a >= counts.b ? "A" : "B");
            }}
          >
            フレーバーAに投票する
          </DemoButton>
          <DemoButton
            onClick={() => {
              setJoined("B");
              setJoinTick(tick);
              setJoinLeader(counts.a >= counts.b ? "A" : "B");
            }}
          >
            フレーバーBに投票する
          </DemoButton>
        </div>
      ) : (
        <DemoPrompt>あなたは「フレーバー{joined}」に投票しました。{!finished && "このまま流れを見てみましょう…"}</DemoPrompt>
      )}

      {finished && joined && (
        <DemoResult title="投票の流れを振り返ると">
          <p style={{ margin: "0 0 8px" }}>
            最終結果: フレーバーA {counts.a}人({pctA}%) ／ フレーバーB {counts.b}人({pctB}%)。あなたが投票したのは
            {joinTick !== null ? `${joinTick + 1}回目の更新時点` : ""}で、その時点で優勢だったのは「フレーバー
            {joinLeader}」でした。
          </p>
          <DemoHint>
            2つのフレーバーの中身にそもそも違いはなく、最初の差はほんの1票分のランダムな偶然でした。それでも「今、多い方にさらに票が集まりやすい」という単純なルールを繰り返しただけで、差はどんどん拡大していきましたね。これがバンドワゴン効果です。人気そのものが人気を呼ぶ自己強化のループは、内容の優劣とは無関係に、ちょっとした初期の勢いだけで大勢を決めてしまうことがあります。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

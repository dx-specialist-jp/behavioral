import { useEffect, useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type ShapeId = "circle" | "square" | "triangle";

const GLYPH: Record<ShapeId, string> = { circle: "●", square: "■", triangle: "▲" };
const EXPOSURE: Record<ShapeId, number> = { circle: 8, square: 2, triangle: 0 };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildSequence(): ShapeId[] {
  const seq: ShapeId[] = [...Array(8).fill("circle"), ...Array(2).fill("square")];
  return shuffle(seq);
}

type Phase = "intro" | "flash" | "rate" | "result";

export function Demo({ accentHue }: DemoProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [sequence] = useState<ShapeId[]>(buildSequence);
  const [flashIndex, setFlashIndex] = useState(0);
  const [favorite, setFavorite] = useState<ShapeId | null>(null);

  useEffect(() => {
    if (phase !== "flash") return;
    if (flashIndex >= sequence.length) {
      const timer = window.setTimeout(() => setPhase("rate"), 300);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => setFlashIndex((i) => i + 1), 500);
    return () => window.clearTimeout(timer);
  }, [phase, flashIndex, sequence.length]);

  const start = () => {
    setFlashIndex(0);
    setPhase("flash");
  };

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "intro" && (
        <>
          <DemoPrompt>これから図形を1つずつ、テンポよく表示します。ただ眺めていてください。</DemoPrompt>
          <DemoButton variant="primary" onClick={start}>
            はじめる
          </DemoButton>
        </>
      )}

      {phase === "flash" && flashIndex < sequence.length && (
        <div className={styles.flashBox}>{GLYPH[sequence[flashIndex]]}</div>
      )}

      {phase === "rate" && (
        <>
          <DemoPrompt>3つの図形のうち、一番好きだと感じるものを選んでください。</DemoPrompt>
          <DemoChoices>
            {(["circle", "square", "triangle"] as ShapeId[]).map((id) => (
              <DemoButton key={id} selected={favorite === id} onClick={() => setFavorite(id)}>
                {GLYPH[id]}
              </DemoButton>
            ))}
          </DemoChoices>
          {favorite && (
            <DemoButton variant="primary" onClick={() => setPhase("result")}>
              決定する
            </DemoButton>
          )}
        </>
      )}

      {phase === "result" && favorite && (
        <DemoResult title="実際の表示回数">
          <p style={{ margin: "0 0 8px" }}>
            ● は{EXPOSURE.circle}回、■ は{EXPOSURE.square}回、▲ は{EXPOSURE.triangle}回（一度も表示していません）表示していました。あなたが選んだのは「{GLYPH[favorite]}」でした。
          </p>
          {favorite === "circle" ? (
            <DemoHint>
              一番多く見た図形を選びましたね。これがまさに単純接触効果です。理由もなく、ただ何度も見ただけの対象を好きになってしまうのです。
            </DemoHint>
          ) : favorite === "square" ? (
            <DemoHint>
              2回しか見ていない図形でも、一度も見ていない図形より選ばれやすい傾向があります。多くの実験でも、接触回数が多いほど好感度が高くなる結果が一貫して示されています。
            </DemoHint>
          ) : (
            <DemoHint>
              一度も見ていない図形を選びましたね。あなたは単純接触効果の影響をあまり受けなかったようですが、多くの実験参加者は接触回数の多い図形を好む結果になっています。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

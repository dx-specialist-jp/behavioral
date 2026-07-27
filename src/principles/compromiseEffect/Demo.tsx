import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoChoices, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

type Round1 = "s" | "l";
type Round2 = "s" | "m" | "l";

const LABELS: Record<string, string> = {
  s: "エントリーモデル（5,000円・必要十分な機能）",
  m: "スタンダードモデル（12,000円・バランス重視）",
  l: "プロモデル（25,000円・全部入りの高機能）",
};

export function Demo({ accentHue }: DemoProps) {
  const [round1, setRound1] = useState<Round1 | null>(null);
  const [round2, setRound2] = useState<Round2 | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>【1回目】カメラを買うなら、次の2機種のどちらを選びますか？</DemoPrompt>
      <DemoChoices>
        <DemoButton selected={round1 === "s"} onClick={() => setRound1("s")}>
          {LABELS.s}
        </DemoButton>
        <DemoButton selected={round1 === "l"} onClick={() => setRound1("l")}>
          {LABELS.l}
        </DemoButton>
      </DemoChoices>

      {round1 && (
        <>
          <DemoPrompt>【2回目】実は真ん中のモデルもありました。改めて3機種から選ぶとしたら？</DemoPrompt>
          <DemoChoices>
            <DemoButton selected={round2 === "s"} onClick={() => setRound2("s")}>
              {LABELS.s}
            </DemoButton>
            <DemoButton selected={round2 === "m"} onClick={() => setRound2("m")}>
              {LABELS.m}
            </DemoButton>
            <DemoButton selected={round2 === "l"} onClick={() => setRound2("l")}>
              {LABELS.l}
            </DemoButton>
          </DemoChoices>
        </>
      )}

      {round1 && round2 && (
        <DemoResult title="実際の実験データと比べると">
          <p style={{ margin: "0 0 10px" }}>
            1回目は「{LABELS[round1]}」、2回目は「{LABELS[round2]}」を選びましたね。
          </p>
          <div className={styles.bars}>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>S/Lの2択のとき</span>
              <div className={styles.barTrack}>
                <div className={styles.barFillMuted} style={{ width: "50%" }} />
              </div>
              <span>ほぼ半々</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>S/M/Lの3択のとき</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "57%" }} />
              </div>
              <span>Mが約57%</span>
            </div>
          </div>
          {round2 === "m" ? (
            <DemoHint>
              あなたも真ん中の「スタンダードモデル」を選びましたね。サイモンソンのカメラ実験でも、3択になった途端に過半数が真ん中のモデルへ流れました。両端を選んで後悔するリスクを避けたい気持ちが、真ん中を「無難で正しい選択」に見せてしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は端の機種を選びましたね。ただし多くの人は3択になった途端、両端を避けて真ん中のスタンダードモデルへ流れます。中身の性能は変わっていないのに、並べ方だけで「一番選ばれる機種」が変わってしまうのが妥協効果です。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

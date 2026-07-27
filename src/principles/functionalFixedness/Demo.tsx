import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const OPTIONS = [
  { id: "tack", label: "画びょうでろうそくを直接壁に刺す" },
  { id: "melt", label: "ろうそくを溶かして、そのまま壁にくっつける" },
  { id: "box", label: "画びょうの箱を空にし、壁に留めて台にした上にろうそくを立てる" },
  { id: "match", label: "マッチ棒を接着剤代わりにしてろうそくを壁につける" },
] as const;

type OptionId = (typeof OPTIONS)[number]["id"];

export function Demo({ accentHue }: DemoProps) {
  const [selected, setSelected] = useState<OptionId | null>(null);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        テーブルの上に、ろうそく1本・マッチが入った箱・画びょうが入った箱があります。「ろうの雫を机に垂らさずに、ろうそくを壁に取り付けてください」。あなたならどうしますか？
      </DemoPrompt>
      <div className={styles.options}>
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`${styles.option} ${selected === opt.id ? styles.selected : ""}`}
            onClick={() => setSelected(opt.id)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {selected !== null && (
        <DemoResult title="正解は「画びょうの箱を空にして台にする」">
          <p style={{ margin: "0 0 8px" }}>
            画びょうで直接ろうそくを刺しても支えきれず、ろうそくを溶かして貼り付けてもすぐ剥がれ落ちてしまいます。正解は、画びょうの箱を空にして壁に留め、それを台にしてろうそくを立てる方法です。
          </p>
          {selected === "box" ? (
            <DemoHint>
              正解です！これは心理学者カール・ドゥンカーが1945年に行った「ろうそく問題」そのものです。多くの人は画びょうの箱を「画びょうを入れる容器」としてしか見られず、「壁に取り付ける台」という別の使い道になかなか気づけません。あなたはその機能的固着を乗り越えられました。
            </DemoHint>
          ) : (
            <DemoHint>
              これは心理学者カール・ドゥンカーが1945年に行った「ろうそく問題」で、多くの参加者が正解にたどり着けませんでした。原因は、画びょうの箱を「画びょうを入れておく容器」という本来の用途でしか見られず、「壁に取り付ける台」という別の使い道を思いつけないこと——これが機能的固着です。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

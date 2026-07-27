import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

export function Demo({ accentHue }: DemoProps) {
  const [checked, setChecked] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        あなたは新しい職場の入社手続きをしています。次のチェック項目にはあらかじめチェックが入っています。このまま提出しますか？変更しますか？
      </DemoPrompt>
      <div className={styles.form}>
        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={checked}
            disabled={submitted}
            onChange={(e) => setChecked(e.target.checked)}
          />
          企業型確定拠出年金（積立投資）に加入する
        </label>
      </div>

      {!submitted ? (
        <DemoButton variant="primary" onClick={() => setSubmitted(true)}>
          このまま提出する
        </DemoButton>
      ) : (
        <DemoResult title="実際の国際比較データ">
          <p style={{ margin: "0 0 10px" }}>
            あなたは最終的に「{checked ? "加入する" : "加入しない"}
            」を選びました。実はこの設問、あらかじめ「加入する」にチェックが入っていました。もしチェックが最初から外れていたら（オプトイン方式）、あなたは自分から積極的にチェックを入れたでしょうか？
          </p>
          <div className={styles.bars}>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>初期設定=加入する</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "92%" }} />
              </div>
              <span>約92%</span>
            </div>
            <div className={styles.barRow}>
              <span className={styles.barLabel}>初期設定=加入しない</span>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: "20%" }} />
              </div>
              <span>約20%</span>
            </div>
          </div>
          <DemoHint>
            実際の企業年金の研究でも、自動加入（デフォルトON）にするだけで加入率が20%前後から90%以上に跳ね上がることが報告されています。制度の中身は同じでも、初期設定だけで結果が大きく変わるのです。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";
import styles from "./Demo.module.css";

const PROPOSAL =
  "入出庫のたびにバーコードを読み取り、在庫データをリアルタイムで自動更新する仕組みを導入する。";

type Phase = "internal" | "external" | "done";

export function Demo({ accentHue }: DemoProps) {
  const [phase, setPhase] = useState<Phase>("internal");
  const [ratingInternal, setRatingInternal] = useState(5);
  const [ratingExternal, setRatingExternal] = useState(5);

  return (
    <DemoShell accentHue={accentHue}>
      {phase === "internal" && (
        <>
          <DemoPrompt>ある在庫管理システムの改善提案書です。社内の企画チームが考案したものです。</DemoPrompt>
          <div className={styles.card}>
            <p className={styles.cardLabel}>提案元: 自社の企画チーム</p>
            <p className={styles.cardBody}>{PROPOSAL}</p>
          </div>
          <DemoSlider
            label="採用したい度"
            value={ratingInternal}
            min={1}
            max={10}
            displayValue={`${ratingInternal}/10`}
            onChange={setRatingInternal}
          />
          <DemoButton variant="primary" onClick={() => setPhase("external")}>
            次へ
          </DemoButton>
        </>
      )}

      {phase === "external" && (
        <>
          <DemoPrompt>別の日、外部のコンサルティング会社から、内容がまったく同じ提案書が届きました。</DemoPrompt>
          <div className={styles.card}>
            <p className={styles.cardLabel}>提案元: 外部のコンサルティング会社</p>
            <p className={styles.cardBody}>{PROPOSAL}</p>
          </div>
          <DemoSlider
            label="採用したい度"
            value={ratingExternal}
            min={1}
            max={10}
            displayValue={`${ratingExternal}/10`}
            onChange={setRatingExternal}
          />
          <DemoButton variant="primary" onClick={() => setPhase("done")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {phase === "done" && (
        <DemoResult title="2つの評価を比べてみると">
          <p style={{ margin: "0 0 10px" }}>
            社内発の提案には {ratingInternal}/10、内容が同じ外部発の提案には {ratingExternal}/10 という評価でした。
          </p>
          {ratingInternal > ratingExternal ? (
            <DemoHint>
              提案の中身は一文字も変えていないのに、社内発だと評価したときの方が高い点数になりましたね。これがNIH症候群です。組織の研究では、外部由来というだけでアイデアが軽視されたり、逆に「外部の権威」が過大評価されたりと、出どころのラベルだけで評価が歪む現象が繰り返し報告されています。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は同じくらいの評価でしたね。ただし多くの組織では、まったく同じ提案でも「誰が考えたか」というラベルだけで採用の可否が左右されてしまうことが知られています。良いアイデアを見逃さないためには、出どころではなく中身で判断する意識が欠かせません。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

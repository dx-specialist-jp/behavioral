import { useState } from "react";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo() {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [scoreA, setScoreA] = useState(5);
  const [scoreB, setScoreB] = useState(5);

  return (
    <DemoShell accentVar="--accent-framing">
      {stage === 0 && (
        <>
          <DemoPrompt>
            ある新しい手術は「受けた患者の90%が5年後も元気に生活しています」と説明されています。あなたなら、この手術をどれくらい受けたいと思いますか？
          </DemoPrompt>
          <DemoSlider
            label="受けたい度"
            value={scoreA}
            min={0}
            max={10}
            onChange={setScoreA}
          />
          <DemoButton variant="primary" onClick={() => setStage(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 1 && (
        <>
          <DemoPrompt>
            実は同じ手術のデータです。「受けた患者の10%が5年以内に亡くなっています」と言われたら、どれくらい受けたいと思いますか？
          </DemoPrompt>
          <DemoSlider label="受けたい度" value={scoreB} min={0} max={10} onChange={setScoreB} />
          <DemoButton variant="primary" onClick={() => setStage(2)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === 2 && (
        <DemoResult title="2つの回答を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            「生存率90%」への受けたい度：{scoreA} ／ 「死亡率10%」への受けたい度：{scoreB}
          </p>
          {scoreA !== scoreB ? (
            <DemoHint>
              まったく同じ手術・同じ数字なのに、点数が変わりましたね（差は{Math.abs(scoreA - scoreB)}
              点）。「生存率」という前向きな言葉と「死亡率」という不安な言葉、どちらで包まれるかだけで印象が変わってしまうのがフレーミング効果です。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は同じ点数をつけましたね。素晴らしい判断です。多くの人は同じ内容でも「生存率」と言われた方に高い点数をつけてしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

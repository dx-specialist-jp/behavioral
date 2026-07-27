import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [baseline, setBaseline] = useState(6);
  const [immediate, setImmediate] = useState(6);
  const [month, setMonth] = useState(6);
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);

  const reset = () => {
    setBaseline(6);
    setImmediate(6);
    setMonth(6);
    setStage(0);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === 0 && (
        <>
          <DemoPrompt>
            まず、普段のあなたの幸福度を10点満点で教えてください（特別な出来事がない、いつもの日常です）。
          </DemoPrompt>
          <DemoSlider
            label="普段の幸福度"
            value={baseline}
            min={0}
            max={10}
            displayValue={`${baseline}点`}
            onChange={setBaseline}
          />
          <DemoButton variant="primary" onClick={() => setStage(1)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 1 && (
        <>
          <DemoPrompt>
            想像してください。あなたは宝くじで3,000万円を当てました。当選が分かった「その瞬間」、あなたの幸福度は何点になると思いますか？
          </DemoPrompt>
          <DemoSlider
            label="当選直後の幸福度"
            value={immediate}
            min={0}
            max={10}
            displayValue={`${immediate}点`}
            onChange={setImmediate}
          />
          <DemoButton variant="primary" onClick={() => setStage(2)}>
            次へ
          </DemoButton>
        </>
      )}

      {stage === 2 && (
        <>
          <DemoPrompt>では、当選から半年後のあなたの幸福度は何点だと思いますか？</DemoPrompt>
          <DemoSlider
            label="半年後の幸福度（予測）"
            value={month}
            min={0}
            max={10}
            displayValue={`${month}点`}
            onChange={setMonth}
          />
          <DemoButton variant="primary" onClick={() => setStage(3)}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === 3 && (
        <DemoResult title="あなたの予測を振り返ると">
          <p style={{ margin: "0 0 8px" }}>
            普段：{baseline}点 → 当選直後：{immediate}点（予測） → 半年後：{month}点（予測）
          </p>
          {month - baseline >= 2 ? (
            <DemoHint>
              半年後の予測が、普段の幸福度より{month - baseline}点も高いままですね。しかしブリックマンらの宝くじ当選者の研究では、当選から数か月〜1年後には、幸福度はもとの基準値に近いところまで戻っていました。あなたも「この幸せはずっと続く」と無意識に見積もっていたのかもしれません。それが快楽適応です。
            </DemoHint>
          ) : (
            <DemoHint>
              半年後の予測を普段の水準に近づけましたね。とても現実的な見立てです。多くの人はここで「ずっと幸せが続く」と過大予測してしまい、実際の研究でも幸福度は数か月でベースライン付近まで戻ることが分かっています。
            </DemoHint>
          )}
          <DemoButton onClick={reset}>もう一度試す</DemoButton>
        </DemoResult>
      )}
    </DemoShell>
  );
}

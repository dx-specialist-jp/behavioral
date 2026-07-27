import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

export function Demo({ accentHue }: DemoProps) {
  const [selfScore, setSelfScore] = useState(5);
  const [otherScore, setOtherScore] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const diff = selfScore - otherScore;

  return (
    <DemoShell accentHue={accentHue}>
      <DemoPrompt>
        最近、誰かと意見が食い違って対立したことを1つ思い浮かべてください（職場の方針、家族との議論、ニュースの見方など何でも構いません）。
      </DemoPrompt>
      {!submitted ? (
        <>
          <DemoSlider label="自分の意見は、どれくらい客観的・公平だと思いますか" value={selfScore} min={0} max={10} onChange={setSelfScore} />
          <DemoSlider
            label="相手（意見が違う人）の意見は、どれくらい客観的・公平だと思いますか"
            value={otherScore}
            min={0}
            max={10}
            onChange={setOtherScore}
          />
          <DemoButton variant="primary" onClick={() => setSubmitted(true)}>
            結果を見る
          </DemoButton>
        </>
      ) : (
        <DemoResult title="あなたの評価を比べてみると">
          <p style={{ margin: "0 0 8px" }}>
            自分の客観性：{selfScore} ／ 相手の客観性：{otherScore}（差：{diff > 0 ? `+${diff}` : diff}）
          </p>
          {diff >= 2 ? (
            <DemoHint>
              自分の意見の方をかなり客観的だと評価しましたね。社会心理学者リー・ロスらの研究によれば、多くの人が「自分には物事がありのまま見えていて、違う意見の人は情報不足か偏見のせいだ」と考えてしまいます。これが素朴実在論です。対立が起きたとき、相手も同じように「自分こそ客観的だ」と感じている可能性を思い出すことが、対話の糸口になります。
            </DemoHint>
          ) : (
            <DemoHint>
              自分と相手をほぼ同じくらい客観的だと評価しましたね。これは比較的まれな回答です。多くの人は無意識に自分の見方を優遇し、意見の違う相手を「偏っている」と判断してしまいます。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

const TOTAL_CLICKS = 10;

export function Demo({ accentHue }: DemoProps) {
  const [stage, setStage] = useState<"baseline" | "play" | "after" | "result">("baseline");
  const [baseline, setBaseline] = useState(5);
  const [points, setPoints] = useState(0);
  const [after, setAfter] = useState(5);

  const handleTap = () => {
    const next = points + 1;
    setPoints(next);
    if (next >= TOTAL_CLICKS) setStage("after");
  };

  return (
    <DemoShell accentHue={accentHue}>
      {stage === "baseline" && (
        <>
          <DemoPrompt>
            これから、丸をタップするだけのシンプルなゲームで遊んでもらいます。まずは遊ぶ前に、素朴な予想を教えてください。
          </DemoPrompt>
          <DemoSlider
            label="もしポイントなどのご褒美が一切なくても、暇な時間にやってみたいと思う度合い"
            value={baseline}
            min={0}
            max={10}
            onChange={setBaseline}
          />
          <DemoButton variant="primary" onClick={() => setStage("play")}>
            では実際に遊んでみる
          </DemoButton>
        </>
      )}

      {stage === "play" && (
        <>
          <DemoPrompt>
            丸をタップするたびに1ポイントもらえます。{TOTAL_CLICKS}回タップしてください。
          </DemoPrompt>
          <DemoButton variant="primary" onClick={handleTap}>
            ● タップ（獲得ポイント：{points}）
          </DemoButton>
        </>
      )}

      {stage === "after" && (
        <>
          <DemoPrompt>
            お疲れさまでした。ポイント制度はここで終了です。この先はもうポイントは一切つきません。
          </DemoPrompt>
          <DemoSlider
            label="ポイントがなくても、このタップ作業をもう少し続けたいと思う度合い"
            value={after}
            min={0}
            max={10}
            onChange={setAfter}
          />
          <DemoButton variant="primary" onClick={() => setStage("result")}>
            結果を見る
          </DemoButton>
        </>
      )}

      {stage === "result" && (
        <DemoResult title="ご褒美の前と後で、気持ちは変わりましたか？">
          <p style={{ margin: "0 0 8px" }}>
            遊ぶ前の予想：{baseline} / 10 ／ ポイント終了後の意欲：{after} / 10
          </p>
          {after < baseline ? (
            <DemoHint>
              ポイントが終わった途端、続けたい気持ちが予想よりも下がりましたね。これはオーバージャスティフィケーション効果とよく似たパターンです。心理学者エドワード・デシの実験では、パズルにお金を払われた参加者は、報酬がない自由時間にそのパズルで遊ばなくなる一方、報酬をもらわなかった参加者は自由時間にも遊び続けました。ご褒美という「外的な理由」が加わると、脳の中で「楽しいからやっている」という気持ちが「ご褒美のためにやっている」にすり替わってしまい、ご褒美が消えると意欲も一緒に消えてしまうのです。
            </DemoHint>
          ) : (
            <DemoHint>
              今回は意欲があまり下がりませんでしたね。実験では全員に同じ効果が出るわけではなく、報酬が「対価」としてではなく「予告なしのご褒美」として与えられる場合は、内発的な意欲を損ないにくいことも分かっています。それでも、多くの人がポイント終了後に意欲の低下を感じるのが典型的なパターンです。
            </DemoHint>
          )}
        </DemoResult>
      )}
    </DemoShell>
  );
}

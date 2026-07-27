import { useState } from "react";
import type { DemoProps } from "../types";
import { DemoButton, DemoHint, DemoPrompt, DemoResult, DemoShell, DemoSlider } from "../../components/ui/DemoUI";

interface TaskDef {
  task: string;
  unit: string;
  min: number;
  max: number;
}

const TASKS: TaskDef[] = [
  { task: "1万字のレポートを書き上げる", unit: "日", min: 1, max: 30 },
  { task: "部屋の片付けや大掃除を終わらせる", unit: "時間", min: 1, max: 48 },
];

interface TaskResult {
  task: string;
  unit: string;
  bestCase: number;
  confident: number;
}

export function Demo({ accentHue }: DemoProps) {
  const [results, setResults] = useState<TaskResult[]>([]);
  const currentIndex = results.length;
  const finished = currentIndex >= TASKS.length;
  const current = !finished ? TASKS[currentIndex] : null;

  const [bestCase, setBestCase] = useState(2);
  const [confident, setConfident] = useState(4);

  const handleSubmit = () => {
    if (!current) return;
    const finalBest = Math.min(bestCase, confident);
    const finalConfident = Math.max(bestCase, confident);
    setResults((prev) => [...prev, { task: current.task, unit: current.unit, bestCase: finalBest, confident: finalConfident }]);
    setBestCase(2);
    setConfident(4);
  };

  return (
    <DemoShell accentHue={accentHue}>
      {!finished && current && (
        <>
          <DemoPrompt>
            タスク：「{current.task}」。ここでは2つの見積もりをしてください。
          </DemoPrompt>
          <DemoSlider
            label="① 全てが順調に進んだ場合の日数・時間（ベストケース）"
            value={bestCase}
            min={current.min}
            max={current.max}
            displayValue={`${bestCase}${current.unit}`}
            onChange={setBestCase}
          />
          <DemoSlider
            label="② これだけあれば99%終わっていると自信を持てる日数・時間（かなり余裕を持たせた見積もり）"
            value={confident}
            min={current.min}
            max={current.max}
            displayValue={`${confident}${current.unit}`}
            onChange={setConfident}
          />
          <DemoButton variant="primary" onClick={handleSubmit}>
            この見積もりで決定
          </DemoButton>
        </>
      )}

      {finished && (
        <DemoResult title="あなたの見積もり">
          <ul style={{ margin: "0 0 8px", paddingLeft: "1.2em" }}>
            {results.map((r, i) => {
              const buffer = r.confident - r.bestCase;
              const bufferPercent = r.bestCase > 0 ? Math.round((buffer / r.bestCase) * 100) : 0;
              return (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {r.task}：ベストケース {r.bestCase}
                  {r.unit} → 99%自信のある見積もり {r.confident}
                  {r.unit}（余裕は+{bufferPercent}%）
                </li>
              );
            })}
          </ul>
          <DemoHint>
            1994年の心理学者ロジャー・ビューラーらの研究では、学生に卒業論文の完成時期を「最も可能性が高い予想」と「99%の確率で終わっていると確信できる、かなり余裕を持たせた予想」の両方で見積もらせました。ところが実際に自分の99%確信の期限までに論文を終えられた学生は、わずか45%程度でした。あなたがどれだけ余裕を持たせても、現実の作業は割り込みや想定外の事態を含んでおり、見積もりはそれでも甘くなりがちです。次に計画を立てるときは、自分の直感（内部情報）だけでなく、過去の似たケースの実績（外部情報）を必ず参照しましょう。
          </DemoHint>
        </DemoResult>
      )}
    </DemoShell>
  );
}

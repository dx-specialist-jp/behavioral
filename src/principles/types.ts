import type { ComponentType } from "react";

export type PrincipleCategory =
  | "decision-heuristics"
  | "probability-risk"
  | "choice-comparison"
  | "money-time"
  | "social-influence"
  | "group-negotiation"
  | "memory-impression"
  | "self-perception";

export const CATEGORY_LABELS: Record<PrincipleCategory, string> = {
  "decision-heuristics": "意思決定のヒューリスティック",
  "probability-risk": "確率とリスクの誤解",
  "choice-comparison": "選択と比較のクセ",
  "money-time": "お金と時間の感じ方",
  "social-influence": "社会的な影響",
  "group-negotiation": "集団と交渉の心理",
  "memory-impression": "記憶と印象のクセ",
  "self-perception": "自己認識のクセ",
};

/** カテゴリごとの基準色相（0-359）。個々の原理の色はここから自動的に決まる。 */
export const CATEGORY_HUES: Record<PrincipleCategory, number> = {
  "decision-heuristics": 200,
  "probability-risk": 245,
  "choice-comparison": 290,
  "money-time": 335,
  "social-influence": 20,
  "group-negotiation": 65,
  "memory-impression": 110,
  "self-perception": 155,
};

export interface PrincipleContent {
  /** 1〜2文でのプレーンな定義 */
  definition: string;
  /** 解説パラグラフ（複数） */
  explanation: string[];
  /** 日常や社会での具体例 */
  examples: string[];
  /** 一言でのまとめ・対策のヒント */
  takeaway: string;
  /** 提唱・実証した研究者と発表年、出典（例: "Tversky & Kahneman (1974)『Judgment under Uncertainty』"）。裏取りできたもののみ記載。 */
  academicSource?: string;
}

export interface PrincipleMeta {
  slug: string;
  title: string;
  shortSummary: string;
  category: PrincipleCategory;
  content: PrincipleContent;
}

export interface DemoProps {
  /** hsl()のH成分。DemoShellにそのまま渡す。 */
  accentHue: number;
}

export interface Principle extends PrincipleMeta {
  Illustration: ComponentType;
  Demo: ComponentType<DemoProps>;
}

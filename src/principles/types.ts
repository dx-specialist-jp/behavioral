import type { ComponentType } from "react";

export type PrincipleCategory = "decision" | "social" | "money-time";

export const CATEGORY_LABELS: Record<PrincipleCategory, string> = {
  decision: "意思決定のクセ",
  social: "社会的な影響",
  "money-time": "お金と時間の感じ方",
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
}

export interface PrincipleMeta {
  slug: string;
  title: string;
  shortSummary: string;
  category: PrincipleCategory;
  /** src/styles/variables.css に定義したCSS変数名 */
  accentVar: string;
  content: PrincipleContent;
}

export interface Principle extends PrincipleMeta {
  Illustration: ComponentType;
  Demo: ComponentType;
}

import decisionHeuristics from "../assets/irasutoya/decision-heuristics.png";
import probabilityRisk from "../assets/irasutoya/probability-risk.png";
import choiceComparison from "../assets/irasutoya/choice-comparison.png";
import moneyTime from "../assets/irasutoya/money-time.png";
import socialInfluence from "../assets/irasutoya/social-influence.png";
import groupNegotiation from "../assets/irasutoya/group-negotiation.png";
import memoryImpression from "../assets/irasutoya/memory-impression.png";
import selfPerception from "../assets/irasutoya/self-perception.png";
import type { PrincipleCategory } from "./types";

/** カテゴリごとの添えイラスト（いらすとや素材）。src/assets/irasutoya/ に実体を配置。 */
export const CATEGORY_ILLUSTRATIONS: Record<PrincipleCategory, { src: string; alt: string }> = {
  "decision-heuristics": { src: decisionHeuristics, alt: "ひらめきを表す電球のイラスト" },
  "probability-risk": { src: probabilityRisk, alt: "サイコロのイラスト" },
  "choice-comparison": { src: choiceComparison, alt: "頭を抱えて悩んでいる人のイラスト" },
  "money-time": { src: moneyTime, alt: "ブタの貯金箱のイラスト" },
  "social-influence": { src: socialInfluence, alt: "レジ前に並ぶ行列のイラスト" },
  "group-negotiation": { src: groupNegotiation, alt: "会議をしている人たちのイラスト" },
  "memory-impression": { src: memoryImpression, alt: "思い出のアルバムのイラスト" },
  "self-perception": { src: selfPerception, alt: "鏡を見る人のイラスト" },
};

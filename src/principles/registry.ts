import type { Principle, PrincipleCategory } from "./types";
import { anchoring } from "./anchoring";
import { framingEffect } from "./framingEffect";
import { confirmationBias } from "./confirmationBias";
import { availabilityHeuristic } from "./availabilityHeuristic";
import { socialProof } from "./socialProof";
import { statusQuoBias } from "./statusQuoBias";
import { defaultEffect } from "./defaultEffect";
import { lossAversion } from "./lossAversion";
import { sunkCost } from "./sunkCost";
import { presentBias } from "./presentBias";
import { mentalAccounting } from "./mentalAccounting";
import { endowmentEffect } from "./endowmentEffect";

export const allPrinciples: Principle[] = [
  // 意思決定のクセ
  anchoring,
  framingEffect,
  confirmationBias,
  availabilityHeuristic,
  // 社会的な影響
  socialProof,
  statusQuoBias,
  defaultEffect,
  // お金と時間の感じ方
  lossAversion,
  sunkCost,
  presentBias,
  mentalAccounting,
  endowmentEffect,
];

export function principlesByCategory(category: PrincipleCategory): Principle[] {
  return allPrinciples.filter((p) => p.category === category);
}

export function getPrincipleBySlug(slug: string): Principle | undefined {
  return allPrinciples.find((p) => p.slug === slug);
}

export function getAdjacentPrinciples(slug: string): { prev: Principle | null; next: Principle | null } {
  const index = allPrinciples.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? allPrinciples[index - 1] : null,
    next: index < allPrinciples.length - 1 ? allPrinciples[index + 1] : null,
  };
}

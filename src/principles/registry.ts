import type { Principle, PrincipleCategory } from "./types";
import { actionBias } from "./actionBias";
import { actorObserverBias } from "./actorObserverBias";
import { affectHeuristic } from "./affectHeuristic";
import { affectiveForecastingError } from "./affectiveForecastingError";
import { ambiguityAversion } from "./ambiguityAversion";
import { anchoring } from "./anchoring";
import { authorityBias } from "./authorityBias";
import { availabilityHeuristic } from "./availabilityHeuristic";
import { backfireEffect } from "./backfireEffect";
import { bandwagonEffect } from "./bandwagonEffect";
import { barnumEffect } from "./barnumEffect";
import { baseRateNeglect } from "./baseRateNeglect";
import { beliefPerseverance } from "./beliefPerseverance";
import { bystanderEffect } from "./bystanderEffect";
import { certaintyEffect } from "./certaintyEffect";
import { choiceOverload } from "./choiceOverload";
import { clusteringIllusion } from "./clusteringIllusion";
import { cognitiveDissonance } from "./cognitiveDissonance";
import { commitmentConsistency } from "./commitmentConsistency";
import { compromiseEffect } from "./compromiseEffect";
import { confirmationBias } from "./confirmationBias";
import { contrastEffect } from "./contrastEffect";
import { curseOfKnowledge } from "./curseOfKnowledge";
import { declinism } from "./declinism";
import { decoyEffect } from "./decoyEffect";
import { defaultEffect } from "./defaultEffect";
import { denominationEffect } from "./denominationEffect";
import { diffusionOfResponsibility } from "./diffusionOfResponsibility";
import { diversificationBias } from "./diversificationBias";
import { doorInTheFace } from "./doorInTheFace";
import { dunningKrugerEffect } from "./dunningKrugerEffect";
import { durationNeglect } from "./durationNeglect";
import { empathyGap } from "./empathyGap";
import { endowmentEffect } from "./endowmentEffect";
import { falseConsensusEffect } from "./falseConsensusEffect";
import { falseMemoryEffect } from "./falseMemoryEffect";
import { falseUniquenessBias } from "./falseUniquenessBias";
import { focusingIllusion } from "./focusingIllusion";
import { footInTheDoor } from "./footInTheDoor";
import { framingEffect } from "./framingEffect";
import { functionalFixedness } from "./functionalFixedness";
import { fundamentalAttributionError } from "./fundamentalAttributionError";
import { gamblersFallacy } from "./gamblersFallacy";
import { groupthink } from "./groupthink";
import { haloEffect } from "./haloEffect";
import { hedonicAdaptation } from "./hedonicAdaptation";
import { herdingBehavior } from "./herdingBehavior";
import { hindsightBias } from "./hindsightBias";
import { hotHandFallacy } from "./hotHandFallacy";
import { identifiableVictimEffect } from "./identifiableVictimEffect";
import { ikeaEffect } from "./ikeaEffect";
import { illusionOfControl } from "./illusionOfControl";
import { illusionOfTransparency } from "./illusionOfTransparency";
import { illusoryCorrelation } from "./illusoryCorrelation";
import { illusorySuperiority } from "./illusorySuperiority";
import { illusoryTruthEffect } from "./illusoryTruthEffect";
import { informationCascade } from "./informationCascade";
import { inGroupBias } from "./inGroupBias";
import { justWorldHypothesis } from "./justWorldHypothesis";
import { lawOfTriviality } from "./lawOfTriviality";
import { likingPrinciple } from "./likingPrinciple";
import { lossAversion } from "./lossAversion";
import { mentalAccounting } from "./mentalAccounting";
import { mereExposureEffect } from "./mereExposureEffect";
import { moneyIllusion } from "./moneyIllusion";
import { motivatedReasoning } from "./motivatedReasoning";
import { naiveRealism } from "./naiveRealism";
import { negativityBias } from "./negativityBias";
import { notInventedHereBias } from "./notInventedHereBias";
import { nudge } from "./nudge";
import { omissionBias } from "./omissionBias";
import { outcomeBias } from "./outcomeBias";
import { outGroupHomogeneityBias } from "./outGroupHomogeneityBias";
import { overconfidenceEffect } from "./overconfidenceEffect";
import { overjustificationEffect } from "./overjustificationEffect";
import { parkinsonsLaw } from "./parkinsonsLaw";
import { peakEndRule } from "./peakEndRule";
import { placeboNoceboEffect } from "./placeboNoceboEffect";
import { planningFallacy } from "./planningFallacy";
import { pluralisticIgnorance } from "./pluralisticIgnorance";
import { presentBias } from "./presentBias";
import { projectionBias } from "./projectionBias";
import { pseudocertaintyEffect } from "./pseudocertaintyEffect";
import { psychicNumbing } from "./psychicNumbing";
import { reactance } from "./reactance";
import { reciprocityNorm } from "./reciprocityNorm";
import { recognitionHeuristic } from "./recognitionHeuristic";
import { representativenessHeuristic } from "./representativenessHeuristic";
import { rosyRetrospection } from "./rosyRetrospection";
import { salienceBias } from "./salienceBias";
import { scarcityPrinciple } from "./scarcityPrinciple";
import { selfHandicapping } from "./selfHandicapping";
import { selfServingBias } from "./selfServingBias";
import { serialPositionEffect } from "./serialPositionEffect";
import { socialProof } from "./socialProof";
import { spotlightEffect } from "./spotlightEffect";
import { statusQuoBias } from "./statusQuoBias";
import { studentSyndrome } from "./studentSyndrome";
import { sunkCost } from "./sunkCost";
import { survivorshipBias } from "./survivorshipBias";
import { telescopingEffect } from "./telescopingEffect";
import { thirdPersonEffect } from "./thirdPersonEffect";
import { zeroPriceEffect } from "./zeroPriceEffect";
import { zeroRiskBias } from "./zeroRiskBias";

export const allPrinciples: Principle[] = [
  // 意思決定のヒューリスティック
  affectHeuristic,
  anchoring,
  availabilityHeuristic,
  barnumEffect,
  confirmationBias,
  curseOfKnowledge,
  framingEffect,
  functionalFixedness,
  illusoryCorrelation,
  illusoryTruthEffect,
  justWorldHypothesis,
  lawOfTriviality,
  naiveRealism,
  negativityBias,
  nudge,
  recognitionHeuristic,
  representativenessHeuristic,
  // 確率とリスクの誤解
  ambiguityAversion,
  baseRateNeglect,
  certaintyEffect,
  clusteringIllusion,
  dunningKrugerEffect,
  gamblersFallacy,
  hotHandFallacy,
  illusionOfControl,
  overconfidenceEffect,
  planningFallacy,
  survivorshipBias,
  zeroRiskBias,
  // 選択と比較のクセ
  choiceOverload,
  compromiseEffect,
  contrastEffect,
  decoyEffect,
  defaultEffect,
  denominationEffect,
  diversificationBias,
  ikeaEffect,
  moneyIllusion,
  notInventedHereBias,
  statusQuoBias,
  zeroPriceEffect,
  // お金と時間の感じ方
  actionBias,
  affectiveForecastingError,
  endowmentEffect,
  focusingIllusion,
  hedonicAdaptation,
  identifiableVictimEffect,
  lossAversion,
  mentalAccounting,
  omissionBias,
  outcomeBias,
  parkinsonsLaw,
  presentBias,
  projectionBias,
  pseudocertaintyEffect,
  studentSyndrome,
  sunkCost,
  // 社会的な影響
  authorityBias,
  bandwagonEffect,
  commitmentConsistency,
  doorInTheFace,
  footInTheDoor,
  herdingBehavior,
  likingPrinciple,
  mereExposureEffect,
  reciprocityNorm,
  scarcityPrinciple,
  socialProof,
  // 集団と交渉の心理
  actorObserverBias,
  bystanderEffect,
  diffusionOfResponsibility,
  falseConsensusEffect,
  fundamentalAttributionError,
  groupthink,
  inGroupBias,
  informationCascade,
  outGroupHomogeneityBias,
  pluralisticIgnorance,
  psychicNumbing,
  reactance,
  // 記憶と印象のクセ
  declinism,
  durationNeglect,
  falseMemoryEffect,
  haloEffect,
  hindsightBias,
  illusionOfTransparency,
  peakEndRule,
  rosyRetrospection,
  salienceBias,
  serialPositionEffect,
  spotlightEffect,
  telescopingEffect,
  // 自己認識のクセ
  backfireEffect,
  beliefPerseverance,
  cognitiveDissonance,
  empathyGap,
  falseUniquenessBias,
  illusorySuperiority,
  motivatedReasoning,
  overjustificationEffect,
  placeboNoceboEffect,
  selfHandicapping,
  selfServingBias,
  thirdPersonEffect,
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

import { CATEGORY_ILLUSTRATIONS } from "./categoryIllustrations";
import type { PrincipleCategory } from "./types";

// 原理ごとに個別選定したいらすとや画像。src/assets/irasutoya/principles/<slug>.png
// を置くだけで自動的に拾われる（未整備のスラッグはカテゴリ共通画像にフォールバック）。
const modules = import.meta.glob<{ default: string }>("../assets/irasutoya/principles/*.png", {
  eager: true,
});

const bySlug = new Map<string, string>();
for (const [path, mod] of Object.entries(modules)) {
  const slug = path.split("/").pop()?.replace(/\.png$/, "");
  if (slug) bySlug.set(slug, mod.default);
}

export function getPrincipleIllustration(slug: string, category: PrincipleCategory) {
  const src = bySlug.get(slug);
  return src ? { src } : CATEGORY_ILLUSTRATIONS[category];
}

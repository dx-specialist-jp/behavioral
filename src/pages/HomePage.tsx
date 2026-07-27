import type { MouseEvent } from "react";
import { CATEGORY_LABELS, type PrincipleCategory } from "../principles/types";
import { principlesByCategory, allPrinciples } from "../principles/registry";
import { PrincipleCard } from "../components/PrincipleCard";
import { useVisitedPrinciples } from "../hooks/useVisitedPrinciples";
import styles from "./HomePage.module.css";

const CATEGORY_ORDER: PrincipleCategory[] = [
  "decision-heuristics",
  "probability-risk",
  "choice-comparison",
  "money-time",
  "social-influence",
  "group-negotiation",
  "memory-impression",
  "self-perception",
];

function categoryAnchorId(category: PrincipleCategory) {
  return `category-${category}`;
}

/**
 * HashRouterは "#" 以降をルートパスとして解釈するため、素の <a href="#id"> の
 * デフォルト遷移に任せると location.hash が書き換わり、存在しないルートとして
 * 404ページに飛んでしまう。preventDefaultしてscrollIntoViewで代替する。
 */
function handleCategoryNavClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HomePage() {
  const { isVisited, visited } = useVisitedPrinciples();

  return (
    <div>
      <section className={styles.hero}>
        <span className={styles.heroKicker}>Behavioral Economics Lab</span>
        <h1 className={styles.heroTitle}>くせラボ</h1>
        <p className={styles.heroLead}>
          人はなぜ、いつも「合理的」に選べないのか。行動経済学の原理を1つずつ、イラストと自分で試せるミニ体験で学べるサイトです。読むだけでなく、実際にクリックして自分の中の「くせ」に気づいてみましょう。
        </p>
        <span className={styles.progress}>
          {visited.size} / {allPrinciples.length} 個の原理を学習済み
        </span>
      </section>

      <nav className={styles.quickNav} aria-label="カテゴリ一覧">
        {CATEGORY_ORDER.map((category) => (
          <a
            key={category}
            href={`#${categoryAnchorId(category)}`}
            className={styles.quickNavItem}
            onClick={(event) => handleCategoryNavClick(event, categoryAnchorId(category))}
          >
            {CATEGORY_LABELS[category]}
            <span className={styles.quickNavCount}>{principlesByCategory(category).length}</span>
          </a>
        ))}
      </nav>

      {CATEGORY_ORDER.map((category) => (
        <section className={styles.section} key={category} id={categoryAnchorId(category)}>
          <h2 className={styles.sectionTitle}>{CATEGORY_LABELS[category]}</h2>
          <div className={styles.grid}>
            {principlesByCategory(category).map((principle) => (
              <PrincipleCard
                key={principle.slug}
                principle={principle}
                visited={isVisited(principle.slug)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

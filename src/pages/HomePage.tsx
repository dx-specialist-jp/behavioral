import type { MouseEvent } from "react";
import { CATEGORY_LABELS, type PrincipleCategory } from "../principles/types";
import { principlesByCategory, allPrinciples } from "../principles/registry";
import { PrincipleCard } from "../components/PrincipleCard";
import { useVisitedPrinciples } from "../hooks/useVisitedPrinciples";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import heroImage from "../assets/hero/title.jpg";
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
 * 素の <a href="#id"> のデフォルト遷移に任せるとURLのハッシュが書き換わってしまう
 * ため、preventDefaultしてscrollIntoViewで代替し、URLを変えずに滑らかにスクロール
 * させる。
 */
function handleCategoryNavClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HomePage() {
  useDocumentTitle("行動経済学大全 | 人はなぜ、いつも「合理的」に選べないのか");
  const { isVisited, visited } = useVisitedPrinciples();
  const progressPercent = Math.round((visited.size / allPrinciples.length) * 100);

  return (
    <div>
      <section className={styles.hero}>
        <span className={styles.heroKicker}>Behavioral Economics Encyclopedia</span>
        <h1 className={styles.srOnly}>行動経済学大全</h1>
        <img
          src={heroImage}
          alt="行動経済学大全 ── 人の心がつくる、より良い選択の科学"
          className={styles.heroImage}
        />
        <p className={styles.heroLead}>
          行動経済学の原理を1つずつ、イラストと自分で試せるミニ体験で学べるサイトです。読むだけでなく、実際にクリックして自分の中の「くせ」に気づいてみましょう。
        </p>
        <div className={styles.progress}>
          <span className={styles.progressLabel}>
            {visited.size} / {allPrinciples.length} 個の原理を学習済み
          </span>
          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="学習の進捗"
          >
            <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
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

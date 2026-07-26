import { CATEGORY_LABELS, type PrincipleCategory } from "../principles/types";
import { principlesByCategory, allPrinciples } from "../principles/registry";
import { PrincipleCard } from "../components/PrincipleCard";
import { useVisitedPrinciples } from "../hooks/useVisitedPrinciples";
import styles from "./HomePage.module.css";

const CATEGORY_ORDER: PrincipleCategory[] = ["decision", "social", "money-time"];

export function HomePage() {
  const { isVisited, visited } = useVisitedPrinciples();

  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>くせラボ</h1>
        <p className={styles.heroLead}>
          人はなぜ、いつも「合理的」に選べないのか。行動経済学の原理を1つずつ、イラストと自分で試せるミニ体験で学べるサイトです。読むだけでなく、実際にクリックして自分の中の「くせ」に気づいてみましょう。
        </p>
        <span className={styles.progress}>
          {visited.size} / {allPrinciples.length} 個の原理を学習済み
        </span>
      </section>

      {CATEGORY_ORDER.map((category) => (
        <section className={styles.section} key={category}>
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

import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { Principle } from "../principles/types";
import styles from "./PrincipleCard.module.css";

interface PrincipleCardProps {
  principle: Principle;
  visited: boolean;
}

export function PrincipleCard({ principle, visited }: PrincipleCardProps) {
  const style = { "--accent": `var(${principle.accentVar})` } as CSSProperties;
  return (
    <Link to={`/principles/${principle.slug}`} className={styles.card} style={style}>
      {visited && (
        <span className={styles.check} aria-label="学習済み">
          ✓
        </span>
      )}
      <div className={styles.bar} />
      <h3 className={styles.title}>{principle.title}</h3>
      <p className={styles.summary}>{principle.shortSummary}</p>
    </Link>
  );
}

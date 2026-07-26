import { Link } from "react-router-dom";
import type { Principle } from "../principles/types";
import styles from "./PrevNextNav.module.css";

interface PrevNextNavProps {
  prev: Principle | null;
  next: Principle | null;
}

export function PrevNextNav({ prev, next }: PrevNextNavProps) {
  return (
    <nav className={styles.nav} aria-label="前後の原理">
      {prev ? (
        <Link to={`/principles/${prev.slug}`} className={styles.link}>
          <span className={styles.label}>← 前の原理</span>
          <span className={styles.title}>{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={`/principles/${next.slug}`} className={`${styles.link} ${styles.linkNext}`}>
          <span className={styles.label}>次の原理 →</span>
          <span className={styles.title}>{next.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

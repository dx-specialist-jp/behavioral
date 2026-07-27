import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="20" width="140" height="60" fill="none" stroke="var(--color-border-strong)" strokeWidth="4" />
      <line x1="30" y1="20" x2="30" y2="80" stroke="var(--color-border-strong)" strokeWidth="4" />
      <line x1="170" y1="20" x2="170" y2="80" stroke="var(--color-border-strong)" strokeWidth="4" />

      <line x1="10" y1="100" x2="190" y2="100" stroke="var(--color-text-muted)" strokeWidth="2" />

      <g className={styles.keeper}>
        <circle cx="100" cy="45" r="8" fill="var(--accent)" />
        <line x1="100" y1="53" x2="100" y2="70" stroke="var(--accent)" strokeWidth="4" />
        <line x1="100" y1="58" x2="82" y2="46" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="58" x2="118" y2="46" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="70" x2="88" y2="80" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
        <line x1="100" y1="70" x2="112" y2="80" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
      </g>

      <circle cx="100" cy="105" r="7" fill="var(--color-text-muted)" />
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="122" x2="190" y2="122" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="70" y="26" width="60" height="96" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <rect x="70" y="26" width="60" height="96" fill="var(--color-text-muted)" opacity="0.2" />

      <g className={styles.bigShape}>
        <rect x="34" y="40" width="34" height="34" rx="4" fill="var(--color-text-muted)" />
        <line x1="34" y1="40" x2="68" y2="74" stroke="var(--color-surface)" strokeWidth="3" />
        <line x1="68" y1="40" x2="34" y2="74" stroke="var(--color-surface)" strokeWidth="3" />
      </g>

      <g className={styles.smallShape}>
        <circle cx="150" cy="90" r="14" fill="var(--accent)" />
      </g>
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="122" x2="190" y2="122" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="40" y="70" width="70" height="34" rx="4" fill="var(--accent)" />
      <circle cx="56" cy="108" r="9" fill="var(--color-text-muted)" />
      <circle cx="94" cy="108" r="9" fill="var(--color-text-muted)" />
      <rect x="46" y="52" width="18" height="20" fill="var(--accent)" opacity="0.85" />

      <g className={styles.rider1}>
        <circle cx="55" cy="60" r="7" fill="var(--color-text-muted)" />
        <rect x="49" y="66" width="12" height="14" rx="3" fill="var(--color-text-muted)" />
      </g>
      <g className={styles.rider2}>
        <circle cx="80" cy="58" r="7" fill="var(--color-text-muted)" />
        <rect x="74" y="64" width="12" height="14" rx="3" fill="var(--color-text-muted)" />
      </g>

      <g className={styles.chaser}>
        <circle cx="150" cy="106" r="8" fill="var(--color-border-strong)" opacity="0.8" />
        <rect x="144" y="112" width="12" height="10" rx="3" fill="var(--color-border-strong)" opacity="0.8" />
      </g>
    </svg>
  );
}

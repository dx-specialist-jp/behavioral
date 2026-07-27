import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="34" r="20" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />
      <circle cx="150" cy="34" r="2" fill="var(--color-text-muted)" />
      <g className={styles.hand}>
        <line x1="150" y1="34" x2="150" y2="21" stroke="var(--color-text-muted)" strokeWidth="2.5" />
        <line x1="150" y1="34" x2="163" y2="40" stroke="var(--accent)" strokeWidth="2.5" />
      </g>
      <text x="150" y="66" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        前日 深夜
      </text>

      <rect x="30" y="86" width="60" height="38" rx="4" fill="var(--color-border-strong)" opacity="0.5" />
      <line x1="38" y1="98" x2="82" y2="98" stroke="var(--color-surface)" strokeWidth="2" />
      <line x1="38" y1="108" x2="82" y2="108" stroke="var(--color-surface)" strokeWidth="2" />

      <g className={styles.phone}>
        <rect x="46" y="70" width="34" height="52" rx="7" fill="var(--accent)" />
        <rect x="50" y="76" width="26" height="36" rx="2" fill="var(--color-surface)" opacity="0.85" />
      </g>
    </svg>
  );
}

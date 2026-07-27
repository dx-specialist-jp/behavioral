import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="118" x2="20" y2="20" stroke="var(--color-border-strong)" strokeWidth="2" />
      <line x1="20" y1="118" x2="188" y2="118" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="45" y="40" width="34" height="78" fill="var(--accent)" />
      <text x="62" y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--accent)">
        自信 99%
      </text>

      <rect x="110" y="80" width="34" height="38" fill="var(--color-text-muted)" opacity="0.8" />
      <text x="127" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-text-muted)">
        実際の正答率
      </text>

      <g className={styles.gap}>
        <line x1="62" y1="40" x2="127" y2="80" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeDasharray="4 3" />
      </g>
    </svg>
  );
}

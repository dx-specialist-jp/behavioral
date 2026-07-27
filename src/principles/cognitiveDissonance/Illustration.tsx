import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="34" width="70" height="46" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="51" y="53" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        信じている
      </text>
      <text x="51" y="68" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        こと
      </text>
      <polygon points="40,80 30,96 52,86" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="114" y="34" width="70" height="46" rx="10" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="149" y="53" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        実際の
      </text>
      <text x="149" y="68" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        行動
      </text>
      <polygon points="160,80 170,96 148,86" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />

      <g className={styles.bolt}>
        <polygon points="103,40 92,70 100,70 90,100 112,66 102,66" fill="var(--accent)" />
      </g>
    </svg>
  );
}

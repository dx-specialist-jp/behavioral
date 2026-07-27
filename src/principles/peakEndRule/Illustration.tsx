import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="14" y1="112" x2="186" y2="112" stroke="var(--color-border-strong)" strokeWidth="2" />

      <polyline
        points="14,100 40,88 66,40 92,78 118,70 144,96 170,58 186,80"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g className={styles.peak}>
        <circle cx="66" cy="40" r="7" fill="var(--accent)" />
        <text x="66" y="26" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--accent)">
          ピーク
        </text>
      </g>

      <g className={styles.end}>
        <circle cx="186" cy="80" r="7" fill="var(--accent)" />
        <text x="168" y="102" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--accent)">
          終わり
        </text>
      </g>
    </svg>
  );
}

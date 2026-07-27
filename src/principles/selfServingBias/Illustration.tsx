import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="86" r="14" fill="var(--color-text-muted)" />
      <rect x="82" y="100" width="36" height="30" rx="10" fill="var(--color-text-muted)" />

      <g className={styles.trophy}>
        <path d="M28 26 h24 v10 a12 12 0 0 1 -24 0 z" fill="var(--accent)" />
        <rect x="37" y="46" width="6" height="10" fill="var(--accent)" />
        <rect x="28" y="56" width="24" height="6" rx="2" fill="var(--accent)" />
      </g>
      <text x="40" y="76" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        成功
      </text>

      <g className={styles.cloud}>
        <circle cx="150" cy="34" r="10" fill="var(--color-border-strong)" />
        <circle cx="163" cy="29" r="13" fill="var(--color-border-strong)" />
        <circle cx="177" cy="34" r="10" fill="var(--color-border-strong)" />
        <rect x="148" y="33" width="34" height="11" rx="5" fill="var(--color-border-strong)" />
      </g>
      <text x="163" y="76" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        失敗
      </text>

      <path
        d="M46 58 Q70 75 87 83"
        stroke="var(--color-text-muted)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 3"
      />
      <polygon points="87,83 79,80 84,88" fill="var(--color-text-muted)" />

      <path
        d="M112 83 Q138 68 154 50"
        stroke="var(--color-text-muted)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 3"
      />
      <polygon points="154,50 145,52 150,44" fill="var(--color-text-muted)" />
    </svg>
  );
}

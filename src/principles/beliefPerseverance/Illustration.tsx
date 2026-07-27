import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="118" x2="180" y2="118" stroke="var(--color-border-strong)" strokeWidth="2" />

      <g className={styles.tower}>
        <rect x="75" y="34" width="50" height="20" rx="3" fill="var(--color-text-muted)" />
        <rect x="75" y="56" width="50" height="20" rx="3" fill="var(--color-text-muted)" />
        <rect x="75" y="78" width="50" height="20" rx="3" fill="var(--color-text-muted)" />
      </g>

      <g className={styles.brick}>
        <rect x="75" y="100" width="50" height="18" rx="3" fill="var(--accent)" />
        <text x="100" y="113" textAnchor="middle" fontSize="9" fill="#fff">
          根拠
        </text>
      </g>

      <path
        d="M60 109 H40"
        stroke="var(--color-text-muted)"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      <polygon points="40,109 48,105 48,113" fill="var(--color-text-muted)" />
    </svg>
  );
}

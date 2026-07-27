import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="122" x2="190" y2="122" stroke="var(--color-border-strong)" strokeWidth="2" />

      <g className={styles.figure}>
        <circle cx="100" cy="46" r="16" fill="var(--accent)" />
        <path d="M74 100 Q100 62 126 100 Z" fill="var(--accent)" opacity="0.85" />
        <rect x="90" y="60" width="20" height="14" fill="var(--color-surface)" />
        <text x="100" y="71" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--accent)">
          Dr
        </text>
      </g>

      <circle cx="46" cy="104" r="12" fill="var(--color-text-muted)" opacity="0.9" />
      <path d="M32 122 Q46 100 60 122 Z" fill="var(--color-text-muted)" opacity="0.9" />
      <circle cx="154" cy="104" r="12" fill="var(--color-text-muted)" opacity="0.9" />
      <path d="M140 122 Q154 100 168 122 Z" fill="var(--color-text-muted)" opacity="0.9" />

      <path
        className={styles.bow}
        d="M60 96 Q80 74 90 66"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      <path
        className={styles.bow}
        d="M140 96 Q120 74 110 66"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

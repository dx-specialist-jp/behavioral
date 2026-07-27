import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="118" x2="190" y2="118" stroke="var(--color-border-strong)" strokeWidth="2" />

      <circle cx="50" cy="90" r="14" fill="var(--color-text-muted)" opacity="0.7" />
      <line x1="50" y1="104" x2="50" y2="118" stroke="var(--color-text-muted)" strokeWidth="3" opacity="0.7" />

      <g className={styles.push}>
        <path d="M70 90 L96 90" stroke="var(--accent)" strokeWidth="3" />
        <polygon points="96,90 88,84 88,96" fill="var(--accent)" />
      </g>

      <circle cx="140" cy="90" r="14" fill="var(--accent)" />
      <line x1="140" y1="104" x2="140" y2="118" stroke="var(--accent)" strokeWidth="3" />

      <path
        d="M120 55 Q140 30 160 55"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
      <text x="140" y="26" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        より良い選択へ
      </text>
    </svg>
  );
}

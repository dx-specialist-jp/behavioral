import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 115 L60 45 L90 80 L120 30 L185 115 Z"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="2.5"
      />
      <line x1="10" y1="115" x2="190" y2="115" stroke="var(--color-border-strong)" strokeWidth="2" />

      <g className={styles.figure}>
        <circle cx="60" cy="38" r="7" fill="var(--accent)" />
        <line x1="60" y1="45" x2="60" y2="60" stroke="var(--accent)" strokeWidth="3" />
      </g>
      <text x="60" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--accent)">
        「もう分かった」
      </text>

      <circle cx="120" cy="24" r="6" fill="var(--color-text-muted)" />
      <line x1="120" y1="30" x2="120" y2="42" stroke="var(--color-text-muted)" strokeWidth="3" />
      <text x="120" y="14" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        本当の頂上
      </text>
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 100 A70 70 0 0 1 170 100"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <text x="34" y="118" fontSize="10" fill="var(--color-text-muted)">
        冷静
      </text>
      <text x="150" y="118" fontSize="10" fill="var(--color-text-muted)">
        感情的
      </text>

      <g className={styles.ghost}>
        <line x1="100" y1="100" x2="150" y2="52" stroke="var(--color-text-muted)" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="150" cy="52" r="4" fill="var(--color-text-muted)" />
      </g>

      <g className={styles.needle}>
        <line x1="100" y1="100" x2="62" y2="60" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="100" r="7" fill="var(--accent)" />
    </svg>
  );
}

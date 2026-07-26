import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <g className={styles.coin}>
        <circle cx="70" cy="20" r="7" fill="var(--accent)" />
      </g>
      <g className={styles.coin}>
        <circle cx="88" cy="20" r="7" fill="var(--accent)" />
      </g>
      <g className={styles.coin}>
        <circle cx="79" cy="20" r="7" fill="var(--accent)" />
      </g>

      <g className={styles.ship}>
        <path
          d="M55 95 L145 95 L130 118 L70 118 Z"
          fill="var(--color-text-muted)"
          opacity="0.85"
        />
        <line x1="100" y1="60" x2="100" y2="95" stroke="var(--color-text-muted)" strokeWidth="3" />
        <polygon points="100,62 100,85 122,88" fill="var(--color-text-muted)" opacity="0.6" />
        <circle cx="80" cy="104" r="5" fill="var(--color-bg)" />
      </g>

      <rect x="10" y="115" width="180" height="14" fill="var(--accent)" opacity="0.35" />
      <rect x="10" y="123" width="180" height="10" fill="var(--accent)" opacity="0.55" />
    </svg>
  );
}

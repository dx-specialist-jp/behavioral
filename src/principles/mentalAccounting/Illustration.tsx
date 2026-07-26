import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 55 h40 v55 a20 20 0 0 1 -40 0 Z" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />
      <rect x="30" y="80" width="30" height="9" rx="2" fill="var(--accent)" opacity="0.9" />
      <rect x="30" y="91" width="30" height="9" rx="2" fill="var(--accent)" opacity="0.9" />
      <rect x="30" y="102" width="30" height="9" rx="2" fill="var(--accent)" opacity="0.9" />
      <text x="45" y="45" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
        給料
      </text>

      <path d="M135 55 h40 v55 a20 20 0 0 1 -40 0 Z" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />
      <rect x="140" y="95" width="30" height="9" rx="2" fill="var(--accent)" opacity="0.9" />
      <rect x="140" y="106" width="30" height="9" rx="2" fill="var(--accent)" opacity="0.9" />
      <text x="155" y="45" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
        臨時収入
      </text>

      <g className={styles.flyingCoin}>
        <circle cx="150" cy="80" r="7" fill="var(--accent)" />
      </g>
      <rect x="182" y="60" width="14" height="14" rx="2" fill="var(--color-text-muted)" opacity="0.5" />
    </svg>
  );
}

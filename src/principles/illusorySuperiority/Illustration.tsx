import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="120" x2="190" y2="120" stroke="var(--color-border-strong)" strokeWidth="2" />
      <path
        d="M15 115 C 45 115, 60 30, 100 30 C 140 30, 155 115, 185 115"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="2.5"
      />
      <line x1="100" y1="118" x2="100" y2="34" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="3 4" />
      <text x="100" y="132" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        平均
      </text>

      <circle cx="122" cy="70" r="4" fill="var(--color-text-muted)" opacity="0.6" />
      <circle cx="132" cy="58" r="4" fill="var(--color-text-muted)" opacity="0.6" />
      <circle cx="118" cy="52" r="4" fill="var(--color-text-muted)" opacity="0.6" />
      <circle cx="140" cy="72" r="4" fill="var(--color-text-muted)" opacity="0.6" />

      <g className={styles.self}>
        <circle cx="130" cy="40" r="7" fill="var(--accent)" />
        <text x="130" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--accent)">
          自分
        </text>
      </g>
    </svg>
  );
}

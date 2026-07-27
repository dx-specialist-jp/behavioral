import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="118" x2="190" y2="118" stroke="var(--color-border-strong)" strokeWidth="2" />
      <rect x="20" y="90" width="18" height="28" rx="3" fill="var(--color-text-muted)" opacity="0.5" />
      <rect x="45" y="82" width="18" height="36" rx="3" fill="var(--color-text-muted)" opacity="0.5" />
      <rect x="70" y="94" width="18" height="24" rx="3" fill="var(--color-text-muted)" opacity="0.5" />
      <rect x="95" y="86" width="18" height="32" rx="3" fill="var(--color-text-muted)" opacity="0.5" />
      <rect x="120" y="90" width="18" height="28" rx="3" fill="var(--color-text-muted)" opacity="0.5" />

      <g className={styles.heavy}>
        <rect x="150" y="34" width="24" height="84" rx="3" fill="var(--accent)" />
        <text x="162" y="30" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--accent)">
          !
        </text>
      </g>
      <text x="100" y="132" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        良い出来事5つより、悪い出来事1つが重い
      </text>
    </svg>
  );
}

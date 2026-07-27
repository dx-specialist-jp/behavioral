import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" y1="20" x2="100" y2="50" stroke="var(--color-border-strong)" strokeWidth="4" />
      <path d="M85 50 L115 50 L100 62 Z" fill="var(--color-border-strong)" />

      <g className={styles.beam}>
        <line x1="30" y1="50" x2="170" y2="50" stroke="var(--color-border-strong)" strokeWidth="4" />

        <line x1="30" y1="50" x2="30" y2="78" stroke="var(--color-text-muted)" strokeWidth="2" />
        <circle cx="30" cy="90" r="22" fill="var(--accent)" opacity="0.85" />
        <text x="30" y="94" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          行動による害
        </text>

        <line x1="170" y1="50" x2="170" y2="88" stroke="var(--color-text-muted)" strokeWidth="2" />
        <circle cx="170" cy="100" r="22" fill="var(--color-text-muted)" opacity="0.5" />
        <text x="170" y="104" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-text)">
          何もせず害
        </text>
      </g>
    </svg>
  );
}

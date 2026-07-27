import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="70" x2="185" y2="70" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <text x="18" y="30" fontSize="9" fill="var(--color-text-muted)">
        予測
      </text>
      <path
        d="M15 70 C35 70 40 15 60 15 C80 15 85 70 105 70 C125 70 130 15 150 15 C165 15 170 55 185 70"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeDasharray="6 5"
        opacity="0.85"
      />

      <text x="18" y="95" fontSize="9" fill="var(--color-text-muted)">
        実際
      </text>
      <g className={styles.wave}>
        <path
          d="M15 82 C35 82 40 68 60 68 C80 68 85 82 105 82 C125 82 130 68 150 68 C165 68 170 78 185 82"
          fill="none"
          stroke="var(--color-text-muted)"
          strokeWidth="3"
        />
      </g>

      <line x1="15" y1="118" x2="185" y2="118" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="185" y="130" textAnchor="end" fontSize="9" fill="var(--color-text-muted)">
        時間
      </text>
    </svg>
  );
}

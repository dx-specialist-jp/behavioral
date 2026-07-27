import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <g className={styles.shield}>
        <path
          d="M120 24 L156 36 V70 C156 96 138 112 120 120 C102 112 84 96 84 70 V36 Z"
          fill="var(--accent)"
          opacity="0.9"
        />
        <text x="120" y="78" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff">
          !
        </text>
      </g>

      <g className={styles.arrow}>
        <line x1="20" y1="70" x2="72" y2="70" stroke="var(--color-text-muted)" strokeWidth="3" />
        <polygon points="72,70 62,64 62,76" fill="var(--color-text-muted)" />
      </g>
      <text x="40" y="56" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        事実
      </text>
    </svg>
  );
}

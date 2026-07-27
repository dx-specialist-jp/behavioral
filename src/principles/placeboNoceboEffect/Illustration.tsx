import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(58, 70) rotate(-30)">
        <rect x="-22" y="-11" width="44" height="22" rx="11" fill="var(--accent)" />
        <path d="M0 -11 V11" stroke="var(--color-surface)" strokeWidth="1.5" />
      </g>
      <g className={styles.up}>
        <line x1="58" y1="46" x2="58" y2="24" stroke="var(--color-text-muted)" strokeWidth="2.5" />
        <polygon points="58,20 52,30 64,30" fill="var(--color-text-muted)" />
      </g>
      <path d="M46 20 a12 12 0 0 1 24 0" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" />
      <text x="58" y="106" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        プラセボ
      </text>

      <g transform="translate(142, 70) rotate(-30)">
        <rect x="-22" y="-11" width="44" height="22" rx="11" fill="var(--accent)" />
        <path d="M0 -11 V11" stroke="var(--color-surface)" strokeWidth="1.5" />
      </g>
      <g className={styles.down}>
        <line x1="142" y1="46" x2="142" y2="24" stroke="var(--color-text-muted)" strokeWidth="2.5" />
        <polygon points="142,50 136,40 148,40" fill="var(--color-text-muted)" />
      </g>
      <path d="M130 20 a12 12 0 0 0 24 0" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" />
      <text x="142" y="106" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        ノセボ
      </text>
    </svg>
  );
}

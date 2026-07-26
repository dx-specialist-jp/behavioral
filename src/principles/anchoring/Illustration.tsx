import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      <g className={styles.balloon}>
        <line x1="70" y1="58" x2="128" y2="100" stroke="var(--color-text-muted)" strokeWidth="2" />
        <circle cx="70" cy="42" r="22" fill="var(--accent)" opacity="0.85" />
        <text x="70" y="48" textAnchor="middle" fontSize="18" fontWeight="700" fill="#fff">
          ?
        </text>
      </g>

      <g className={styles.weight}>
        <circle cx="128" cy="108" r="28" fill="var(--color-text-muted)" opacity="0.9" />
        <text x="128" y="115" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
          65
        </text>
      </g>
    </svg>
  );
}

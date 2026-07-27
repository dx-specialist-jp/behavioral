import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="150" y="20" width="4" height="40" fill="var(--color-text-muted)" />
      <ellipse cx="152" cy="34" rx="26" ry="6" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />
      <line x1="126" y1="34" x2="126" y2="60" stroke="var(--color-text-muted)" strokeWidth="2" />
      <line x1="178" y1="34" x2="178" y2="60" stroke="var(--color-text-muted)" strokeWidth="2" />

      <g className={styles.ball}>
        <circle cx="70" cy="95" r="16" fill="var(--accent)" />
        <path d="M56 95 H84 M70 81 V109 M60 84 Q70 95 60 106 M80 84 Q70 95 80 106" stroke="#fff" strokeWidth="1.5" fill="none" />
      </g>

      <text x="70" y="130" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-text-muted)">
        3連続シュート成功
      </text>
    </svg>
  );
}

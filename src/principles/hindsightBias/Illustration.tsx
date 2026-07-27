import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="24" y1="108" x2="176" y2="108" stroke="var(--color-border-strong)" strokeWidth="3" strokeLinecap="round" />

      <circle cx="24" cy="108" r="14" fill="var(--color-surface)" stroke="var(--color-text-muted)" strokeWidth="2" />
      <text x="24" y="113" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-text-muted)">
        ?
      </text>
      <text x="24" y="132" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        当時
      </text>

      <circle cx="176" cy="108" r="14" fill="var(--accent)" />
      <path d="M169 108 L174 113 L184 102" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="176" y="132" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        結果を知った今
      </text>

      <path
        className={styles.arrow}
        d="M172 92 C 130 34, 70 34, 30 90"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeDasharray="6 5"
        strokeLinecap="round"
      />
      <path d="M30 90 L38 86 L34 96 Z" fill="var(--accent)" />
    </svg>
  );
}

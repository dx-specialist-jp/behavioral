import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="70" r="46" fill="none" stroke="var(--color-border-strong)" strokeWidth="4" />
      <circle cx="100" cy="70" r="3" fill="var(--color-text-muted)" />

      <line x1="100" y1="70" x2="100" y2="34" stroke="var(--color-text-muted)" strokeWidth="3" strokeLinecap="round" />

      <g className={styles.hand} style={{ transformOrigin: "100px 70px" }}>
        <line x1="100" y1="70" x2="128" y2="86" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
      </g>

      <text x="100" y="128" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-text-muted)">
        「今回は間に合う」
      </text>
    </svg>
  );
}

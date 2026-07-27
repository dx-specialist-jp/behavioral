import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="122" x2="190" y2="122" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="50" y="88" width="20" height="34" fill="var(--color-text-muted)" opacity="0.85" />
      <rect x="90" y="60" width="20" height="62" fill="var(--color-border-strong)" opacity="0.35" />
      <rect x="90" y="60" width="20" height="62" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="3 3" />
      <rect x="130" y="98" width="20" height="24" fill="var(--color-text-muted)" opacity="0.85" />

      <g className={styles.badge}>
        <circle cx="100" cy="34" r="22" fill="var(--accent)" />
        <text x="100" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
          残り
        </text>
        <text x="100" y="43" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
          1点
        </text>
      </g>
    </svg>
  );
}

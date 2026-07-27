import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="115" x2="185" y2="115" stroke="var(--color-border-strong)" strokeWidth="2" />
      <line
        x1="15"
        y1="95"
        x2="185"
        y2="95"
        stroke="var(--color-text-muted)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <text x="18" y="88" fontSize="9" fill="var(--color-text-muted)">
        幸福度のベースライン
      </text>

      <path
        d="M20 95 C45 95 50 32 78 32 C106 32 110 95 180 95"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2.5"
      />

      <g className={styles.mover}>
        <circle cx="78" cy="32" r="9" fill="var(--accent)" />
      </g>

      <text x="78" y="24" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        購入直後
      </text>
      <text x="165" y="128" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        数か月後
      </text>
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="70" r="12" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="24" y="74" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        開始
      </text>

      <line x1="35" y1="60" x2="90" y2="30" stroke="var(--color-text-muted)" strokeWidth="2" strokeDasharray="3 3" />
      <text x="60" y="24" textAnchor="middle" fontSize="8" fill="var(--color-text-muted)">
        75%: 終了
      </text>

      <line x1="35" y1="78" x2="90" y2="100" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="60" y="118" textAnchor="middle" fontSize="8" fill="var(--color-text-muted)">
        25%: 進める
      </text>

      <line x1="100" y1="100" x2="150" y2="100" stroke="var(--accent)" strokeWidth="3" />

      <g className={styles.badge}>
        <rect x="150" y="82" width="42" height="36" rx="6" fill="var(--accent)" />
        <text x="171" y="98" textAnchor="middle" fontSize="8" fill="#fff">
          確実
        </text>
        <text x="171" y="112" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          3,000円
        </text>
      </g>
    </svg>
  );
}

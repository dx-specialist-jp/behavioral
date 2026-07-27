import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="100" x2="180" y2="100" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="20" y="118" fontSize="10" fill="var(--color-text-muted)">
        今日
      </text>
      <text x="172" y="118" fontSize="10" fill="var(--color-text-muted)">
        締切
      </text>

      <path
        d="M20 90 L100 90 L130 70 L155 40 L180 20"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <g className={styles.dot}>
        <circle cx="180" cy="20" r="6" fill="var(--accent)" />
      </g>
      <text x="60" y="82" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        着手せず放置
      </text>
      <text x="150" y="55" textAnchor="middle" fontSize="10" fill="var(--accent)">
        直前に猛ダッシュ
      </text>
    </svg>
  );
}

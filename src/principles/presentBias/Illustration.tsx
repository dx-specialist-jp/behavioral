import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="100" x2="185" y2="100" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="20" y="118" fontSize="11" fill="var(--color-text-muted)">
        今日
      </text>
      <text x="150" y="118" fontSize="11" fill="var(--color-text-muted)">
        1週間後
      </text>

      <circle cx="60" cy="90" r="10" fill="var(--accent)" opacity="0.9" />
      <text x="60" y="94" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        1万
      </text>

      <circle cx="170" cy="80" r="14" fill="var(--accent)" opacity="0.4" />
      <text x="170" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-text)">
        1.1万
      </text>

      <g className={styles.reach}>
        <circle cx="40" cy="72" r="8" fill="var(--color-text-muted)" />
        <line x1="40" y1="80" x2="40" y2="98" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="40" y1="86" x2="55" y2="88" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="40" y1="98" x2="32" y2="98" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="40" y1="98" x2="48" y2="98" stroke="var(--color-text-muted)" strokeWidth="3" />
      </g>
    </svg>
  );
}

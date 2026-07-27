import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="55" y="30" width="90" height="70" rx="8" fill="none" stroke="var(--color-border-strong)" strokeWidth="3" />
      <circle cx="100" cy="65" r="26" fill="var(--accent)" opacity="0.15" />
      <text x="100" y="72" textAnchor="middle" fontSize="26" fontWeight="700" fill="var(--accent)">
        7
      </text>

      <g className={styles.handPress}>
        <line x1="100" y1="112" x2="100" y2="128" stroke="var(--color-text-muted)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="112" r="8" fill="var(--color-text-muted)" />
      </g>

      <text x="100" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text-muted)">
        自分で選んだ数字
      </text>
    </svg>
  );
}

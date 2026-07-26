import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <g className={styles.glow}>
        <rect x="70" y="45" width="40" height="40" rx="8" fill="none" stroke="var(--accent)" strokeWidth="3" />
      </g>
      <rect x="70" y="45" width="40" height="40" rx="8" fill="var(--accent)" />
      <path d="M78 66 L88 76 L104 54" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      <text x="90" y="105" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
        あらかじめチェック済み
      </text>

      <g className={styles.cursor}>
        <path d="M135 90 L135 112 L141 106 L146 116 L150 114 L145 104 L153 104 Z" fill="var(--color-text)" />
      </g>
    </svg>
  );
}

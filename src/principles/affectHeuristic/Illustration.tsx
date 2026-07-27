import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 中央のハート型（感情）から左右へ矢印が伸び、両方の判断に影響する様子 */}
      <g className={styles.heartbeat}>
        <path
          d="M100 48 C100 36 84 34 84 46 C84 56 100 66 100 66 C100 66 116 56 116 46 C116 34 100 36 100 48 Z"
          fill="var(--accent)"
        />
      </g>

      <line x1="88" y1="60" x2="48" y2="86" stroke="var(--color-text-muted)" strokeWidth="2" markerEnd="url(#arrow)" />
      <line x1="112" y1="60" x2="152" y2="86" stroke="var(--color-text-muted)" strokeWidth="2" markerEnd="url(#arrow)" />

      <rect x="24" y="88" width="56" height="26" rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <text x="52" y="105" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        リスク
      </text>

      <rect x="120" y="88" width="56" height="26" rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <text x="148" y="105" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        利益
      </text>
    </svg>
  );
}

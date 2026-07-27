import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 照明器具 */}
      <rect x="88" y="10" width="24" height="8" rx="2" fill="var(--color-text-muted)" />

      {/* スポットライトの光の円錐 */}
      <g className={styles.cone}>
        <polygon points="90,18 110,18 148,110 52,110" fill="var(--accent)" opacity="0.25" />
      </g>

      {/* 注目されている本人 */}
      <circle cx="100" cy="80" r="12" fill="var(--accent)" />
      <path d="M82 118 Q100 96 118 118 L118 126 L82 126 Z" fill="var(--accent)" />

      {/* 周囲の他人（見えていない・気づいていない） */}
      <circle cx="34" cy="98" r="7" fill="var(--color-text-muted)" opacity="0.55" />
      <path d="M24 122 Q34 110 44 122 Z" fill="var(--color-text-muted)" opacity="0.55" />

      <circle cx="166" cy="100" r="7" fill="var(--color-text-muted)" opacity="0.55" />
      <path d="M156 122 Q166 111 176 122 Z" fill="var(--color-text-muted)" opacity="0.55" />
    </svg>
  );
}

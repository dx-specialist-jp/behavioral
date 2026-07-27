import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 画びょうの箱（「容器」としてしか見られない物） */}
      <rect x="40" y="70" width="50" height="34" rx="4" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <circle cx="55" cy="86" r="3" fill="var(--color-text-muted)" />
      <circle cx="65" cy="90" r="3" fill="var(--color-text-muted)" />
      <circle cx="75" cy="84" r="3" fill="var(--color-text-muted)" />

      {/* ろうそく */}
      <rect x="120" y="50" width="12" height="40" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <g className={styles.flame}>
        <path d="M126 50 C122 44 122 38 126 32 C130 38 130 44 126 50 Z" fill="var(--accent)" />
      </g>

      {/* 箱を台として使う発想を示す点線の矢印 */}
      <path d="M75 68 C95 40 105 40 122 46" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 3" />
      <text x="98" y="34" textAnchor="middle" fontSize="16" fontWeight="700" fill="var(--accent)">
        ?
      </text>
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 後光(halo) */}
      <g className={styles.halo}>
        <ellipse cx="100" cy="38" rx="26" ry="10" fill="none" stroke="var(--accent)" strokeWidth="4" />
      </g>

      {/* 人物 */}
      <circle cx="100" cy="52" r="14" fill="var(--color-text-muted)" />
      <path d="M76 100 Q100 74 124 100 L124 108 L76 108 Z" fill="var(--color-text-muted)" />

      {/* halo から伸びる光の線 */}
      <line x1="88" y1="62" x2="60" y2="96" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
      <line x1="100" y1="66" x2="100" y2="96" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
      <line x1="112" y1="62" x2="140" y2="96" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

      {/* 無関係な評価項目チップ（すべて accent 色に染まっている＝スピルオーバー） */}
      <rect x="42" y="98" width="36" height="16" rx="4" fill="var(--accent)" opacity="0.85" />
      <rect x="82" y="98" width="36" height="16" rx="4" fill="var(--accent)" opacity="0.85" />
      <rect x="122" y="98" width="36" height="16" rx="4" fill="var(--accent)" opacity="0.85" />
      <text x="60" y="110" textAnchor="middle" fontSize="9" fill="#fff">知性</text>
      <text x="100" y="110" textAnchor="middle" fontSize="9" fill="#fff">誠実</text>
      <text x="140" y="110" textAnchor="middle" fontSize="9" fill="#fff">実力</text>
    </svg>
  );
}

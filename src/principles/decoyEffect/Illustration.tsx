import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 左: 普通の選択肢 */}
      <rect x="16" y="80" width="46" height="42" rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="39" y="98" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        Web版
      </text>
      <text x="39" y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text)">
        590円
      </text>

      {/* 中央: おとり（劣った選択肢、バツ印） */}
      <g opacity="0.55">
        <rect x="77" y="70" width="46" height="52" rx="6" fill="none" stroke="var(--color-border-strong)" strokeWidth="2" strokeDasharray="5 4" />
        <text x="100" y="90" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
          印刷版のみ
        </text>
        <text x="100" y="106" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text-muted)">
          1,250円
        </text>
        <line x1="81" y1="74" x2="119" y2="118" stroke="var(--color-text-muted)" strokeWidth="2" />
        <line x1="119" y1="74" x2="81" y2="118" stroke="var(--color-text-muted)" strokeWidth="2" />
      </g>

      {/* 右: おとりによって引き立つ本命 */}
      <g className={styles.winner}>
        <rect x="138" y="60" width="48" height="62" rx="6" fill="var(--accent)" />
        <text x="162" y="82" textAnchor="middle" fontSize="9" fill="#fff">
          Web+印刷
        </text>
        <text x="162" y="98" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
          1,250円
        </text>
      </g>
      <g className={styles.arrow}>
        <polygon points="162,40 155,52 169,52" fill="var(--accent)" />
      </g>
    </svg>
  );
}

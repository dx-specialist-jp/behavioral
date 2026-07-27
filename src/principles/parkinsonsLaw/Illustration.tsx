import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 20 H140 V100 Q140 116 100 116 Q60 116 60 100 Z"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="3"
      />
      <line x1="60" y1="20" x2="140" y2="20" stroke="var(--color-border-strong)" strokeWidth="3" />

      <clipPath id="jar-clip">
        <path d="M62 22 H138 V100 Q138 114 100 114 Q62 114 62 100 Z" />
      </clipPath>

      <g clipPath="url(#jar-clip)">
        <rect className={styles.fill} x="62" y="60" width="76" height="60" fill="var(--accent)" opacity="0.75" />
      </g>

      <text x="100" y="132" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        与えられた時間いっぱいに膨張する仕事
      </text>
    </svg>
  );
}

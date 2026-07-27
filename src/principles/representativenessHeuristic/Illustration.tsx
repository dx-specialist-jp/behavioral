import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 「全体」を表す大きな円 */}
      <circle cx="78" cy="62" r="46" fill="none" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="40" y="26" fontSize="11" fill="var(--color-text-muted)">
        銀行員
      </text>

      {/* 論理的にはあり得ないほど大きく見えてしまう「部分」の円 */}
      <g className={styles.pulse}>
        <circle cx="112" cy="80" r="34" fill="var(--accent)" opacity="0.85" />
        <text x="112" y="84" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
          らしさ
        </text>
      </g>

      <text x="150" y="34" fontSize="20" fontWeight="700" fill="var(--color-text-muted)">
        ?
      </text>
    </svg>
  );
}

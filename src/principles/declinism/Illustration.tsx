import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="24" y1="20" x2="24" y2="112" stroke="var(--color-border-strong)" strokeWidth="2" />
      <line x1="24" y1="112" x2="184" y2="112" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 「そう感じている」下降ライン（印象・体感） */}
      <path
        d="M34 50 L64 62 L94 58 L124 78 L154 74 L176 96"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="2.5"
        strokeDasharray="4 4"
      />
      <text x="176" y="90" textAnchor="end" fontSize="9" fill="var(--color-text-muted)">
        体感
      </text>

      {/* 実際の上昇ライン（データ・現実） */}
      <path
        className={styles.risingLine}
        d="M34 96 L64 88 L94 80 L124 62 L154 46 L176 30"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text x="176" y="24" textAnchor="end" fontSize="9" fontWeight="700" fill="var(--accent)">
        実際のデータ
      </text>
    </svg>
  );
}

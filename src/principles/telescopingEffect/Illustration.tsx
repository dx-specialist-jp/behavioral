import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      {/* タイムライン */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="var(--color-border-strong)" strokeWidth="2" />
      <circle cx="30" cy="100" r="5" fill="var(--color-text-muted)" />
      <text x="30" y="118" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">過去</text>
      <circle cx="170" cy="100" r="5" fill="var(--accent)" />
      <text x="170" y="118" textAnchor="middle" fontSize="9" fill="var(--accent)">今</text>

      {/* 実際の距離（長い矢印） */}
      <line x1="38" y1="90" x2="162" y2="90" stroke="var(--color-text-muted)" strokeWidth="2" strokeDasharray="3 3" />
      <text x="100" y="82" textAnchor="middle" fontSize="8" fill="var(--color-text-muted)">実際の距離</text>

      {/* 望遠鏡レンズ（距離を歪めて見せる） */}
      <g className={styles.lens}>
        <ellipse cx="100" cy="60" rx="34" ry="22" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" strokeWidth="2" />
      </g>
      <text x="100" y="64" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--accent)">
        感じる距離
      </text>

      {/* レンズを通して圧縮された矢印 */}
      <line x1="80" y1="60" x2="120" y2="60" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

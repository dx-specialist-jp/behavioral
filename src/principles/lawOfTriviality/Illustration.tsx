export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 巨大で重要な議題（時間は短い） */}
      <rect x="24" y="50" width="70" height="40" rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="59" y="66" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        重要な議題
      </text>
      <text x="59" y="80" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-text-muted)">
        1分
      </text>

      {/* 些細な議題（時間は長い、アクセントカラーで強調） */}
      <rect x="112" y="34" width="64" height="56" rx="6" fill="var(--accent)" opacity="0.9" />
      <text x="144" y="58" textAnchor="middle" fontSize="9" fill="#fff">
        些細な議題
      </text>
      <text x="144" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
        45分
      </text>
    </svg>
  );
}

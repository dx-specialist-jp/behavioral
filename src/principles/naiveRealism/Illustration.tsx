export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 中央の図形。見る角度によって印象が変わることを示す */}
      <rect x="85" y="45" width="30" height="50" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 左の人：自分には「客観的な真実」が見えていると思っている */}
      <circle cx="40" cy="70" r="16" fill="var(--accent)" opacity="0.9" />
      <path d="M40 86 L70 66" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 3" />
      <text x="40" y="74" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        真実
      </text>

      {/* 右の人：違う見方をする相手は「偏っている」と思われがち */}
      <circle cx="160" cy="70" r="16" fill="var(--color-text-muted)" opacity="0.9" />
      <path d="M160 86 L130 66" stroke="var(--color-text-muted)" strokeWidth="2" strokeDasharray="3 3" />
      <text x="160" y="74" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        偏見?
      </text>
    </svg>
  );
}

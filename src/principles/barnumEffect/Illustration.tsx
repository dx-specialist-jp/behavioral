export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 一枚のカード（診断結果）から複数の人へ同じ矢印が伸びる */}
      <rect x="80" y="26" width="40" height="30" rx="4" fill="var(--accent)" opacity="0.9" />
      <text x="100" y="45" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">
        診断
      </text>

      <circle cx="35" cy="100" r="16" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <circle cx="100" cy="108" r="16" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <circle cx="165" cy="100" r="16" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />

      <line x1="88" y1="54" x2="42" y2="86" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="100" y1="56" x2="100" y2="94" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="112" y1="54" x2="158" y2="86" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeDasharray="3 3" />

      <text x="35" y="104" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text-muted)">
        私だ!
      </text>
      <text x="100" y="112" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text-muted)">
        私だ!
      </text>
      <text x="165" y="104" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text-muted)">
        私だ!
      </text>
    </svg>
  );
}

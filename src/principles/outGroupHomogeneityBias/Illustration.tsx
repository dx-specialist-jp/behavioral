export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <text x="55" y="28" textAnchor="middle" fontSize="10" fill="var(--accent)">
        自分たち
      </text>
      <g fill="var(--accent)">
        <circle cx="30" cy="55" r="9" />
        <rect x="50" y="46" width="18" height="18" rx="3" />
        <path d="M85 64 L95 46 L105 64 Z" />
      </g>

      <text x="150" y="28" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        あの人たち
      </text>
      <g fill="var(--color-text-muted)">
        <circle cx="130" cy="55" r="9" />
        <circle cx="150" cy="55" r="9" />
        <circle cx="170" cy="55" r="9" />
      </g>

      <line x1="15" y1="90" x2="185" y2="90" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />

      <text x="100" y="112" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        本当は同じくらい多様
      </text>
      <g fill="var(--color-border-strong)" opacity="0.5">
        <circle cx="130" cy="90" r="0" />
      </g>
    </svg>
  );
}

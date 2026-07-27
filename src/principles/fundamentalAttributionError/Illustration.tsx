export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="55" r="16" fill="var(--accent)" />
      <rect x="58" y="72" width="24" height="30" rx="6" fill="var(--accent)" />

      <path
        d="M100 40 Q112 40 112 52"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="2"
        markerEnd="url(#arrow)"
      />
      <circle cx="140" cy="55" r="18" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="140" y="60" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-text-muted)">
        性格
      </text>

      <line x1="30" y1="115" x2="110" y2="115" stroke="var(--color-border-strong)" strokeWidth="2" strokeDasharray="3 4" />
      <text x="70" y="128" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        見えていない状況
      </text>

      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="var(--color-text-muted)" />
        </marker>
      </defs>
    </svg>
  );
}

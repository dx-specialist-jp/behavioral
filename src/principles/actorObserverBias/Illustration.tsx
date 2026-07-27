export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" y1="15" x2="100" y2="125" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />

      <circle cx="55" cy="45" r="14" fill="var(--accent)" />
      <rect x="43" y="60" width="24" height="28" rx="6" fill="var(--accent)" />
      <text x="55" y="108" textAnchor="middle" fontSize="10" fill="var(--accent)">
        自分
      </text>
      <text x="55" y="122" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        「電車が遅れた」
      </text>

      <circle cx="145" cy="45" r="14" fill="var(--color-text-muted)" />
      <rect x="133" y="60" width="24" height="28" rx="6" fill="var(--color-text-muted)" />
      <text x="145" y="108" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        他人
      </text>
      <text x="145" y="122" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        「だらしない人」
      </text>
    </svg>
  );
}

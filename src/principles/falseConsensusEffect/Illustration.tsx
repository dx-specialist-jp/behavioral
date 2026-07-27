export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="65" cy="55" r="20" fill="var(--accent)" />
      <text x="65" y="61" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
        自分
      </text>

      <g stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6">
        <circle cx="65" cy="55" r="45" fill="none" />
      </g>

      <g fill="var(--accent)" opacity="0.4">
        <circle cx="105" cy="30" r="10" />
        <circle cx="115" cy="70" r="10" />
        <circle cx="90" cy="95" r="10" />
        <circle cx="35" cy="95" r="10" />
      </g>

      <text x="65" y="120" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        「みんな自分と同じはず」
      </text>

      <g fill="var(--color-text-muted)" opacity="0.5">
        <circle cx="170" cy="40" r="8" />
        <circle cx="170" cy="65" r="8" />
        <circle cx="170" cy="90" r="8" />
      </g>
      <text x="170" y="112" textAnchor="middle" fontSize="8" fill="var(--color-text-muted)">
        実際は分からない
      </text>
    </svg>
  );
}

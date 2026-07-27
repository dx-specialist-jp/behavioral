export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="34" fill="var(--accent)" opacity="0.18" />
      <circle cx="150" cy="80" r="30" fill="var(--color-text-muted)" opacity="0.14" />

      <g fill="var(--accent)">
        <circle cx="48" cy="55" r="9" />
        <circle cx="70" cy="50" r="9" />
        <circle cx="60" cy="75" r="9" />
      </g>

      <g fill="var(--color-text-muted)">
        <circle cx="140" cy="70" r="8" />
        <circle cx="160" cy="75" r="8" />
        <circle cx="150" cy="95" r="8" />
      </g>

      <path
        d="M92 60 C100 55, 108 55, 116 62"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeDasharray="3 4"
      />
      <text x="60" y="112" textAnchor="middle" fontSize="10" fill="var(--accent)">
        自分たち
      </text>
      <text x="150" y="122" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        あの人たち
      </text>
    </svg>
  );
}

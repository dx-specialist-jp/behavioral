export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="45" cy="55" r="16" fill="var(--accent)" />
      <path d="M45 40 L45 30 M38 34 L45 30 L52 34" stroke="var(--accent)" strokeWidth="2" fill="none" />
      <text x="45" y="90" textAnchor="middle" fontSize="20" fill="var(--accent)">
        ♥
      </text>
      <text x="45" y="112" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        1人 → 心が動く
      </text>

      <g fill="var(--color-text-muted)" opacity="0.55">
        {Array.from({ length: 24 }, (_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          return <circle key={i} cx={120 + col * 12} cy={35 + row * 12} r="4" />;
        })}
      </g>
      <text x="150" y="112" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        大人数 → ただの数字
      </text>
    </svg>
  );
}

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="140" height="18" rx="9" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <rect x="30" y="30" width="140" height="18" rx="9" fill="var(--accent)" opacity="0.85" />
      <text x="100" y="43" textAnchor="middle" fontSize="10" fill="#fff">
        タスクの責任 100%
      </text>

      {/* 5人に分割された責任の帯 */}
      <g>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={30 + i * 28}
            y={80}
            width={24}
            height={18}
            rx="6"
            fill="var(--accent)"
            opacity={0.85 - i * 0.12}
          />
        ))}
      </g>
      <g fill="var(--color-text-muted)" fontSize="9">
        <text x="42" y="93" textAnchor="middle" fill="#fff">
          20%
        </text>
        <text x="70" y="93" textAnchor="middle" fill="#fff">
          20%
        </text>
        <text x="98" y="93" textAnchor="middle" fill="#fff">
          20%
        </text>
        <text x="126" y="93" textAnchor="middle" fill="#fff">
          20%
        </text>
        <text x="154" y="93" textAnchor="middle" fill="#fff">
          20%
        </text>
      </g>

      <text x="100" y="118" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        人数が増えるほど、一人分は薄まる
      </text>
    </svg>
  );
}

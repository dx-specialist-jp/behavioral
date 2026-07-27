import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="120" y="30" width="60" height="46" rx="4" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={128 + col * 16}
            y={38 + row * 12}
            width="10"
            height="8"
            rx="1.5"
            fill="var(--color-text-muted)"
            opacity="0.5"
          />
        )),
      )}
      <text x="150" y="86" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        来週の予定
      </text>

      <circle cx="55" cy="50" r="26" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <path d="M45 44 q10 -10 20 0" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="46" cy="52" r="2.2" fill="var(--color-text-muted)" />
      <circle cx="64" cy="52" r="2.2" fill="var(--color-text-muted)" />
      <text x="55" y="24" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        今の自分
      </text>

      <g className={styles.pulse}>
        <path
          d="M55 76 Q90 40 118 52"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
      </g>
      <circle cx="55" cy="76" r="7" fill="var(--accent)" />
      <text x="55" y="79" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff">
        腹
      </text>

      <line x1="10" y1="120" x2="190" y2="120" stroke="var(--color-border-strong)" strokeWidth="2" />
    </svg>
  );
}

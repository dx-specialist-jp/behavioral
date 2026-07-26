import styles from "./Illustration.module.css";

function Mug({ x, filled }: { x: number; filled?: boolean }) {
  return (
    <g transform={`translate(${x}, 0)`}>
      <rect x="0" y="0" width="34" height="30" rx="4" fill={filled ? "var(--accent)" : "none"} stroke="var(--color-text-muted)" strokeWidth="3" />
      <path d="M34 6 q14 0 14 10 t-14 10" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />
    </g>
  );
}

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(30, 70)">
        <Mug x={0} filled />
      </g>
      <g className={styles.heart}>
        <path
          d="M45 30c-6-8-16-3-16 4 0 6 8 11 16 17 8-6 16-11 16-17 0-7-10-12-16-4z"
          fill="var(--accent)"
        />
      </g>
      <text x="47" y="118" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
        自分の物
      </text>

      <g transform="translate(130, 70)">
        <Mug x={0} />
      </g>
      <line x1="120" y1="106" x2="188" y2="106" stroke="var(--color-border-strong)" strokeWidth="3" />
      <text x="147" y="118" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
        お店の商品
      </text>
    </svg>
  );
}

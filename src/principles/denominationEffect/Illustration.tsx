import styles from "./Illustration.module.css";

const coins = [
  { cx: 130, cy: 95 },
  { cx: 150, cy: 88 },
  { cx: 168, cy: 98 },
  { cx: 140, cy: 112 },
  { cx: 160, cy: 116 },
  { cx: 178, cy: 108 },
];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="45" width="80" height="48" rx="5" fill="var(--accent)" />
      <rect x="18" y="45" width="80" height="48" rx="5" fill="none" stroke="var(--color-surface)" strokeWidth="1.5" opacity="0.5" />
      <text x="58" y="74" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">
        1000円
      </text>
      <rect x="46" y="30" width="24" height="14" rx="3" fill="var(--color-text-muted)" />

      <g className={styles.coins}>
        {coins.map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r="11" fill="var(--color-text-muted)" opacity="0.75" />
        ))}
      </g>
    </svg>
  );
}

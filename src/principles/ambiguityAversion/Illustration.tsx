import styles from "./Illustration.module.css";

const KNOWN_DOTS = Array.from({ length: 9 }, (_, i) => ({
  cx: 30 + (i % 3) * 20,
  cy: 58 + Math.floor(i / 3) * 20,
  known: i < 3,
}));

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="40" width="76" height="76" rx="8" fill="none" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="52" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text-muted)">
        確率：既知
      </text>
      {KNOWN_DOTS.map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r="6"
          fill={d.known ? "var(--accent)" : "var(--color-text-muted)"}
          opacity={d.known ? 1 : 0.35}
        />
      ))}

      <rect x="112" y="40" width="76" height="76" rx="8" fill="none" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="150" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-text-muted)">
        確率：不明
      </text>
      <g className={styles.mark}>
        <text x="150" y="90" textAnchor="middle" fontSize="34" fontWeight="700" fill="var(--accent)">
          ?
        </text>
      </g>
    </svg>
  );
}

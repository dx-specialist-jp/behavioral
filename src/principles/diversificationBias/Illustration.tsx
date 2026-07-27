import styles from "./Illustration.module.css";

const ITEMS = [
  { cx: 50, fill: "var(--accent)" },
  { cx: 80, fill: "var(--color-text-muted)" },
  { cx: 110, fill: "var(--accent)" },
  { cx: 140, fill: "var(--color-text-muted)" },
  { cx: 170, fill: "var(--accent)" },
];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 60 L190 60 L178 118 Q176 124 170 124 L50 124 Q44 124 42 118 Z"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2.5"
      />
      {ITEMS.map((it, i) => (
        <g key={i} className={styles.item} style={{ animationDelay: `${i * 0.15}s` }}>
          <rect x={it.cx - 12} y="30" width="24" height="34" rx="4" fill={it.fill} opacity="0.9" />
        </g>
      ))}
      <text x="100" y="136" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        まとめて選ぶと、種類がバラける
      </text>
    </svg>
  );
}

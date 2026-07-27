import styles from "./Illustration.module.css";

const WING_DAMAGE = [
  { cx: 40, cy: 40 }, { cx: 55, cy: 32 }, { cx: 70, cy: 46 }, { cx: 150, cy: 40 }, { cx: 135, cy: 32 }, { cx: 165, cy: 50 },
  { cx: 60, cy: 100 }, { cx: 80, cy: 108 }, { cx: 130, cy: 104 }, { cx: 145, cy: 96 },
];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 20 L108 60 L180 46 L182 56 L110 76 L112 112 L128 122 L128 128 L100 118 L72 128 L72 122 L88 112 L90 76 L18 56 L20 46 L92 60 Z"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
      />
      {WING_DAMAGE.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="4" fill="var(--color-text-muted)" opacity="0.7" />
      ))}
      <g className={styles.callout}>
        <circle cx="100" cy="68" r="14" fill="var(--accent)" opacity="0.25" />
        <circle cx="100" cy="68" r="6" fill="var(--accent)" />
      </g>
      <text x="100" y="136" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-text-muted)">
        帰還機のデータには現れない箇所こそ危険
      </text>
    </svg>
  );
}

import styles from "./Illustration.module.css";

const DOTS = [
  { cx: 30, cy: 30 }, { cx: 70, cy: 20 }, { cx: 130, cy: 25 }, { cx: 170, cy: 35 },
  { cx: 20, cy: 70 }, { cx: 55, cy: 60 }, { cx: 100, cy: 100 }, { cx: 108, cy: 108 },
  { cx: 96, cy: 112 }, { cx: 112, cy: 96 }, { cx: 150, cy: 75 }, { cx: 180, cy: 90 },
  { cx: 40, cy: 110 }, { cx: 65, cy: 95 }, { cx: 25, cy: 115 },
];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      {DOTS.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="5" fill="var(--color-text-muted)" opacity="0.6" />
      ))}
      <g className={styles.ring}>
        <circle cx="104" cy="104" r="20" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      </g>
      <text x="104" y="132" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--accent)">
        「意味がありそう」
      </text>
    </svg>
  );
}

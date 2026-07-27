import styles from "./Illustration.module.css";

const bigRing = Array.from({ length: 6 }, (_, i) => {
  const angle = (i / 6) * Math.PI * 2;
  return { cx: 50 + Math.cos(angle) * 34, cy: 62 + Math.sin(angle) * 34 };
});

const smallRing = Array.from({ length: 6 }, (_, i) => {
  const angle = (i / 6) * Math.PI * 2;
  return { cx: 150 + Math.cos(angle) * 27, cy: 62 + Math.sin(angle) * 27 };
});

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <g className={styles.context}>
        {bigRing.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="13" fill="var(--color-text-muted)" opacity="0.35" />
        ))}
      </g>
      <circle cx="50" cy="62" r="16" fill="var(--accent)" />

      <g className={styles.context}>
        {smallRing.map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r="5" fill="var(--color-text-muted)" opacity="0.6" />
        ))}
      </g>
      <circle cx="150" cy="62" r="16" fill="var(--accent)" />

      <text x="100" y="128" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
        実は同じ大きさ
      </text>
    </svg>
  );
}

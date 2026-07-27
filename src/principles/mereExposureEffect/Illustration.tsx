import styles from "./Illustration.module.css";

const SHAPES = [
  { cx: 40, opacity: 0.3, scale: 0.8 },
  { cx: 100, opacity: 0.6, scale: 1 },
  { cx: 160, opacity: 1, scale: 1.2 },
];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      {SHAPES.map((s, i) => (
        <g key={i} transform={`translate(${s.cx} 70) scale(${s.scale})`}>
          <circle cx="0" cy="0" r="20" fill="var(--accent)" opacity={s.opacity} />
          {i === 2 && (
            <g className={styles.heart}>
              <text x="0" y="6" textAnchor="middle" fontSize="16" fill="#fff">
                ♥
              </text>
            </g>
          )}
        </g>
      ))}
      <text x="40" y="112" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        1回
      </text>
      <text x="100" y="112" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        5回
      </text>
      <text x="160" y="112" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        25回
      </text>
      <text x="100" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        見る回数が増えるほど、好きになる
      </text>
    </svg>
  );
}

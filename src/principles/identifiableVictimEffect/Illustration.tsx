import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="55" r="24" fill="var(--accent)" opacity="0.9" />
      <circle cx="42" cy="49" r="3" fill="#fff" />
      <circle cx="58" cy="49" r="3" fill="#fff" />
      <path d="M40 63 Q50 71 60 63" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <text x="50" y="98" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        名前のある一人
      </text>

      <g>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <circle
            key={i}
            cx={130 + (i % 4) * 16}
            cy={45 + Math.floor(i / 4) * 16}
            r="6"
            fill="var(--color-text-muted)"
            opacity="0.5"
          />
        ))}
      </g>
      <text x="154" y="98" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        統計上の大勢
      </text>

      <g className={styles.heart}>
        <path d="M92 40c-5-6-13-2-13 3 0 5 6 9 13 14 7-5 13-9 13-14 0-5-8-9-13-3z" fill="var(--accent)" />
      </g>
    </svg>
  );
}

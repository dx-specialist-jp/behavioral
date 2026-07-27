import styles from "./Illustration.module.css";

const WORDS = ["布団", "あくび", "夜", "枕"];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      {WORDS.map((w, i) => (
        <text key={w} x={30 + i * 45} y="40" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
          {w}
        </text>
      ))}
      <line x1="14" y1="52" x2="186" y2="52" stroke="var(--color-border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />

      <g className={styles.pop}>
        <rect x="60" y="72" width="80" height="34" rx="8" fill="var(--accent)" opacity="0.9" />
        <text x="100" y="94" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
          睡眠？
        </text>
      </g>
      <text x="100" y="128" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        見ていない単語を「見た」と思い込む
      </text>
    </svg>
  );
}

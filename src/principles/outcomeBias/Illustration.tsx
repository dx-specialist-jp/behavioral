import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="40" r="18" fill="none" stroke="var(--color-border-strong)" strokeWidth="3" />
      <text x="100" y="44" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        同じ判断
      </text>

      <line x1="88" y1="56" x2="45" y2="90" stroke="var(--color-text-muted)" strokeWidth="2" />
      <line x1="112" y1="56" x2="155" y2="90" stroke="var(--color-text-muted)" strokeWidth="2" />

      <circle cx="40" cy="100" r="20" fill="var(--accent)" opacity="0.9" />
      <text x="40" y="105" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
        ◯
      </text>
      <text x="40" y="128" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        名采配
      </text>

      <circle cx="160" cy="100" r="20" fill="var(--color-text-muted)" opacity="0.45" />
      <text x="160" y="105" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-text)">
        ×
      </text>
      <text x="160" y="128" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        愚采配
      </text>

      <g className={styles.arrow}>
        <path d="M40 118 Q100 150 160 118" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 4" />
      </g>
    </svg>
  );
}

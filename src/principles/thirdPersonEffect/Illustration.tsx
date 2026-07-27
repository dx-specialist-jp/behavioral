import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="20" width="60" height="42" rx="4" fill="none" stroke="var(--color-border-strong)" strokeWidth="2" />
      <line x1="100" y1="62" x2="100" y2="72" stroke="var(--color-border-strong)" strokeWidth="2" />
      <line x1="86" y1="72" x2="114" y2="72" stroke="var(--color-border-strong)" strokeWidth="2" />
      <path d="M80 30 L100 41 L80 52 Z" fill="var(--color-text-muted)" opacity="0.8" />

      <circle cx="45" cy="110" r="12" fill="var(--accent)" />
      <text x="45" y="130" textAnchor="middle" fontSize="9" fill="var(--accent)">
        自分：平気
      </text>
      <line x1="70" y1="62" x2="52" y2="100" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeDasharray="3 3" />

      <g className={styles.wobble}>
        <circle cx="155" cy="110" r="12" fill="var(--color-text-muted)" />
      </g>
      <text x="155" y="130" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        他人：流される
      </text>
      <line x1="130" y1="62" x2="150" y2="100" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeDasharray="3 3" />
    </svg>
  );
}

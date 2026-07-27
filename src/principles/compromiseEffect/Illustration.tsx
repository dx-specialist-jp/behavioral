import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="122" x2="190" y2="122" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="35" y="92" width="30" height="30" rx="4" fill="var(--color-text-muted)" opacity="0.6" />
      <text x="50" y="134" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        梅
      </text>

      <g className={styles.pick}>
        <rect x="85" y="67" width="30" height="55" rx="4" fill="var(--accent)" />
        <polygon points="100,50 93,62 107,62" fill="var(--accent)" />
      </g>
      <text x="100" y="134" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text)">
        竹
      </text>

      <rect x="135" y="47" width="30" height="75" rx="4" fill="var(--color-text-muted)" opacity="0.6" />
      <text x="150" y="134" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        松
      </text>
    </svg>
  );
}

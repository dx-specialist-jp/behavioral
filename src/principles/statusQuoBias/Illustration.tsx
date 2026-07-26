import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="98" width="60" height="10" rx="2" fill="var(--accent)" />
      <text x="45" y="126" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
        現状
      </text>

      <rect
        x="125"
        y="98"
        width="60"
        height="10"
        rx="2"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
        strokeDasharray="4 3"
      />
      <text x="155" y="126" textAnchor="middle" fontSize="11" fill="var(--color-text-muted)">
        新しい選択肢
      </text>

      <g className={styles.arrow}>
        <line x1="82" y1="92" x2="118" y2="92" stroke="var(--color-text-muted)" strokeWidth="2" />
        <polygon points="118,87 128,92 118,97" fill="var(--color-text-muted)" />
      </g>

      <g className={styles.figure}>
        <circle cx="45" cy="70" r="9" fill="var(--color-text-muted)" />
        <line x1="45" y1="79" x2="45" y2="98" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="45" y1="85" x2="32" y2="93" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="45" y1="85" x2="58" y2="93" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="45" y1="98" x2="36" y2="98" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="45" y1="98" x2="54" y2="98" stroke="var(--color-text-muted)" strokeWidth="3" />
      </g>
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="122" x2="190" y2="122" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="66" y="30" width="68" height="86" rx="4" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <line x1="78" y1="48" x2="122" y2="48" stroke="var(--color-text-muted)" strokeWidth="2" />
      <line x1="78" y1="60" x2="122" y2="60" stroke="var(--color-text-muted)" strokeWidth="2" />
      <line x1="78" y1="72" x2="108" y2="72" stroke="var(--color-text-muted)" strokeWidth="2" />

      <path d="M78 96 Q90 92 96 100" stroke="var(--accent)" strokeWidth="3" fill="none" strokeLinecap="round" />

      <g className={styles.stamp}>
        <circle cx="112" cy="96" r="18" fill="var(--accent)" opacity="0.9" />
        <path d="M104 96 L110 102 L122 88" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

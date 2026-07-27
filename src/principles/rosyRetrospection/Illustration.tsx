import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="118" x2="50" y2="132" stroke="var(--color-border-strong)" strokeWidth="3" strokeLinecap="round" />
      <line x1="140" y1="118" x2="150" y2="132" stroke="var(--color-border-strong)" strokeWidth="3" strokeLinecap="round" />

      <rect x="40" y="18" width="120" height="100" rx="6" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="5" />

      <g className={styles.glow}>
        <circle cx="100" cy="55" r="26" fill="var(--accent)" opacity="0.18" />
        <circle cx="100" cy="55" r="17" fill="var(--accent)" opacity="0.35" />
        <circle cx="100" cy="55" r="10" fill="var(--accent)" />
      </g>

      <path d="M48 108 L78 72 L98 96 L118 66 L152 108 Z" fill="var(--color-text-muted)" opacity="0.55" />
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="118" x2="190" y2="118" stroke="var(--color-border-strong)" strokeWidth="2" />

      <circle cx="62" cy="66" r="26" fill="var(--color-text-muted)" opacity="0.9" />
      <circle cx="55" cy="60" r="3.4" fill="var(--color-surface)" />
      <circle cx="71" cy="60" r="3.4" fill="var(--color-surface)" />
      <path d="M52 76 Q62 84 72 76" stroke="var(--color-surface)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      <circle cx="138" cy="66" r="26" fill="var(--color-text-muted)" opacity="0.9" />
      <circle cx="131" cy="60" r="3.4" fill="var(--color-surface)" />
      <circle cx="147" cy="60" r="3.4" fill="var(--color-surface)" />
      <path d="M128 76 Q138 84 148 76" stroke="var(--color-surface)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      <path
        className={styles.heart}
        d="M100 60 C93 50, 78 54, 78 66 C78 78, 100 92, 100 92 C100 92, 122 78, 122 66 C122 54, 107 50, 100 60 Z"
        fill="var(--accent)"
      />
    </svg>
  );
}

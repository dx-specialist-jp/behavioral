import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="140" height="80" rx="8" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <line x1="46" y1="52" x2="120" y2="52" stroke="var(--color-text-muted)" strokeWidth="3" />
      <polyline points="126,48 132,52 126,56" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />

      <line x1="46" y1="86" x2="120" y2="86" stroke="var(--color-text-muted)" strokeWidth="3" />
      <line x1="126" y1="79" x2="140" y2="93" stroke="var(--color-text-muted)" strokeWidth="3" />
      <line x1="140" y1="79" x2="126" y2="93" stroke="var(--color-text-muted)" strokeWidth="3" />

      <g className={styles.glass}>
        <circle cx="133" cy="86" r="22" fill="none" stroke="var(--accent)" strokeWidth="4" />
        <line x1="149" y1="102" x2="163" y2="116" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

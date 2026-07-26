import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="140" height="90" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />

      <rect x="42" y="42" width="70" height="8" rx="2" fill="var(--accent)" />
      <rect x="42" y="56" width="90" height="6" rx="2" fill="var(--color-text-muted)" opacity="0.25" />
      <rect x="42" y="68" width="60" height="8" rx="2" fill="var(--accent)" />
      <rect x="42" y="82" width="95" height="6" rx="2" fill="var(--color-text-muted)" opacity="0.25" />
      <rect x="42" y="94" width="75" height="6" rx="2" fill="var(--color-text-muted)" opacity="0.25" />

      <g className={styles.glass}>
        <circle cx="65" cy="46" r="18" fill="none" stroke="var(--color-text-muted)" strokeWidth="4" />
        <line x1="78" y1="59" x2="92" y2="73" stroke="var(--color-text-muted)" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

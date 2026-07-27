import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="55" y="25" width="70" height="95" rx="4" fill="none" stroke="var(--color-border-strong)" strokeWidth="3" />
      <line x1="55" y1="55" x2="125" y2="55" stroke="var(--color-border-strong)" strokeWidth="3" />
      <line x1="55" y1="97" x2="125" y2="97" stroke="var(--accent)" strokeWidth="4" className={styles.shelfBuilding} />

      <circle cx="60" cy="30" r="3" fill="var(--accent)" className={styles.screw} />
      <circle cx="120" cy="30" r="3" fill="var(--accent)" className={styles.screw} />

      <g className={styles.wrench}>
        <rect x="140" y="70" width="30" height="9" rx="4" fill="var(--color-text-muted)" transform="rotate(35 140 70)" />
        <circle cx="140" cy="70" r="9" fill="none" stroke="var(--color-text-muted)" strokeWidth="4" />
      </g>
    </svg>
  );
}

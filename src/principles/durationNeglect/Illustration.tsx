import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <text x="20" y="34" fontSize="10" fill="var(--color-text-muted)">
        短い体験
      </text>
      <rect x="20" y="40" width="70" height="18" rx="4" fill="var(--accent)" />

      <text x="20" y="84" fontSize="10" fill="var(--color-text-muted)">
        長い体験
      </text>
      <rect x="20" y="90" width="70" height="18" rx="4" fill="var(--accent)" />
      <rect x="90" y="90" width="70" height="18" fill="var(--color-text-muted)" opacity="0.4" />
      <rect x="90" y="90" width="70" height="18" rx="4" fill="none" stroke="var(--color-border-strong)" strokeWidth="1" />

      <circle className={styles.marker} cx="24" cy="99" r="5" fill="var(--color-surface)" stroke="var(--accent)" strokeWidth="2" />

      <text x="180" y="70" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--accent)">
        =
      </text>
    </svg>
  );
}

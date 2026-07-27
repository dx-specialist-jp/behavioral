import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="120" x2="190" y2="120" stroke="var(--color-border-strong)" strokeWidth="2" />

      <circle cx="46" cy="72" r="20" fill="var(--color-text-muted)" />
      <circle cx="154" cy="72" r="20" fill="var(--color-text-muted)" />

      <g className={styles.gift}>
        <rect x="86" y="56" width="28" height="24" rx="3" fill="var(--accent)" />
        <rect x="86" y="64" width="28" height="6" fill="var(--color-surface)" opacity="0.6" />
        <rect x="97" y="56" width="6" height="24" fill="var(--color-surface)" opacity="0.6" />
      </g>

      <path
        className={styles.arrow}
        d="M62 40 Q100 16 138 40"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
        strokeDasharray="4 4"
        markerEnd="url(#arrowHead)"
      />
      <path
        className={styles.arrow}
        d="M138 104 Q100 128 62 104"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
        strokeDasharray="4 4"
        markerEnd="url(#arrowHead)"
      />

      <defs>
        <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-border-strong)" />
        </marker>
      </defs>
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="122" x2="190" y2="122" stroke="var(--color-border-strong)" strokeWidth="2" />

      <rect x="60" y="30" width="60" height="92" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <g className={styles.door}>
        <rect x="60" y="30" width="46" height="92" fill="var(--color-text-muted)" opacity="0.85" />
        <circle cx="98" cy="76" r="3" fill="var(--color-surface)" />
      </g>

      <g className={styles.foot}>
        <ellipse cx="128" cy="112" rx="16" ry="8" fill="var(--accent)" />
        <rect x="118" y="98" width="20" height="18" rx="6" fill="var(--accent)" />
      </g>

      <path
        className={styles.arrow}
        d="M140 70 L160 70"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
        markerEnd="url(#fitdArrow)"
      />
      <defs>
        <marker id="fitdArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-border-strong)" />
        </marker>
      </defs>
    </svg>
  );
}

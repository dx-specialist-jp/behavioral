import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <text x="14" y="34" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        90% → 100%
      </text>
      <rect x="14" y="42" width="172" height="16" rx="4" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <rect x="14" y="42" width="154.8" height="16" rx="4" fill="var(--color-text-muted)" opacity="0.4" />
      <g className={styles.glow}>
        <rect x="168.8" y="42" width="17.2" height="16" rx="4" fill="var(--accent)" />
      </g>

      <text x="14" y="88" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        70% → 80%
      </text>
      <rect x="14" y="96" width="172" height="16" rx="4" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <rect x="14" y="96" width="120.4" height="16" rx="4" fill="var(--color-text-muted)" opacity="0.4" />
      <rect x="134.4" y="96" width="17.2" height="16" rx="4" fill="var(--accent)" opacity="0.5" />

      <text x="100" y="128" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        同じ10ポイントの変化でも、感じ方が違う
      </text>
    </svg>
  );
}

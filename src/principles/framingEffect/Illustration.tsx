import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M75 30 L125 30 L118 110 L82 110 Z"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="3"
      />
      <path d="M84 70 L116 70 L112 108 L88 108 Z" fill="var(--accent)" opacity="0.7" />
      <line x1="76" y1="70" x2="124" y2="70" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeDasharray="3 3" />

      <text x="100" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--accent)" className={styles.labelA}>
        半分もある
      </text>
      <text x="100" y="20" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--color-text-muted)" className={styles.labelB}>
        半分しかない
      </text>
    </svg>
  );
}

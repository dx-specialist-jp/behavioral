import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" y1="55" x2="100" y2="118" stroke="var(--color-text-muted)" strokeWidth="4" />
      <polygon points="80,118 120,118 100,55" fill="var(--color-text-muted)" opacity="0.4" />

      <g className={styles.beam}>
        <line x1="30" y1="55" x2="170" y2="55" stroke="var(--color-text-muted)" strokeWidth="3" />

        <line x1="34" y1="57" x2="20" y2="92" stroke="var(--color-text-muted)" strokeWidth="2" />
        <line x1="34" y1="57" x2="48" y2="92" stroke="var(--color-text-muted)" strokeWidth="2" />
        <ellipse cx="34" cy="98" rx="26" ry="14" fill="var(--accent)" />
        <text x="34" y="103" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff">
          −
        </text>

        <line x1="166" y1="53" x2="156" y2="70" stroke="var(--color-text-muted)" strokeWidth="2" />
        <line x1="166" y1="53" x2="176" y2="70" stroke="var(--color-text-muted)" strokeWidth="2" />
        <ellipse cx="166" cy="74" rx="15" ry="8" fill="var(--accent)" opacity="0.55" />
        <text x="166" y="78" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
          +
        </text>
      </g>
    </svg>
  );
}

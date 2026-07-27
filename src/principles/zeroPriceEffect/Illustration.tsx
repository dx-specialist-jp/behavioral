import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path d="M120 85 L160 85 L182 105 L160 125 L120 125 Z" fill="var(--color-text-muted)" opacity="0.5" />
      <text x="148" y="110" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
        14円
      </text>

      <g className={styles.tag}>
        <path d="M18 55 L60 55 L84 77 L60 99 L18 99 Z" fill="var(--accent)" />
        <text x="46" y="82" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">
          0円
        </text>
      </g>

      <g className={styles.converge}>
        <circle cx="90" cy="30" r="5" fill="var(--color-text-muted)" />
        <circle cx="110" cy="20" r="5" fill="var(--color-text-muted)" />
        <circle cx="70" cy="20" r="5" fill="var(--color-text-muted)" />
      </g>
    </svg>
  );
}

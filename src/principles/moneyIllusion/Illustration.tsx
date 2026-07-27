import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,105 88,128 112,128" fill="var(--color-border-strong)" />
      <rect x="97" y="90" width="6" height="18" fill="var(--color-border-strong)" />

      <g className={styles.seesaw}>
        <line x1="30" y1="72" x2="170" y2="98" stroke="var(--color-text-muted)" strokeWidth="4" />

        <g>
          <rect x="14" y="46" width="40" height="26" rx="5" fill="var(--accent)" />
          <text x="34" y="63" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
            +2%
          </text>
        </g>

        <g>
          <rect x="146" y="88" width="46" height="26" rx="5" fill="var(--color-text-muted)" />
          <text x="169" y="105" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
            実質-2%
          </text>
        </g>
      </g>
    </svg>
  );
}

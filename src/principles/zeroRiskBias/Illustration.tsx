import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <text x="55" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        対策A：5→0
      </text>
      <rect x="20" y="34" width="70" height="18" rx="4" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <g className={styles.glow}>
        <rect x="20" y="34" width="70" height="18" rx="4" fill="var(--accent)" />
      </g>
      <text x="55" y="47" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
        ゼロ
      </text>

      <text x="145" y="70" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        対策B：40→10
      </text>
      <rect x="110" y="80" width="70" height="18" rx="4" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <rect x="110" y="80" width="52.5" height="18" rx="4" fill="var(--color-text-muted)" opacity="0.5" />
      <text x="145" y="93" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--color-text-muted)">
        大幅減
      </text>

      <text x="100" y="122" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        実際の削減人数はBの方が多い
      </text>
    </svg>
  );
}

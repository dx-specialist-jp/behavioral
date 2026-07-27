import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="122" x2="190" y2="122" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 困っている人 */}
      <circle cx="40" cy="98" r="10" fill="var(--accent)" />
      <line x1="40" y1="108" x2="40" y2="118" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
      <text x="40" y="80" textAnchor="middle" fontSize="16" fill="var(--accent)">
        !
      </text>

      {/* 傍観する人々(視線をそらしている) */}
      <g className={styles.watcher} fill="var(--color-text-muted)">
        <circle cx="90" cy="100" r="9" />
        <circle cx="120" cy="104" r="9" />
        <circle cx="150" cy="98" r="9" />
        <circle cx="175" cy="106" r="9" />
      </g>
      <g fill="var(--color-surface)">
        <circle cx="93" cy="99" r="1.4" />
        <circle cx="123" cy="103" r="1.4" />
        <circle cx="153" cy="97" r="1.4" />
        <circle cx="178" cy="105" r="1.4" />
      </g>

      <text x="132" y="128" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        誰も動かない
      </text>
    </svg>
  );
}

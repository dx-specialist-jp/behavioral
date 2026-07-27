import styles from "./Illustration.module.css";

const FOLLOWERS = [40, 70, 100, 130, 160];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="118" x2="190" y2="118" stroke="var(--color-border-strong)" strokeWidth="2" />
      {FOLLOWERS.map((cx, i) => (
        <g key={i} className={styles.walker} style={{ animationDelay: `${i * 0.12}s` }}>
          <circle cx={cx} cy="88" r="9" fill="var(--color-text-muted)" opacity="0.75" />
          <line x1={cx} y1="97" x2={cx} y2="112" stroke="var(--color-text-muted)" strokeWidth="3" opacity="0.75" />
        </g>
      ))}
      <g className={styles.leader}>
        <circle cx="20" cy="80" r="10" fill="var(--accent)" />
        <line x1="20" y1="90" x2="20" y2="106" stroke="var(--accent)" strokeWidth="3" />
      </g>
      <text x="100" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-text-muted)">
        同じ方向へ、みんなでゾロゾロ
      </text>
    </svg>
  );
}

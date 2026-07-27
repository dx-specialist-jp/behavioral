import styles from "./Illustration.module.css";

const COINS = [
  { cx: 22, label: "表" },
  { cx: 62, label: "表" },
  { cx: 102, label: "表" },
  { cx: 142, label: "表" },
];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="118" x2="190" y2="118" stroke="var(--color-border-strong)" strokeWidth="2" />

      {COINS.map((coin, i) => (
        <g key={i}>
          <circle cx={coin.cx} cy="66" r="17" fill="var(--color-text-muted)" opacity="0.85" />
          <text x={coin.cx} y="71" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
            {coin.label}
          </text>
        </g>
      ))}

      <g className={styles.nextCoin}>
        <circle cx="182" cy="66" r="19" fill="var(--accent)" />
        <text x="182" y="72" textAnchor="middle" fontSize="20" fontWeight="700" fill="#fff">
          ?
        </text>
      </g>
    </svg>
  );
}

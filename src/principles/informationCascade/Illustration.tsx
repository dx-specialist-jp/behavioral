import styles from "./Illustration.module.css";

const CHAIN = [
  { cx: 40, own: true },
  { cx: 80, own: false },
  { cx: 120, own: false },
  { cx: 160, own: false },
];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="110" x2="190" y2="110" stroke="var(--color-border-strong)" strokeWidth="2" />
      {CHAIN.map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy="70" r="16" fill={p.own ? "var(--color-text-muted)" : "var(--accent)"} opacity={p.own ? 0.6 : 0.9} />
          <text x={p.cx} y="75" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
            B
          </text>
        </g>
      ))}
      {CHAIN.slice(0, -1).map((p, i) => (
        <g key={i} className={styles.arrow}>
          <line x1={p.cx + 18} y1="70" x2={p.cx + 22} y2="70" stroke="var(--color-text-muted)" strokeWidth="2" />
        </g>
      ))}
      <text x="40" y="40" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        (自分の手がかりはA)
      </text>
    </svg>
  );
}

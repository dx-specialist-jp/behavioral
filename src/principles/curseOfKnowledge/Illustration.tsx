import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 知っている人（頭の中にメロディが流れている） */}
      <circle cx="60" cy="60" r="26" fill="var(--accent)" opacity="0.9" />
      <g className={styles.notes}>
        <text x="60" y="40" textAnchor="middle" fontSize="14" fill="#fff">
          ♪
        </text>
      </g>
      <text x="60" y="66" textAnchor="middle" fontSize="10" fill="#fff">
        当然
      </text>

      {/* 指で机を叩く動作 */}
      <line x1="86" y1="90" x2="140" y2="90" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 聞く側（？だけが伝わる） */}
      <circle cx="150" cy="66" r="24" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="150" y="72" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--color-text-muted)">
        ?
      </text>
    </svg>
  );
}

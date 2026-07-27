import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="120" x2="190" y2="120" stroke="var(--color-border-strong)" strokeWidth="2" />

      <g fill="var(--color-text-muted)">
        <circle cx="45" cy="90" r="12" />
        <circle cx="85" cy="90" r="12" />
        <circle cx="125" cy="90" r="12" />
        <circle cx="165" cy="90" r="12" />
      </g>
      <g fill="var(--color-surface)">
        <circle cx="42" cy="88" r="1.5" />
        <circle cx="48" cy="88" r="1.5" />
        <circle cx="82" cy="88" r="1.5" />
        <circle cx="88" cy="88" r="1.5" />
        <circle cx="122" cy="88" r="1.5" />
        <circle cx="128" cy="88" r="1.5" />
        <circle cx="162" cy="88" r="1.5" />
        <circle cx="168" cy="88" r="1.5" />
      </g>

      {/* 吹き出し(本音)は薄く隠れている、周囲からは見えない */}
      <g className={styles.thought} opacity="0.85">
        <circle cx="45" cy="60" r="14" fill="var(--accent)" />
        <text x="45" y="65" textAnchor="middle" fontSize="14" fill="#fff">
          ?
        </text>
      </g>

      <text x="105" y="45" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        内心はみんな同じ疑問
      </text>
    </svg>
  );
}

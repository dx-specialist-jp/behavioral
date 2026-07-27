import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="95" y="15" width="10" height="110" fill="var(--color-border-strong)" />

      <g opacity="0.6">
        <circle cx="45" cy="60" r="18" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="45" y1="78" x2="45" y2="92" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="38" y1="92" x2="52" y2="92" stroke="var(--color-text-muted)" strokeWidth="3" />
        <circle cx="45" cy="60" r="26" fill="none" stroke="var(--color-text-muted)" strokeWidth="2" />
        <line x1="27" y1="42" x2="63" y2="78" stroke="var(--color-text-muted)" strokeWidth="2" />
      </g>
      <text x="45" y="112" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        社外のアイデア
      </text>

      <g className={styles.glow}>
        <circle cx="155" cy="60" r="18" fill="var(--accent)" />
        <line x1="155" y1="78" x2="155" y2="92" stroke="var(--accent)" strokeWidth="3" />
        <line x1="148" y1="92" x2="162" y2="92" stroke="var(--accent)" strokeWidth="3" />
      </g>
      <text x="155" y="112" textAnchor="middle" fontSize="10" fill="var(--color-text)">
        社内のアイデア
      </text>
    </svg>
  );
}

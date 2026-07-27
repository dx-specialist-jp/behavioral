import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <text x="55" y="112" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        楽しいから
      </text>
      <g className={styles.heart}>
        <path
          d="M55 50c-8-11-22-4-22 5 0 9 11 15 22 24 11-9 22-15 22-24 0-9-14-16-22-5z"
          fill="var(--accent)"
        />
      </g>

      <path
        d="M92 62 H130"
        stroke="var(--color-text-muted)"
        strokeWidth="2"
        strokeDasharray="4 3"
        fill="none"
      />
      <polygon points="130,62 122,58 122,66" fill="var(--color-text-muted)" />

      <text x="150" y="112" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        お金のため
      </text>
      <path
        d="M55 50c-8-11-22-4-22 5 0 9 11 15 22 24 11-9 22-15 22-24 0-9-14-16-22-5z"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="1.5"
        transform="translate(95, 0)"
        opacity="0.5"
      />
      <g className={styles.coin}>
        <circle cx="150" cy="63" r="19" fill="var(--color-text-muted)" />
        <text x="150" y="69" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">
          ¥
        </text>
      </g>
    </svg>
  );
}

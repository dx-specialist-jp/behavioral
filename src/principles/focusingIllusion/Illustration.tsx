import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="15" y1="110" x2="185" y2="110" stroke="var(--color-border-strong)" strokeWidth="2" />

      {[40, 75, 125, 160].map((x) => (
        <circle key={x} cx={x} cy="95" r="10" fill="var(--color-text-muted)" opacity="0.5" />
      ))}

      <circle cx="100" cy="80" r="16" fill="var(--accent)" opacity="0.9" />
      <text x="100" y="85" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
        年収
      </text>

      <g className={styles.glass}>
        <circle cx="100" cy="80" r="24" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />
        <line x1="118" y1="98" x2="132" y2="112" stroke="var(--color-text-muted)" strokeWidth="4" strokeLinecap="round" />
      </g>

      <text x="100" y="128" textAnchor="middle" fontSize="9" fill="var(--color-text-muted)">
        人生の満足度をつくる要素の一つ
      </text>
    </svg>
  );
}

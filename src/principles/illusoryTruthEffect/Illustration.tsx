import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 同じ主張が繰り返されるほど濃く・大きく見える様子 */}
      <text x="30" y="70" fontSize="10" fill="var(--color-text-muted)" opacity="0.35">
        それは本当だ
      </text>
      <text x="45" y="88" fontSize="12" fill="var(--color-text-muted)" opacity="0.6">
        それは本当だ
      </text>
      <g className={styles.grow}>
        <text x="60" y="112" fontSize="16" fontWeight="700" fill="var(--accent)">
          それは本当だ
        </text>
      </g>
    </svg>
  );
}

import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 20c-28 0-42 18-42 36 0 10 4 16 4 16-8 4-12 12-12 20 0 16 14 26 30 26h40c16 0 30-10 30-26 0-8-4-16-12-20 0 0 4-6 4-16 0-18-14-36-42-36z"
        fill="var(--color-surface)"
        stroke="var(--color-border-strong)"
        strokeWidth="2"
      />

      <g className={styles.vivid}>
        <path d="M55 78 Q78 50 100 78 Q85 72 70 78 Q62 82 55 78 Z" fill="var(--accent)" />
      </g>

      <path d="M125 68 L118 82 L126 82 L120 96 L134 78 L125 78 Z" fill="var(--color-text-muted)" opacity="0.35" />
    </svg>
  );
}

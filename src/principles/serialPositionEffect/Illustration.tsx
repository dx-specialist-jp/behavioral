import styles from "./Illustration.module.css";

const POSITIONS = [20, 46, 72, 98, 124, 150, 176];

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 46 C 60 100, 140 100, 180 46"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="2"
        strokeDasharray="3 4"
      />

      <line x1="10" y1="120" x2="190" y2="120" stroke="var(--color-border-strong)" strokeWidth="2" />

      {POSITIONS.map((x, i) => {
        const edge = i <= 1 || i >= POSITIONS.length - 2;
        return (
          <rect
            key={i}
            x={x - 8}
            y="104"
            width="16"
            height="16"
            rx="3"
            fill={edge ? "var(--accent)" : "var(--color-text-muted)"}
            opacity={edge ? 1 : 0.4}
            className={edge ? styles.item : undefined}
          />
        );
      })}
    </svg>
  );
}

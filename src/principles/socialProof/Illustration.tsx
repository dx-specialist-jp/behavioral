import styles from "./Illustration.module.css";

function Person({ x, animate }: { x: number; animate?: boolean }) {
  return (
    <g transform={`translate(${x}, 78)`}>
      <g className={animate ? styles.follower : undefined}>
        <circle cx="0" cy="-16" r="8" fill="var(--color-text-muted)" />
        <polygon points="-10,10 10,10 0,-8" fill="var(--accent)" />
      </g>
    </g>
  );
}

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="105" x2="190" y2="105" stroke="var(--color-border)" strokeWidth="2" />
      <Person x={40} />
      <Person x={70} />
      <Person x={100} animate />
      <Person x={130} />
      <Person x={160} />
    </svg>
  );
}

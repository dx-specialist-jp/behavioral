import styles from "./Illustration.module.css";

function Person({ x, y, accent }: { x: number; y: number; accent?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="6" fill={accent ? "var(--accent)" : "var(--color-text-muted)"} opacity={accent ? 1 : 0.55} />
      <rect x="-7" y="7" width="14" height="14" rx="4" fill={accent ? "var(--accent)" : "var(--color-text-muted)"} opacity={accent ? 1 : 0.55} />
    </g>
  );
}

export function Illustration() {
  const positions = [
    [30, 40], [58, 40], [86, 40], [114, 40], [142, 40], [170, 40],
    [30, 76], [58, 76], [114, 76], [142, 76], [170, 76],
    [30, 108], [58, 108], [86, 108], [114, 108], [170, 108],
  ];

  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      {positions.map(([x, y], i) => (
        <Person key={i} x={x} y={y} />
      ))}
      <g className={styles.star}>
        <polygon
          points="86,88 88,94 94,94 89,98 91,105 86,101 81,105 83,98 78,94 84,94"
          fill="var(--accent)"
        />
      </g>
      <Person x={86} y={108} accent />
    </svg>
  );
}

import styles from "./Illustration.module.css";

const cols = 8;
const rows = 3;
const cellW = 16;
const cellH = 16;
const gap = 4;
const startX = 12;
const startY = 20;

const cells = Array.from({ length: cols * rows }, (_, i) => {
  const col = i % cols;
  const row = Math.floor(i / cols);
  return {
    x: startX + col * (cellW + gap),
    y: startY + row * (cellH + gap),
  };
});

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <g className={styles.grid}>
        {cells.map((c, i) => (
          <rect key={i} x={c.x} y={c.y} width={cellW} height={cellH} rx="3" fill="var(--color-text-muted)" opacity="0.35" />
        ))}
      </g>
      <circle cx="100" cy="105" r="24" fill="var(--accent)" />
      <text x="100" y="114" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff">
        ?
      </text>
    </svg>
  );
}

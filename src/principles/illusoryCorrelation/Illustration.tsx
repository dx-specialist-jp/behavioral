export function Illustration() {
  const dots = [
    { x: 30, y: 40, accent: false },
    { x: 55, y: 30, accent: false },
    { x: 80, y: 55, accent: true },
    { x: 105, y: 35, accent: false },
    { x: 130, y: 60, accent: false },
    { x: 150, y: 40, accent: true },
    { x: 45, y: 80, accent: false },
    { x: 70, y: 95, accent: false },
    { x: 95, y: 78, accent: false },
    { x: 120, y: 92, accent: true },
    { x: 145, y: 85, accent: false },
    { x: 165, y: 65, accent: false },
  ];
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />
      {/* ランダムに散らばった点。強調された点だけが「関係ありそう」に錯覚される */}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.accent ? 7 : 5}
          fill={d.accent ? "var(--accent)" : "var(--color-text-muted)"}
          opacity={d.accent ? 0.95 : 0.35}
        />
      ))}
      <path
        d="M80 55 L150 40 L120 92"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.7"
      />
    </svg>
  );
}

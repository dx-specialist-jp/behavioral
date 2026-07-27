import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="55" r="30" fill="var(--accent)" opacity="0.9" />
      <line x1="76" y1="31" x2="124" y2="79" stroke="var(--color-surface)" strokeWidth="6" strokeLinecap="round" />
      <text x="100" y="61" textAnchor="middle" fontSize="13" fontWeight="700" fill="#fff">
        禁止
      </text>

      <g className={styles.reach}>
        <path
          d="M100 95 L100 118"
          stroke="var(--color-text-muted)"
          strokeWidth="2.5"
          markerEnd="url(#hand)"
        />
      </g>

      <text x="100" y="132" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        余計に欲しくなる
      </text>

      <defs>
        <marker id="hand" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <circle cx="5" cy="5" r="4" fill="var(--color-text-muted)" />
        </marker>
      </defs>
    </svg>
  );
}

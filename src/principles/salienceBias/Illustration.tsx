import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="160" height="100" rx="4" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="2" />

      {/* 目立つバースト（注意を引く要素） */}
      <g className={styles.burst}>
        <polygon
          points="60,20 68,38 88,40 72,52 78,72 60,60 42,72 48,52 32,40 52,38"
          fill="var(--accent)"
        />
      </g>
      <text x="60" y="49" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">
        !
      </text>

      {/* 地味な小さい注記（見落とされがちな重要情報） */}
      <rect x="128" y="86" width="42" height="22" rx="2" fill="none" stroke="var(--color-border-strong)" strokeWidth="1.5" />
      <line x1="132" y1="93" x2="166" y2="93" stroke="var(--color-text-muted)" strokeWidth="1.5" />
      <line x1="132" y1="99" x2="158" y2="99" stroke="var(--color-text-muted)" strokeWidth="1.5" />

      {/* 視線が派手な方に向いていることを示す矢印 */}
      <path
        d="M110 100 Q90 80 68 56"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="2"
        strokeDasharray="4 3"
        markerEnd="url(#arrow)"
      />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-text-muted)" />
        </marker>
      </defs>
      <circle cx="112" cy="102" r="6" fill="var(--color-text-muted)" opacity="0.7" />
    </svg>
  );
}

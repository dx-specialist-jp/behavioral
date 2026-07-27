import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 落ち着いて見える人物の輪郭 */}
      <circle cx="100" cy="56" r="16" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />
      <path d="M74 116 Q100 86 126 116 L126 124 L74 124 Z" fill="none" stroke="var(--color-text-muted)" strokeWidth="3" />

      {/* 透明な窓（本心が見えている「つもり」を表す） */}
      <rect x="82" y="86" width="36" height="30" rx="4" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" strokeWidth="2" />

      {/* 内側の動揺（本人にとっては強烈だが外には伝わっていない） */}
      <g className={styles.squiggle}>
        <path
          d="M86 100 Q92 92 98 100 T110 100 T114 100"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* 外側から見ている人（気づいていない） */}
      <circle cx="160" cy="100" r="8" fill="var(--color-text-muted)" opacity="0.5" />
      <path d="M148 124 Q160 110 172 124 Z" fill="var(--color-text-muted)" opacity="0.5" />
      <line x1="150" y1="98" x2="130" y2="94" stroke="var(--color-text-muted)" strokeWidth="1.5" opacity="0.4" strokeDasharray="2 3" />
    </svg>
  );
}

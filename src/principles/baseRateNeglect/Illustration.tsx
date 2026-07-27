import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="20" width="168" height="88" rx="6" fill="none" stroke="var(--color-border-strong)" strokeWidth="2" />
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 16 }).map((__, col) => {
          const isSick = row === 4 && col === 8;
          return (
            <circle
              key={`${row}-${col}`}
              cx={20 + col * 10}
              cy={26 + row * 8}
              r="2.6"
              fill={isSick ? "var(--accent)" : "var(--color-text-muted)"}
              opacity={isSick ? 1 : 0.35}
            />
          );
        }),
      )}
      <g className={styles.callout}>
        <circle cx="140" cy="66" r="15" fill="var(--accent)" opacity="0.18" />
      </g>
      <text x="100" y="126" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--color-text-muted)">
        160人中、本当の陽性は1人だけ
      </text>
    </svg>
  );
}

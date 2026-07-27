export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 聞き覚えのある方（大きく、目立つ）*/}
      <circle cx="66" cy="66" r="38" fill="var(--accent)" opacity="0.9" />
      <text x="66" y="60" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">
        知ってる!
      </text>
      <text x="66" y="76" textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">
        A
      </text>

      {/* 聞き覚えのない方（小さく、控えめ）*/}
      <circle cx="146" cy="82" r="22" fill="var(--color-surface)" stroke="var(--color-border-strong)" strokeWidth="2" />
      <text x="146" y="87" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-text-muted)">
        B
      </text>

      <text x="66" y="30" textAnchor="middle" fontSize="18" fontWeight="700" fill="var(--color-text-muted)">
        ＞
      </text>
    </svg>
  );
}

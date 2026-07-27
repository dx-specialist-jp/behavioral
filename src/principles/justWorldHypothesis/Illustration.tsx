export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <line x1="10" y1="126" x2="190" y2="126" stroke="var(--color-border-strong)" strokeWidth="2" />

      {/* 天秤：世界は公正でなければならないという信念 */}
      <line x1="100" y1="30" x2="100" y2="80" stroke="var(--color-border-strong)" strokeWidth="3" />
      <line x1="55" y1="46" x2="145" y2="46" stroke="var(--color-border-strong)" strokeWidth="3" />

      <line x1="55" y1="46" x2="55" y2="66" stroke="var(--color-text-muted)" strokeWidth="1.5" />
      <path d="M40 66 A15 10 0 0 0 70 66 Z" fill="var(--color-surface)" stroke="var(--color-text-muted)" strokeWidth="1.5" />

      <line x1="145" y1="46" x2="145" y2="66" stroke="var(--color-text-muted)" strokeWidth="1.5" />
      <path d="M130 66 A15 10 0 0 0 160 66 Z" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.5" />

      <circle cx="100" cy="30" r="5" fill="var(--color-text-muted)" />
      <path d="M85 92 L100 80 L115 92 Z" fill="var(--color-text-muted)" opacity="0.5" />
    </svg>
  );
}

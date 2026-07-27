import styles from "./Illustration.module.css";

export function Illustration() {
  return (
    <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="118" rx="70" ry="10" fill="var(--color-border-strong)" opacity="0.25" />

      {/* 4人の賛成メンバー(うなずく丸頭) */}
      <g fill="var(--accent)">
        <circle cx="55" cy="70" r="14" />
        <circle cx="85" cy="60" r="14" />
        <circle cx="115" cy="60" r="14" />
        <circle cx="145" cy="70" r="14" />
      </g>
      <g fill="#fff">
        <circle cx="51" cy="68" r="1.6" />
        <circle cx="59" cy="68" r="1.6" />
        <circle cx="81" cy="58" r="1.6" />
        <circle cx="89" cy="58" r="1.6" />
        <circle cx="111" cy="58" r="1.6" />
        <circle cx="119" cy="58" r="1.6" />
        <circle cx="141" cy="68" r="1.6" />
        <circle cx="149" cy="68" r="1.6" />
      </g>

      {/* 疑問を飲み込む一人(グレー、口を閉じている) */}
      <g className={styles.doubter}>
        <circle cx="100" cy="98" r="16" fill="var(--color-text-muted)" />
        <circle cx="95" cy="96" r="1.8" fill="#fff" />
        <circle cx="105" cy="96" r="1.8" fill="#fff" />
        <line x1="94" y1="104" x2="106" y2="104" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </g>

      <text x="100" y="132" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">
        誰も異を唱えない
      </text>
    </svg>
  );
}

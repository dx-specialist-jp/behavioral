import { Link } from "react-router-dom";
import { NavMenu } from "./NavMenu";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <svg className={styles.logo} viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="24" fill="#5c1a25" />
            <path
              d="M24 10c-6.6 0-11 4.6-11 10.4 0 3.6 1.9 6 3.7 7.9 1 1 1.6 2 1.8 3.1l.4 2.1h10.2l.4-2.1c.2-1.1.8-2.1 1.8-3.1 1.8-1.9 3.7-4.3 3.7-7.9C35 14.6 30.6 10 24 10z"
              fill="#f2ead9"
            />
            <rect x="19" y="35" width="10" height="3" rx="1.5" fill="#f2ead9" />
          </svg>
          <span className={styles.brandText}>行動経済学大全</span>
        </Link>
        <div className={styles.right}>
          <span className={styles.tagline}>体験しながら学ぶ、くせラボ</span>
          <NavMenu />
        </div>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CATEGORY_LABELS, type PrincipleCategory } from "../principles/types";
import { principlesByCategory } from "../principles/registry";
import styles from "./NavMenu.module.css";

const CATEGORY_ORDER: PrincipleCategory[] = [
  "decision-heuristics",
  "probability-risk",
  "choice-comparison",
  "money-time",
  "social-influence",
  "group-negotiation",
  "memory-impression",
  "self-perception",
];

export function NavMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="nav-menu-panel"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.toggleBar} />
        <span className={styles.toggleBar} />
        <span className={styles.toggleBar} />
      </button>

      {open && (
        <>
          <div className={styles.backdrop} onClick={() => setOpen(false)} aria-hidden="true" />
          <nav id="nav-menu-panel" className={styles.panel} aria-label="全コンテンツ一覧">
            <Link to="/references" className={styles.referencesLink}>
              参考文献
            </Link>
            {CATEGORY_ORDER.map((category) => (
              <div key={category} className={styles.categoryBlock}>
                <p className={styles.categoryTitle}>{CATEGORY_LABELS[category]}</p>
                <ul className={styles.principleList}>
                  {principlesByCategory(category).map((principle) => (
                    <li key={principle.slug}>
                      <Link to={`/principles/${principle.slug}`} className={styles.principleLink}>
                        {principle.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </>
      )}
    </>
  );
}

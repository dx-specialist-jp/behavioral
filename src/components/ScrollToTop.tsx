import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** ルート遷移のたびにスクロール位置を先頭へ戻す（SPAはブラウザ標準のスクロール復元がない）。 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

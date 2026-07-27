import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1, width: "100%" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

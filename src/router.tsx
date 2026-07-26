import { createHashRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PrinciplePage } from "./pages/PrinciplePage";
import { NotFoundPage } from "./pages/NotFoundPage";

// GitHub Pages has no server-side rewrites for a static SPA, so hash-based
// routing is used to keep deep links and page refreshes working without
// relying on a 404.html redirect hack.
export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "principles/:slug", element: <PrinciplePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

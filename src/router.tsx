import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PrinciplePage } from "./pages/PrinciplePage";
import { ReferencesPage } from "./pages/ReferencesPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// 各原理ページをSNS等でシェアしたときに正しいOGPカードが出るよう、ビルド後に
// scripts/prerender.mjs が全ルート分の静的HTMLを事前生成する。そのため通常の
// パスベースルーティング（BrowserRouter）を使う。GitHub Pagesはプロジェクトの
// サブパス配信なので basename を明示する。
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "principles/:slug", element: <PrinciplePage /> },
        { path: "references", element: <ReferencesPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: "/behavioral" },
);

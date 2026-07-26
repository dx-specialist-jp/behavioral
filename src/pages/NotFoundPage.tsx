import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "64px 0" }}>
      <h1>ページが見つかりません</h1>
      <p>お探しの原理ページは存在しないようです。</p>
      <Link to="/">← ホームに戻る</Link>
    </div>
  );
}

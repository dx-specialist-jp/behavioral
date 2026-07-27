// vite build 後に実行し、SNSシェア時のOGPカードがページごとに正しく出るよう、
// GitHub Pagesがそのまま静的配信できる形で「原理ごとの実ファイル」を書き出す。
// BrowserRouterなのでクライアント側の遷移はこれまで通りSPAとして動作する。
import { readFile, writeFile, mkdir, copyFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const distDir = path.join(rootDir, "dist");
const principlesDir = path.join(rootDir, "src/principles");
const siteUrl = "https://dx-specialist-jp.github.io/behavioral";

const CATEGORY_OG_IMAGE = {
  "decision-heuristics": "decision-heuristics.png",
  "probability-risk": "probability-risk.png",
  "choice-comparison": "choice-comparison.png",
  "money-time": "money-time.png",
  "social-influence": "social-influence.png",
  "group-negotiation": "group-negotiation.png",
  "memory-impression": "memory-impression.png",
  "self-perception": "self-perception.png",
};

async function copyOgImages() {
  const srcDir = path.join(rootDir, "src/assets/irasutoya");
  const ogDir = path.join(distDir, "og");
  await mkdir(ogDir, { recursive: true });

  for (const file of Object.values(CATEGORY_OG_IMAGE)) {
    await copyFile(path.join(srcDir, file), path.join(ogDir, file));
  }

  const perPrincipleDir = path.join(srcDir, "principles");
  if (existsSync(perPrincipleDir)) {
    const files = await readdir(perPrincipleDir);
    await mkdir(path.join(ogDir, "principles"), { recursive: true });
    for (const file of files) {
      if (file.endsWith(".png")) {
        await copyFile(path.join(perPrincipleDir, file), path.join(ogDir, "principles", file));
      }
    }
  }
}

async function loadPrinciples() {
  const entries = await readdir(principlesDir, { withFileTypes: true });
  const principles = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const metaPath = path.join(principlesDir, entry.name, "meta.ts");
    if (!existsSync(metaPath)) continue;
    const mod = await import(pathToFileURL(metaPath).href);
    principles.push(mod.meta);
  }
  return principles;
}

function ogImageFor(principle) {
  const perPrincipleFile = `${principle.slug}.png`;
  const perPrinciplePath = path.join(rootDir, "src/assets/irasutoya/principles", perPrincipleFile);
  if (existsSync(perPrinciplePath)) {
    return `${siteUrl}/og/principles/${perPrincipleFile}`;
  }
  return `${siteUrl}/og/${CATEGORY_OG_IMAGE[principle.category]}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderHtml(template, { title: rawTitle, description: rawDescription, url, image }) {
  const title = escapeHtml(rawTitle);
  const description = escapeHtml(rawDescription);
  let html = template;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/s,
    `<meta name="description" content="${description}" />`,
  );

  const ogTags = `
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="行動経済学大全" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
  </head>`;
  html = html.replace(/<\/head>/, ogTags);
  return html;
}

async function writeRoute(routeDir, html) {
  const dir = path.join(distDir, routeDir);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html, "utf-8");
}

async function main() {
  const template = await readFile(path.join(distDir, "index.html"), "utf-8");
  await copyOgImages();

  const homeHtml = renderHtml(template, {
    title: "行動経済学大全 | 人はなぜ、いつも「合理的」に選べないのか",
    description:
      "行動経済学大全 - 人はなぜ、いつも「合理的」に選べないのか。行動経済学の原理を、イラストと体験型デモで一つずつ学べるサイト",
    url: `${siteUrl}/`,
    image: `${siteUrl}/og/decision-heuristics.png`,
  });
  await writeFile(path.join(distDir, "index.html"), homeHtml, "utf-8");
  // GitHub Pagesは未知パスに対してdist/404.htmlを返す。SPAシェルとして機能する
  // ホーム版をそのまま使い、React Router側でNotFoundPageを表示させる。
  await writeFile(path.join(distDir, "404.html"), homeHtml, "utf-8");

  const referencesHtml = renderHtml(template, {
    title: "参考文献 | 行動経済学大全",
    description: "行動経済学大全の各原理ページが参考にしている書籍・論文の一覧です。",
    url: `${siteUrl}/references`,
    image: `${siteUrl}/og/decision-heuristics.png`,
  });
  await writeRoute("references", referencesHtml);

  const principles = await loadPrinciples();
  for (const principle of principles) {
    const html = renderHtml(template, {
      title: `${principle.title} | 行動経済学大全`,
      description: principle.content.definition,
      url: `${siteUrl}/principles/${principle.slug}`,
      image: ogImageFor(principle),
    });
    await writeRoute(`principles/${principle.slug}`, html);
  }

  console.log(`prerendered ${principles.length} principle pages + home + references`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

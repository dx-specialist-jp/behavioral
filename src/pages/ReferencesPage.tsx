import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./ReferencesPage.module.css";

interface Reference {
  title: string;
  author: string;
  note: string;
  href?: string;
}

const GENERAL_READING: Reference[] = [
  {
    title: "行動経済学が最強の学問である",
    author: "相良奈美香（著）、SBクリエイティブ、2023年",
    note: "行動経済学の全体像を、専門用語を避けてやさしく解説する入門書。本サイトの構成・切り口も同書を参考にしています。",
    href: "https://namikasagara.jp/",
  },
];

const CLASSIC_SOURCES: Reference[] = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman, 2011",
    note: "ヒューリスティックとバイアス研究を体系立ててまとめた代表的な一冊。",
  },
  {
    title: "Judgment under Uncertainty: Heuristics and Biases",
    author: "Amos Tversky & Daniel Kahneman, Science, 1974",
    note: "アンカリング効果・代表性ヒューリスティックなど、多くの認知バイアス研究の出発点となった論文。",
  },
  {
    title: "Prospect Theory: An Analysis of Decision under Risk",
    author: "Daniel Kahneman & Amos Tversky, Econometrica, 1979",
    note: "損失回避・確実性効果など、リスク下の意思決定を説明するプロスペクト理論の原論文。",
  },
  {
    title: "Nudge: Improving Decisions About Health, Wealth, and Happiness",
    author: "Richard H. Thaler & Cass R. Sunstein, 2008",
    note: "デフォルト効果や現状維持バイアスを応用した「ナッジ」の考え方をまとめた一冊。",
  },
  {
    title: "Predictably Irrational",
    author: "Dan Ariely, 2008",
    note: "おとり効果やアンカリングなど、行動経済学の実験を一般向けに紹介した書籍。",
  },
  {
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini, 1984（改訂版 2021）",
    note: "社会的証明・返報性・希少性など、社会的影響に関する原理をまとめた古典。",
  },
];

function ReferenceCard({ reference }: { reference: Reference }) {
  return (
    <li className={styles.item}>
      <p className={styles.itemTitle}>{reference.title}</p>
      <p className={styles.itemAuthor}>{reference.author}</p>
      <p className={styles.itemNote}>{reference.note}</p>
      {reference.href && (
        <a className={styles.itemLink} href={reference.href} target="_blank" rel="noreferrer">
          公式サイトを見る →
        </a>
      )}
    </li>
  );
}

export function ReferencesPage() {
  useDocumentTitle("参考文献 | 行動経済学大全");

  return (
    <div className={styles.wrap}>
      <Link to="/" className={styles.breadcrumb}>
        ← すべての原理
      </Link>
      <h1 className={styles.title}>参考文献</h1>
      <p className={styles.lead}>
        本サイトの各原理ページは、以下の書籍・論文などをもとに、独自に噛み砕いて執筆しています。原文からの引用ではなく、内容の正確性は編集時点の一般的な理解に基づきます。より深く学びたい方は、ぜひ原典にあたってみてください。
      </p>

      <h2 className={styles.heading}>入門書としておすすめ</h2>
      <ul className={styles.list}>
        {GENERAL_READING.map((ref) => (
          <ReferenceCard key={ref.title} reference={ref} />
        ))}
      </ul>

      <h2 className={styles.heading}>各原理の学術的な原典・古典</h2>
      <ul className={styles.list}>
        {CLASSIC_SOURCES.map((ref) => (
          <ReferenceCard key={ref.title} reference={ref} />
        ))}
      </ul>
    </div>
  );
}

import { useEffect } from "react";
import type { CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CATEGORY_LABELS } from "../principles/types";
import { getAdjacentPrinciples, getPrincipleBySlug } from "../principles/registry";
import { IllustrationFrame } from "../components/ui/IllustrationFrame";
import { PrevNextNav } from "../components/PrevNextNav";
import { useVisitedPrinciples } from "../hooks/useVisitedPrinciples";
import styles from "./PrinciplePage.module.css";

export function PrinciplePage() {
  const { slug } = useParams<{ slug: string }>();
  const principle = slug ? getPrincipleBySlug(slug) : undefined;
  const { markVisited } = useVisitedPrinciples();

  useEffect(() => {
    if (principle) markVisited(principle.slug);
  }, [principle, markVisited]);

  if (!principle) {
    return <Navigate to="/404" replace />;
  }

  const { prev, next } = getAdjacentPrinciples(principle.slug);
  const style = { "--accent": `var(${principle.accentVar})` } as CSSProperties;
  const Illustration = principle.Illustration;
  const Demo = principle.Demo;

  return (
    <article className={styles.wrap} style={style}>
      <Link to="/" className={styles.breadcrumb}>
        ← すべての原理
      </Link>
      <div>
        <span className={styles.category}>{CATEGORY_LABELS[principle.category]}</span>
      </div>
      <h1 className={styles.title}>{principle.title}</h1>

      <IllustrationFrame accentVar={principle.accentVar} label={`${principle.title}のイメージ図`}>
        <Illustration />
      </IllustrationFrame>

      <p className={styles.definition}>{principle.content.definition}</p>

      <h2 className={styles.heading}>やってみよう</h2>
      <Demo />

      <h2 className={styles.heading}>くわしい解説</h2>
      {principle.content.explanation.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <h2 className={styles.heading}>身近な具体例</h2>
      <ul className={styles.examples}>
        {principle.content.examples.map((example, i) => (
          <li key={i}>{example}</li>
        ))}
      </ul>

      <div className={styles.takeaway}>
        <p className={styles.takeawayTitle}>まとめ</p>
        <p style={{ margin: 0 }}>{principle.content.takeaway}</p>
      </div>

      <PrevNextNav prev={prev} next={next} />
    </article>
  );
}

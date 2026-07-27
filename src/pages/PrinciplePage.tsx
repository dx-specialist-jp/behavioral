import { useEffect } from "react";
import type { CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { CATEGORY_HUES, CATEGORY_LABELS } from "../principles/types";
import { HEADING_ILLUSTRATIONS } from "../principles/headingIllustrations";
import { getPrincipleIllustration } from "../principles/principleIllustrations";
import { getAdjacentPrinciples, getPrincipleBySlug } from "../principles/registry";
import { IllustrationFrame } from "../components/ui/IllustrationFrame";
import { PrevNextNav } from "../components/PrevNextNav";
import { useVisitedPrinciples } from "../hooks/useVisitedPrinciples";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./PrinciplePage.module.css";

export function PrinciplePage() {
  const { slug } = useParams<{ slug: string }>();
  const principle = slug ? getPrincipleBySlug(slug) : undefined;
  const { markVisited } = useVisitedPrinciples();

  useEffect(() => {
    if (principle) markVisited(principle.slug);
  }, [principle, markVisited]);

  useDocumentTitle(principle ? `${principle.title} | 行動経済学大全` : "行動経済学大全");

  if (!principle) {
    return <Navigate to="/404" replace />;
  }

  const { prev, next } = getAdjacentPrinciples(principle.slug);
  const accentHue = CATEGORY_HUES[principle.category];
  const style = { "--accent": `hsl(${accentHue} var(--accent-s) var(--accent-l))` } as CSSProperties;
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

      <IllustrationFrame accentHue={accentHue} label={`${principle.title}のイメージ図`}>
        <Illustration />
      </IllustrationFrame>

      <p className={styles.definition}>{principle.content.definition}</p>

      <h2 className={styles.heading}>
        <img src={HEADING_ILLUSTRATIONS.try.src} alt="" className={styles.headingIcon} loading="lazy" />
        やってみよう
      </h2>
      <Demo accentHue={accentHue} />

      <h2 className={styles.heading}>
        <img
          src={HEADING_ILLUSTRATIONS.explanation.src}
          alt=""
          className={styles.headingIcon}
          loading="lazy"
        />
        くわしい解説
      </h2>
      {principle.content.explanation.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {principle.content.academicSource && (
        <p className={styles.source}>出典: {principle.content.academicSource}</p>
      )}

      <h2 className={styles.heading}>
        <img src={HEADING_ILLUSTRATIONS.examples.src} alt="" className={styles.headingIcon} loading="lazy" />
        身近な具体例
      </h2>
      <ul className={styles.examples}>
        {principle.content.examples.map((example, i) => (
          <li key={i}>{example}</li>
        ))}
      </ul>

      <div className={styles.takeaway}>
        <img
          className={styles.takeawayImage}
          src={getPrincipleIllustration(principle.slug, principle.category).src}
          alt=""
          loading="lazy"
        />
        <div>
          <p className={styles.takeawayTitle}>まとめ</p>
          <p style={{ margin: 0 }}>{principle.content.takeaway}</p>
        </div>
      </div>

      <PrevNextNav prev={prev} next={next} />
    </article>
  );
}

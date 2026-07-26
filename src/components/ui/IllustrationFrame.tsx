import type { CSSProperties, ReactNode } from "react";
import styles from "./IllustrationFrame.module.css";

interface IllustrationFrameProps {
  accentVar: string;
  children: ReactNode;
  label: string;
}

/** 全原理共通のイラスト表示枠。SVGの内容だけを原理ごとに差し替える。 */
export function IllustrationFrame({ accentVar, children, label }: IllustrationFrameProps) {
  const style = { "--accent": `var(${accentVar})` } as CSSProperties;
  return (
    <div className={styles.frame} style={style} role="img" aria-label={label}>
      {children}
    </div>
  );
}

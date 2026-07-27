import type { CSSProperties, ReactNode } from "react";
import styles from "./IllustrationFrame.module.css";

interface IllustrationFrameProps {
  accentHue: number;
  children: ReactNode;
  label: string;
}

/** 全原理共通のイラスト表示枠。SVGの内容だけを原理ごとに差し替える。 */
export function IllustrationFrame({ accentHue, children, label }: IllustrationFrameProps) {
  const style = { "--accent": `hsl(${accentHue} var(--accent-s) var(--accent-l))` } as CSSProperties;
  return (
    <div className={styles.frame} style={style} role="img" aria-label={label}>
      {children}
    </div>
  );
}

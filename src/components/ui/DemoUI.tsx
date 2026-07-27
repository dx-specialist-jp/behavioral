import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import styles from "./DemoUI.module.css";

interface DemoShellProps {
  accentHue: number;
  children: ReactNode;
}

/** インタラクティブデモの共通の枠。原理ごとのアクセントカラーを上部バーに反映する。 */
export function DemoShell({ accentHue, children }: DemoShellProps) {
  const style = { "--accent": `hsl(${accentHue} var(--accent-s) var(--accent-l))` } as CSSProperties;
  return (
    <div className={styles.shell} style={style}>
      <div className={styles.bar} />
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export function DemoPrompt({ children }: { children: ReactNode }) {
  return <p className={styles.prompt}>{children}</p>;
}

export function DemoChoices({ children }: { children: ReactNode }) {
  return <div className={styles.choices}>{children}</div>;
}

interface DemoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary";
  selected?: boolean;
}

export function DemoButton({ variant = "default", selected, className, ...rest }: DemoButtonProps) {
  const base = variant === "primary" ? styles.buttonPrimary : styles.button;
  const classes = [base, selected ? styles.buttonSelected : "", className].filter(Boolean).join(" ");
  return <button type="button" className={classes} {...rest} />;
}

interface DemoSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  displayValue?: string;
  onChange: (value: number) => void;
}

export function DemoSlider({ label, value, min, max, step = 1, displayValue, onChange }: DemoSliderProps) {
  return (
    <div className={styles.sliderRow}>
      <div className={styles.sliderLabel}>
        <span>{label}</span>
        <span>{displayValue ?? value}</span>
      </div>
      <input
        className={styles.slider}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export function DemoResult({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={styles.result}>
      <p className={styles.resultTitle}>{title}</p>
      <div>{children}</div>
    </div>
  );
}

export function DemoHint({ children }: { children: ReactNode }) {
  return <p className={styles.hint}>{children}</p>;
}

export function DemoTally({ children }: { children: ReactNode }) {
  return <div className={styles.tally}>{children}</div>;
}

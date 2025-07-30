import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => (
    <div className={styles.inputWrapper}>
      <input ref={ref} className={styles.input} {...props} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
);

Input.displayName = "Input";

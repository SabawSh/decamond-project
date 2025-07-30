import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) => {
  const classNames = [
    styles.button,
    styles[variant],
    disabled ? styles.disabled : "",
  ].join(" ");

  return (
    <button className={classNames} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

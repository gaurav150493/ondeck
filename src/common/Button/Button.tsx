import Link from "next/link";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./button.types";

export function Button({
  children,
  variant = "filled",
  size = "default",
  icon,
  iconPosition = "after",
  href,
  type = "button",
  fullWidth = false,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[variant],
    size === "large" ? styles.large : "",
    fullWidth ? styles.fullWidth : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "before" && (
        <span className={styles.icon}>{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "after" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

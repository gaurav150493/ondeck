import type { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "filled" | "hollow" | "gradient";
export type ButtonIconPosition = "before" | "after";

export type ButtonSize = "default" | "large";

export interface ButtonProps {
  size?: ButtonSize;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: ButtonIconPosition;
  href?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

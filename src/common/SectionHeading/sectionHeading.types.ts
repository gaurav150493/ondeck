import type { ReactNode } from "react";

export type EyebrowTone = "blue" | "gold";

export interface SectionHeadingProps {
  eyebrow: string;
  eyebrowTone?: EyebrowTone;
  title?: ReactNode;
  highlight?: string;
  id?: string;
}

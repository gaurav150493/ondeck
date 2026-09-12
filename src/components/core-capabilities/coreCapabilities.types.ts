import type { ReactNode } from "react";

export type CapabilitySide = "left" | "right";

export interface Capability {
  id: string;
  title: string;
  meta: string;
  href: string;
  side: CapabilitySide;
  icon: ReactNode;
  connector: string;
  detail: string;
}

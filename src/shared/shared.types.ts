import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup extends NavLink {
  items: NavLink[];
}

export interface IconListItem {
  icon: ReactNode;
  title: string;
  href: string;
}

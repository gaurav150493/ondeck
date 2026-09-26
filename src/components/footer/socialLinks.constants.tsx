import { InstagramIcon, XIcon } from "@/common/icons";
import { siteConfig } from "@/config/site.config";
import type { ReactNode } from "react";

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: <InstagramIcon size={15} /> },
  { label: "X", href: siteConfig.social.x, icon: <XIcon size={15} /> },
];

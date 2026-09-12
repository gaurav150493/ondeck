import { FacebookIcon, LinkedInIcon, YouTubeIcon } from "@/common/icons";
import { siteConfig } from "@/config/site.config";
import type { ReactNode } from "react";

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: <LinkedInIcon /> },
  { label: "Facebook", href: siteConfig.social.facebook, icon: <FacebookIcon /> },
  { label: "YouTube", href: siteConfig.social.youtube, icon: <YouTubeIcon /> },
];

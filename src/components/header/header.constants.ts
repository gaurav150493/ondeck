import type { NavGroup } from "@/shared/shared.types";

export const primaryNav: NavGroup[] = [
  {
    label: "Platform",
    href: "/platform",
    items: [
      { label: "Overview", href: "/platform/overview" },
      { label: "PAM", href: "/platform/pam" },
      { label: "CMS", href: "/platform/cms" },
      { label: "API", href: "/platform/api" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    items: [
      { label: "Casino", href: "/products/casino" },
      { label: "Sportsbook", href: "/products/sportsbook" },
      { label: "Prediction Markets", href: "/products/prediction-markets" },
      { label: "Live Casino", href: "/products/live-casino" },
      { label: "Poker & Games", href: "/products/poker-and-games" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "White Label", href: "/solutions/white-label" },
      { label: "Turnkey", href: "/solutions/turnkey" },
      { label: "Custom Solutions", href: "/solutions/custom" },
      { label: "Replacements", href: "/solutions/replacements" },
    ],
  },
  {
    label: "Company",
    href: "/company",
    items: [
      { label: "About Us", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
      { label: "News", href: "/company/news" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Help Center", href: "/resources/help-center" },
    ],
  },
];

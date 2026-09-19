import type { NavGroup } from "@/shared/shared.types";

export const primaryNav: NavGroup[] = [
  {
    label: "Solutions",
    href: "/solutions",
    items: [
      { label: "White-Label", href: "/solutions/white-label" },
      { label: "Turnkey", href: "/solutions/turnkey" },
      { label: "Custom Build", href: "/solutions/custom-build" },
      { label: "Platform Migration", href: "/solutions/platform-migration" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    items: [
      { label: "Games Aggregation", href: "/products/games-aggregation" },
      { label: "Sportsbook", href: "/products/sportsbook" },
      { label: "Prediction Markets", href: "/products/prediction-markets" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    items: [
      { label: "PAM", href: "/platform/pam" },
      { label: "CMS", href: "/platform/cms" },
      { label: "Promo Engine", href: "/platform/promo-engine" },
      { label: "Payments", href: "/platform/payments" },
      { label: "Fraud, Risk & KYC", href: "/platform/fraud-risk-kyc" },
      { label: "Agent System", href: "/platform/agent-system" },
      { label: "Sweepstakes", href: "/platform/sweepstakes" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "CRM", href: "/services/crm" },
      { label: "User Acquisition", href: "/services/user-acquisition" },
      { label: "Player Support", href: "/services/player-support" },
      { label: "VIP Management", href: "/services/vip-management" },
      { label: "Licensing & Compliance", href: "/services/licensing-compliance" },
    ],
  },
];

import type { NavGroup } from "@/shared/shared.types";

export const footerAbout =
  "Providing scalable iGaming and sportsbook solutions to help operators grow and perform efficiently.";

export const footerNav: NavGroup[] = [
  {
    label: "Sitemap",
    href: "/",
    items: [
      { label: "Solutions", href: "/sportsbook-solutions/" },
      { label: "Services", href: "/services/" },
      { label: "About Us", href: "/about-us/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Contact Us", href: "/contact-us/" },
    ],
  },
  {
    label: "Services",
    href: "/services/",
    items: [
      { label: "Casino Solutions", href: "/casino-solutions/" },
      { label: "Sportsbook Solutions", href: "/sportsbook-solutions/" },
      { label: "Prediction Markets", href: "/prediction-markets/" },
      { label: "Promo Engine", href: "/promo-engine/" },
      { label: "Payments", href: "/payments/" },
      { label: "Fraud, Risk & KYC", href: "/fraud-risk-kyc/" },
    ],
  },
  {
    label: "Get in Touch",
    href: "/contact-us/",
    items: [
      { label: "sales@ondeckglobal.com", href: "mailto:sales@ondeckglobal.com" },
      { label: "Contact us now", href: "/contact-us/" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-conditions/" },
];

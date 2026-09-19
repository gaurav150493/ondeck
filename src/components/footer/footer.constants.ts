import type { NavGroup } from "@/shared/shared.types";

export const footerAbout =
  "Providing scalable iGaming and sportsbook solutions to help operators grow and perform efficiently.";

export { primaryNav as footerNav } from "@/components/header/header.constants";

export const footerContact: NavGroup = {
  label: "Get in Touch",
  href: "/contact-us",
  items: [
    { label: "sales@ondeckglobal.com", href: "mailto:sales@ondeckglobal.com" },
    { label: "Contact us now", href: "/contact-us" },
  ],
};

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

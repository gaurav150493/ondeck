export const siteConfig = {
  name: "OnDeck Global",
  shortName: "OnDeck",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ondeckglobal.com",
  tagline: "The all-in-one iGaming platform for ambitious operators.",
  description:
    "OnDeck Global is an all-in-one iGaming platform for ambitious operators — casino, sportsbook, payments, player engagement and risk, launched in a week or migrated off legacy.",
  locale: "en_US",
  indexable: process.env.NEXT_PUBLIC_ENABLE_INDEXING === "true",
  social: {
    linkedin: "https://www.linkedin.com/company/ondeck-global",
    facebook: "https://www.facebook.com/ondeckglobal",
    youtube: "https://www.youtube.com/@ondeckglobal",
  },
} as const;

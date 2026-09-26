import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "Player Account Management | One Player Record, One Wallet",
  description: "The core of the platform. One player record, one wallet and one ledger across every vertical, with segmentation, KYC status and responsible gambling controls in a single system.",
};

export const hero: PageHeroContent = {
  image: "/images/pages/hero-pam.webp",
  eyebrow: "Player Account Management",
  title: "One player record.",
  titleAccent: "Everything plugs into it.",
  subhead: "Wallet, ledger, KYC status, limits, segments and bonus state in one system rather than four that have to agree with each other. Every other module on the platform reads from this one.",
  ctas: [
    { label: "Book a Demo", href: "/contact-us", variant: "filled" },
  ],
};

export const whyItMatters: ProseBandContent = {
  eyebrow: "The Spine",
  title: "Most platforms are several systems wearing one logo.",
  paragraphs: [
    "Casino from one place, sportsbook from another, a bonus engine bolted on, payments orchestrated somewhere else. It works until it does not, and when it stops working it does so in specific and expensive ways.",
    "A player has two balances that disagree. A bonus pays out against a wallet state that has already moved. Support sees one version of a player and finance sees another. Month-end reconciliation becomes a person’s full-time job. None of these are exotic failures. They are what happens when the player record is not a single thing.",
    "PAM is that single thing. One identity, one wallet, one ledger, one set of limits, one history, read by every other module rather than copied into them.",
  ],
};

export const playerRecord: CardGridContent = {
  eyebrow: "The Player Record",
  title: "Everything about a player,",
  titleAccent: "in one place.",
  groups: [
    {
      items: [
        { title: "Identity and account lifecycle", body: "Registration through verification, activity, dormancy, self-exclusion and closure, with every state change recorded." },
        { title: "Wallet and ledger", body: "A single real-money balance with a complete transaction ledger behind it. Every movement traceable to its source." },
        { title: "Multi-currency- Players hold and transact in the currency that suits their market, with your reporting consolidated.", body: "" },
        { title: "KYC and verification status", body: "Verification state, documents and outcomes attached to the player rather than living in a separate tool." },
        { title: "Responsible gambling controls", body: "Deposit, loss and session limits, cool-off periods and self-exclusion, enforced at the platform level across every vertical." },
        { title: "Segments", body: "The segmentation your CRM, promo engine and CMS all target, defined once." },
        { title: "Bonus state", body: "Active bonuses and wagering progress held against the same record as the wallet, so the two cannot drift apart." },
        { title: "Full audit trail", body: "Who changed what, when, and why. Including your own team." },
      ],
    },
  ],
};

export const backOffice: CardGridContent = {
  eyebrow: "For Your Team",
  title: "Familiar on day one.",
  intro: "The back office is built for people already fluent in white-label admin tools. Your team will find things roughly where they expect them, because the workflows follow the conventions they already know rather than reinventing them for the sake of looking different.",
  groups: [
    {
      items: [
        { title: "Player 360 view", body: "Everything about one player on one screen: balance, history, bonuses, verification, limits, sessions, risk flags." },
        { title: "Role-based permissions- Support, risk, finance and marketing each see and do what their role requires, and nothing else.", body: "" },
        { title: "Audited manual actions", body: "Adjustments, credits and overrides are possible when they need to be, and always recorded." },
        { title: "Bulk operations", body: "Act on a segment rather than a player at a time." },
      ],
    },
  ],
};

export const reporting: CardGridContent = {
  eyebrow: "The Numbers",
  title: "One definition of a player,",
  titleAccent: "so the numbers reconcile.",
  intro: "Because casino, sportsbook, payments and bonusing all read the same record, your reporting is not an exercise in joining four systems with different ideas of what a session is.",
  groups: [
    {
      items: [
        { title: "Revenue", body: "GGR and NGR by vertical, brand, market, segment and provider, on consistent definitions." },
        { title: "Bonus cost", body: "What promotions actually cost against what they returned, per campaign." },
        { title: "Cohorts and retention", body: "Player value over time rather than a snapshot of this month." },
        { title: "Data access", body: "Query and export your own data." },
      ],
    },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Can we run multiple brands on one PAM?", answer: "Yes, with separate player pools, front-ends and reporting on shared infrastructure." },
    { question: "Do players have one balance across casino and sportsbook?", answer: "Yes. One wallet, one balance, one transaction history, regardless of which vertical the money moves through." },
    { question: "Can we export our player data?", answer: "Yes. It is your data and you can take it with you." },
    { question: "How are responsible gambling limits enforced?", answer: "At the platform level, so a limit applies across every vertical rather than being enforced separately in each one." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Want to see the player record?",
  body: "The demo worth asking for is the 360 view. It is where you can tell whether a platform is one system or several.",
  cta: { label: "Book a Demo", href: "/contact-us" },
};

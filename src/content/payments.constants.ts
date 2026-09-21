import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "iGaming Payment Orchestration | 34+ Methods, One Layer",
  description: "Cards, wallets, regional rails and crypto through one orchestration layer. Routing, retries, automated payouts and reconciliation, on your PSP contracts.",
};

export const hero: PageHeroContent = {
  eyebrow: "Payments",
  title: "34+ methods.",
  titleAccent: "One orchestration layer.",
  subhead: "Cards, wallets, regional rails and crypto, routed intelligently, retried when they fail, reconciled automatically, and running on your processing contracts rather than ours.",
  ctas: [
    { label: "See Payment Coverage", href: "#coverage", variant: "filled" },
    { label: "Explore the Platform", href: "/platform/pam", variant: "hollow" },
  ],
};

export const whyItMatters: ProseBandContent = {
  eyebrow: "The Quiet Leak",
  title: "Payments is where operators lose money without noticing.",
  paragraphs: [
    "A failed deposit is not a neutral event. A player who tries to fund an account and cannot will often not try again, and nothing in your acquisition reporting will tell you it happened. It looks like a player who never converted.",
    "Withdrawals work the same way in reverse. Slow payouts are the most common reason players leave and the most common thing they tell other players about.",
    "Which is why this is an orchestration layer rather than a list of integrations. Coverage gets the transaction attempted. Orchestration is what gets it completed.",
  ],
};

export const coverage: CardGridContent = {
  eyebrow: "What Players Can Use",
  title: "Live across markets,",
  titleAccent: "not theoretically supported.",
  groups: [
    {
      items: [
        { title: "30+ fiat integrations", body: "Cards, bank transfer, and the regional methods that actually convert in your markets." },
        { title: "5+ crypto rails", body: "For markets and segments where crypto is the default rather than the novelty." },
        { title: "Mobile and wallet payments", body: "Apple Pay, Google Pay and the regional wallets that dominate in specific markets." },
        { title: "34+ methods live", body: "Across the platform today, with new methods added as markets require them." },
      ],
    },
  ],
};

export const orchestration: CardGridContent = {
  eyebrow: "Getting Transactions Through",
  title: "What happens between the player pressing deposit and the money arriving.",
  groups: [
    {
      items: [
        { title: "Routing", body: "Transactions directed by market, method, amount and player profile to the processor most likely to approve them." },
        { title: "Cascading and retries", body: "A declined transaction is retried through an alternative route rather than returned to the player as a failure." },
        { title: "Rules per market and segment", body: "Limits, fees, available methods and minimums configurable by jurisdiction, brand and player segment." },
        { title: "Approval rate visibility", body: "Which processors approve what, so the routing decisions are informed by your own data." },
      ],
    },
  ],
};

export const payouts: CardGridContent = {
  eyebrow: "Withdrawals",
  title: "The part players judge you on.",
  groups: [
    {
      items: [
        { title: "Automated approval", body: "Rules-based auto-approval within thresholds, so routine withdrawals do not sit in a queue waiting for a human." },
        { title: "Review workflows", body: "Withdrawals that need attention are surfaced with the risk and KYC context attached, rather than requiring three systems to assess." },
        { title: "Risk holds", body: "Holds applied by rule rather than by whoever happens to be looking." },
        { title: "Payout reporting", body: "Time to payout tracked as an operational metric, because it is one." },
      ],
    },
  ],
};

export const contracts: ProseBandContent = {
  eyebrow: "Commercial",
  title: "PSP-agnostic by design.",
  paragraphs: [
    "On turnkey and custom, your processing relationships stay yours. Your rates, your merchant accounts, your negotiations. We orchestrate across them rather than sitting between you and them.",
    "On white-label, payments run on our contracts, which is what removes the processing-history problem for a first launch. It is also the main reason operators eventually move to their own licence.",
    "Reconciliation runs against the same ledger as the rest of the platform, so payment records and player records do not have to be joined after the fact.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Can we use our own PSPs?", answer: "On turnkey and custom, yes. On white-label, payments run on our contracts." },
    { question: "How long does it take to add a new payment method?", answer: "Usually, a week. Longer if the integration is complex or requires regulatory approvals." },
    { question: "Do you support crypto?", answer: "Yes, across multiple rails, handled in the same cashier and the same ledger as fiat rather than as a separate system." },
    { question: "Can limits differ by market?", answer: "Yes. Limits, fees, minimums and available methods are all configurable per jurisdiction, brand and segment." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Tell us your markets.",
  body: "We will tell you which methods are live there, which we would add, and what approval rates look like.",
  cta: { label: "See Payment Coverage", href: "#coverage" },
};

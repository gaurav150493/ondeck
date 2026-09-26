import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "Sweepstakes Casino Platform | Dual Currency, Built for a Changing Map",
  description: "Gold Coins and Sweeps Coins, alternate method of entry, redemption workflows and jurisdiction controls that update as fast as the law does.",
};

export const hero: PageHeroContent = {
  image: "/images/pages/hero-sweepstakes.webp",
  eyebrow: "Sweepstakes",
  title: "Dual currency,",
  titleAccent: "built for a map that keeps changing.",
  subhead: "Promotional and sweepstakes currency, free entry handling, redemption with verification, and jurisdiction controls you can change the week a law does rather than the quarter after.",
  ctas: [
    { label: "Talk to Us", href: "/contact-us", variant: "filled" },
  ],
};

export const model: ProseBandContent = {
  eyebrow: "How It Works",
  title: "Two currencies,",
  titleAccent: "one of which is never sold.",
  paragraphs: [
    "Players buy packages of a promotional currency that has no redemption value, and receive a second, sweepstakes currency alongside it. Only the second one can be redeemed for prizes, and crucially it can always be obtained for free through an alternate method of entry.",
    "That structure is the entire legal argument for the model, and it only holds if the mechanics are implemented exactly. A free entry route that is technically present but practically unusable is where operators get into difficulty.",
  ],
};

export const theMap: CardGridContent = {
  eyebrow: "The Honest Part",
  title: "The most important feature in 2026 is turning a state off cleanly.",
  intro: "The regulatory position of dual-currency sweepstakes in the United States has changed substantially and is still changing. A significant and growing number of states have moved to prohibit or restrict the model, several through explicit legislation, and further bills are advancing. Operators have been withdrawing from individual states ahead of effective dates rather than testing enforcement.",
  groups: [
    {
      items: [
        { title: "State-level controls- Availability configured per jurisdiction and changed without a release.", body: "" },
        { title: "Geo enforcement", body: "Location verification at registration and at play, with VPN and proxy detection." },
        { title: "Clean wind-down- A defined process for exiting a jurisdiction: closing play, honouring outstanding redemptions, handling balances and notifying players.", body: "" },
      ],
    },
  ],
};

export const beyondUs: ProseBandContent = {
  eyebrow: "Other Applications",
  title: "Dual currency is not only a US answer.",
  paragraphs: [
    "The mechanic also supports social and free-to-play casino products in markets where real-money gaming is restricted or where an operator wants a non-wagering product alongside a licensed one: acquisition ahead of a licence, a brand-safe product for restricted markets, or a free-to-play tier that feeds a real-money business.",
  ],
};

export const compliance: ProseBandContent = {
  eyebrow: "What We Will And Will Not Do",
  title: "We build the mechanics.",
  titleAccent: "Your counsel owns the position.",
  paragraphs: [
    "We will tell you how the model works technically, what the platform enforces, and what we see other operators doing. We will not tell you your legal position is sound, in any jurisdiction, because that is not ours to say and the answer has been changing faster than any vendor can responsibly track.",
    "What the platform gives you is the ability to act on your counsel’s advice quickly: controls that change in an afternoon, verification you can tighten by market, and records that stand up when someone asks.",
  ],
};

export const anyModel: ProseBandContent = {
  eyebrow: "Configuration, Not Commitment",
  title: "A platform configuration,",
  titleAccent: "not a separate product.",
  paragraphs: [
    "Sweepstakes runs on white-label, turnkey or a custom build. Choose the commercial model that fits and switch this on within it.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Is the sweepstakes model still viable?", answer: "In some jurisdictions yes, in a growing number no, and the picture keeps moving. Anyone entering now should plan for a map that changes and build on a platform that can respond to it." },
    { question: "Do you provide legal advice on where we can operate?", answer: "No. We will tell you what the platform supports and what we observe in the market. Your counsel decides where you operate." },
    { question: "How does the free entry method work?", answer: "A genuine route to sweepstakes currency without purchase, implemented as a real part of the product. The specifics of what is acceptable vary and should be set with your counsel." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Thinking about dual currency?",
  body: "Bring your jurisdictions and your counsel’s position. We will tell you what the platform does, what it enforces, and how fast it changes when the law does.",
  cta: { label: "Talk to Us", href: "/contact-us" },
};

import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "Sportsbook Platform | Pre-Match, In-Play and Cash-Out",
  description: "A sportsbook on the same wallet, bonus engine and back office as your casino. Pre-match and in-play across global sports, with cash-out and one set of numbers.",
};

export const hero: PageHeroContent = {
  eyebrow: "Sportsbook",
  title: "One wallet. One back office.",
  titleAccent: "No seam.",
  subhead: "Pre-match and in-play across global sports with full cash-out, running on the same player record, the same bonus engine and the same reporting as everything else you operate.",
  ctas: [
    { label: "Book a Demo", href: "/contact-us", variant: "filled" },
    { label: "See Coverage", href: "#coverage", variant: "hollow" },
  ],
};

export const positioning: ProseBandContent = {
  eyebrow: "Why This One",
  title: "Sportsbook is where most all-in-one platforms stop being all-in-one.",
  paragraphs: [
    "Plenty of platforms will sell you a casino and then bolt somebody else’s sportsbook onto the side. The player finds out first: two balances, two bonus systems, a login that does not quite carry across, a visible seam where the product changes hands.",
    "Your team finds out second: two back offices, two support tools, and reporting that never quite reconciles because the definitions of a player and a session are different on each side.",
    "Ours sits on the same wallet, the same player record, the same promo engine, the same KYC and the same reporting as your casino. A player moves between them without noticing. Your team sees one set of numbers.",
  ],
};

export const coverage: CardGridContent = {
  eyebrow: "What Players Get",
  title: "Global sports,",
  titleAccent: "pre-match and live.",
  groups: [
    {
      items: [
        { title: "Pre-match markets", body: "Global coverage across major and secondary leagues, with market depth that holds up outside the headline fixtures." },
        { title: "In-play betting", body: "Live markets with pricing that updates through the event." },
        { title: "Cash-out", body: "Full and partial cash-out, so players can close a position before the event settles." },
        { title: "Multiples and accumulators", body: "Combination betting with the mechanics players in your markets expect." },
        { title: "Bet builder", body: "Same-game combinations priced as a single bet." },
        { title: "Player props", body: "Individual performance markets, which in several markets now drive more volume than match result." },
      ],
    },
  ],
};

export const integrated: CardGridContent = {
  eyebrow: "The Rest Of The Platform",
  title: "Everything that makes a sportsbook worth running.",
  groups: [
    {
      items: [
        { title: "Sports bonusing from the same promo engine", body: "Free bets, odds boosts and sports-specific mechanics driven from the engine that already runs your casino promotions." },
        { title: "One player record", body: "The same identity, the same KYC status, the same responsible gambling limits across both verticals." },
        { title: "Shared segmentation", body: "Your CRM sees a single player who does both, not two half-pictures that never join up." },
        { title: "Unified reporting", body: "Casino and sportsbook revenue in one place, on the same definitions, without a reconciliation exercise." },
      ],
    },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Can we run sportsbook without casino?", answer: "Yes. Most operators run both because the cross-sell is significant, but the sportsbook works as a standalone vertical." },
    { question: "Can players use one balance across casino and sportsbook?", answer: "Yes. One wallet, one balance, one transaction history." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Want to see it running?",
  body: "A demo takes half an hour and shows the sportsbook and casino on one balance, which is the part that is hard to explain in writing.",
  cta: { label: "Book a Demo", href: "/contact-us" },
};

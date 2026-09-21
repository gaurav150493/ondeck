import type { CardGridContent, FaqContent, PageHeroContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "iGaming Promo Engine | Bonuses, Free Rounds, Cashback and VIP",
  description: "Build bonuses, free rounds, cashback, tournaments and VIP tiers without a developer. Target by segment, trigger on behaviour, and see what every campaign actually cost.",
};

export const hero: PageHeroContent = {
  eyebrow: "Promo Engine",
  title: "Promotions without a development ticket.",
  titleAccent: "",
  subhead: "Bonuses, free rounds, cashback, tournaments, missions and VIP tiers, built by your marketing team, targeted at your segments, and reported against what they actually cost.",
  ctas: [
    { label: "Book a Demo", href: "/contact-us", variant: "filled" },
    { label: "Explore the Platform", href: "/platform/pam", variant: "hollow" },
  ],
};

export const mechanics: CardGridContent = {
  eyebrow: "What You Can Build",
  title: "The full set, configurable.",
  groups: [
    {
      items: [
        { title: "Deposit bonuses", body: "Match, fixed and tiered, with configurable wagering requirements, contribution rates and expiry." },
        { title: "Free rounds and free spins", body: "Across every provider that supports them, driven from one place rather than each provider’s own tool." },
        { title: "Cashback", body: "On losses or on turnover, on the cycle you choose, with or without wagering." },
        { title: "Tournaments and leaderboards", body: "Across providers rather than trapped inside one studio’s ecosystem." },
        { title: "Missions and quests", body: "Multi-step objectives that reward progress rather than deposits alone." },
        { title: "VIP and loyalty tiers", body: "Points, levels, thresholds and tier benefits that apply automatically." },
        { title: "Sports bonuses", body: "Free bets and odds boosts running on the same engine as your casino promotions." },
      ],
    },
  ],
};

export const targeting: CardGridContent = {
  eyebrow: "Who Gets What",
  title: "The right offer, to the right player,",
  titleAccent: "at the moment it matters.",
  intro: "A promotion everybody receives is a discount. A promotion that reaches the player who was about to leave is retention. The difference is targeting and timing.",
  groups: [
    {
      items: [
        { title: "Segment targeting", body: "Built on the same segments your CRM and CMS use, so a segment means one thing across the business." },
        { title: "Behavioural triggers", body: "Fire on deposit, first loss, inactivity, tier change, birthday or any event the platform records." },
        { title: "Scheduling and eligibility", body: "Windows, caps, frequency limits, opt-in or automatic." },
        { title: "Cross-vertical- One offer can span casino and sportsbook because both read the same player record.", body: "" },
      ],
    },
  ],
};

export const costAbuse: CardGridContent = {
  eyebrow: "The Part Nobody Sells",
  title: "Most promo engines are good at creating bonuses and bad at telling you what they cost.",
  intro: "Any platform can give money away. The difference between a promo engine and a liability is whether you can see the cost per campaign, enforce the terms you set, and stop the players who are there for the bonus rather than the game.",
  groups: [
    {
      items: [
        { title: "Bonus cost reporting", body: "Per campaign, per segment: what was issued, what was wagered, what converted to withdrawable balance and what it returned." },
        { title: "Wagering enforcement", body: "Requirements, game contribution rates and maximum bet during wagering, enforced by the platform rather than by your terms and conditions." },
        { title: "Abuse controls", body: "Duplicate account detection, bonus-hunting patterns and eligibility rules that hold up." },
        { title: "Caps and exposure limits", body: "Budget ceilings per campaign so a configuration error costs you a bad afternoon rather than a bad quarter." },
      ],
    },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Can marketing build campaigns without developers?", answer: "Yes. New mechanics need engineering. Campaigns using existing mechanics do not." },
    { question: "Do free rounds work across all providers?", answer: "Across every provider that supports the mechanic. Not all do, and we will tell you which during scoping rather than after launch." },
    { question: "Can one promotion cover casino and sportsbook?", answer: "No, and this is by design because the bonus terms are very different for casino and sportsbook bonuses." },
    { question: "How do we stop bonus abuse?", answer: "Platform-enforced terms, duplicate account detection and eligibility rules, working alongside the fraud and risk layer rather than separately from it." },
    { question: "Can we see whether a campaign made money?", answer: "Bonus cost and campaign performance are reported against the same revenue definitions as the rest of the platform." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Ask to see the cost report, not the bonus builder.",
  body: "Every platform demos the builder. The report is what tells you whether the promotions will pay for themselves.",
  cta: { label: "Book a Demo", href: "/contact-us" },
};

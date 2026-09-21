import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent, StepListContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "White-Label iGaming Platform",
  description: "Launch a branded casino and sportsbook on our licence, our provider contracts and our payment rails. Live in a week. You run the brand, we run everything underneath.",
};

export const hero: PageHeroContent = {
  eyebrow: "White-Label",
  title: "Your brand. Our licence.",
  titleAccent: "Live in a week.",
  subhead: "Everything underneath is already built, contracted and compliant. You bring the brand and the players. We handle the licence, the providers, the payments and the platform.",
  ctas: [
    { label: "Book a Launch Call", href: "/contact-us", variant: "filled" },
    { label: "Compare Solutions", href: "#compare", variant: "hollow" },
  ],
};

export const whoFor: ProseBandContent = {
  eyebrow: "Who This Is For",
  title: "Built for operators who need to be live,",
  titleAccent: "not licensed.",
  paragraphs: [
    "Getting your own gaming licence takes months and real capital before you have acquired a single player. Game providers want volume you cannot yet demonstrate. Payment processors want processing history you do not yet have. Every door needs you to already be through one of the others.",
    "White-label removes that problem entirely. You launch under our Anjouan licence, held by Keen Sage International Limited, on provider and payment contracts we already hold. The terms you operate on are the ones our volume unlocks, not the ones a first-year operator gets quoted.",
    "If you already hold a licence and your own contracts, turnkey will serve you better and we will say so on the call rather than after it.",
  ],
};

export const included: CardGridContent = {
  eyebrow: "Included",
  title: "A complete operation,",
  titleAccent: "not a starter kit.",
  groups: [
    {
      items: [
        { title: "Branded front-end", body: "Your name, colours, domain and tone across casino and sportsbook, built on configurable themes." },
        { title: "100+ game providers", body: "Pre-configured and ready to switch on. Pick the mix that suits your markets." },
        { title: "34+ payment methods", body: "Cards, wallets, regional rails and 5+ crypto options, live from day one." },
        { title: "Licence coverage", body: "Anjouan licence under Keen Sage International Limited." },
        { title: "Full back office", body: "Player management, bonusing, segmentation, reporting and risk tools." },
        { title: "Promo engine", body: "Bonuses, free spins, cashback, tournaments, VIP tiers and CRM orchestration built in." },
        { title: "Fraud, risk and KYC", body: "Four-layer defence across signup, device, identity and geo enforcement." },
        { title: "Marketing and affiliate stack", body: "Customer.io, Fast Track, Affilka, Partner Matrix and Affnook already connected." },
        { title: "Support and uptime", body: "24/7 technical support against a 99.99% uptime commitment." },
      ],
    },
  ],
};

export const launchPath: StepListContent = {
  eyebrow: "How It Works",
  title: "Four steps. Most of them are yours,",
  titleAccent: "not ours.",
  steps: [
    { title: "Brand and scope", body: "You bring a name, a logo, a domain and your target markets. We confirm what the licence covers and which payment methods work where you are going." },
    { title: "Configuration", body: "We build the front-end to your brand, enable your game mix, and switch on the payment methods for your markets." },
    { title: "Review and training", body: "You sign off the front-end. Your team gets walked through the back office. This usually takes an afternoon, not a fortnight." },
    { title: "Go live", body: "Seven days end to end when no new integrations are required. If you need a provider or a payment method we do not already run, we will give you a real date for it in step one." },
  ],
};

export const tradeOffs: CardGridContent = {
  eyebrow: "What White-Label Is Not",
  title: "Speed costs you control.",
  titleAccent: "Here is exactly what you give up.",
  intro: "Every white-label provider in this industry sells the upside. Fewer are direct about the constraints, which is why operators find out about them six months in.",
  groups: [
    {
      items: [
        { title: "You do not hold the licence", body: "Regulatory obligations and compliance decisions run through our framework. That is what makes the speed possible." },
        { title: "You do not hold the contracts", body: "Provider and PSP agreements are ours." },
        { title: "Customisation is configuration", body: "You can change how it looks and what is switched on. You cannot change how it works. Bespoke features are a custom build." },
      ],
    },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "How fast can we really launch?", answer: "Seven days when your game mix and payment methods are already integrated on our side, which covers most launches. Anything new goes into the scope call and gets its own date." },
    { question: "Do we own our players?", answer: "The player database is yours. You can export it, market to it, and take it with you if you move to your own licence later." },
    { question: "Can we use our own payment providers?", answer: "Not under white-label. Payments run on our contracts, which is part of what removes the processing-history problem. If you want your own PSP relationships, that is turnkey." },
    { question: "Which markets can we accept players from?", answer: "What our licence and payment coverage allow. We will give you the current list on the scope call rather than publishing one that goes stale." },
    { question: "Can we move to our own licence later?", answer: "Yes. That move is a migration rather than a fresh build, so your players, balances and bonus state carry across." },
    { question: "What does it cost?", answer: "We work on a revenue share model with a small monthly minimum commitment, which varies from market to market. Get in touch to get your quote." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Have a brand and no licence? That is the easy version.",
  body: "Tell us the markets you want and the mix you want to run. You will get a launch date on the call.",
  cta: { label: "Book a Launch Call", href: "/contact-us" },
};

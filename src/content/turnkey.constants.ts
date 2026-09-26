import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent, StepListContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "Turnkey iGaming Platform | Your Licence, Your Contracts, Our Tech",
  description: "Run a full casino and sportsbook on infrastructure you do not have to build. You keep your licence, your provider deals and your PSP rates. Multi-brand, API-first, live in weeks.",
};

export const hero: PageHeroContent = {
  image: "/images/pages/hero-turnkey.webp",
  eyebrow: "Turnkey",
  title: "Your licence. Your contracts.",
  titleAccent: "Our platform.",
  subhead: "Everything a modern operation needs, running on infrastructure you did not have to build, with every commercial relationship still in your name.",
  ctas: [
    { label: "Book a Scoping Call", href: "/contact-us", variant: "filled" },
    { label: "Compare Solutions", href: "#compare", variant: "hollow" },
  ],
};

export const whoFor: ProseBandContent = {
  eyebrow: "Who This Is For",
  title: "For operators who want the economics,",
  titleAccent: "not just the software.",
  paragraphs: [
    "You hold a licence, or you are getting one. You have provider relationships, or you can build them. What you do not want is to spend two years and a seven-figure budget building a player account management system that already exists.",
    "Turnkey gives you the platform and leaves the commercial layer alone. Your provider deals stay yours at your negotiated rates. Your PSPs and merchant accounts stay in your name. Your player data sits in a database you have full access to.",
    "That matters more the bigger you get. On white-label you are paying a share of revenue for someone else to hold those relationships. Past a certain volume, that share costs more than running the relationships yourself.",
  ],
};

export const included: CardGridContent = {
  eyebrow: "Included",
  title: "The full platform,",
  titleAccent: "on your terms.",
  intro: "Everything in white-label, and then the things white-label deliberately holds back.",
  groups: [
    {
      items: [
        { title: "Your licence, your framework", body: "You operate under your own licence in the markets it covers. Compliance decisions are yours." },
        { title: "Your provider contracts", body: "Direct deals at your rates. We integrate them. We do not sit between you and them." },
        { title: "Your PSPs and merchant accounts", body: "Your processing relationships and your pricing, orchestrated through our payment layer." },
        { title: "Full database access", body: "Your player data, queryable and exportable, with no gatekeeping." },
        { title: "Multi-brand from one instance", body: "Run several brands on shared infrastructure with separate front-ends, segments and reporting." },
        { title: "Full API access", body: "Wallet, player, bonus, game and payment layers exposed to your own development team." },
        { title: "Deep configuration", body: "Front-end and back-office behaviour configurable well beyond what white-label exposes." },
        { title: "Roadmap input", body: "What you need built gets discussed with the people who write the code, not filed into a queue." },
      ],
    },
  ],
};

export const launchPath: StepListContent = {
  eyebrow: "How It Works",
  title: "Contracts and build run in parallel.",
  steps: [
    { title: "Scope and audit", body: "We map your licence conditions, target markets, required game mix and payment needs. You get a written scope, an integration list and a launch date." },
    { title: "Contracts in parallel", body: "You progress provider and PSP agreements while we configure. Where we already hold an integration with a provider you are signing, that side is done before your paperwork is." },
    { title: "Configuration and integration", body: "Front-end, back office, providers, payments and your marketing stack. Your team gets access to a staging environment early." },
    { title: "Certification and launch", body: "Any certification your licence requires, final reconciliation, then go live." },
  ],
};

export const economics: ProseBandContent = {
  eyebrow: "White-Label Or Turnkey",
  title: "One costs less to start.",
  titleAccent: "The other costs less to run.",
  paragraphs: [
    "White-label is cheaper up front and more expensive per unit of revenue, because someone else is carrying the licence, the contracts and the processing risk. Turnkey is the reverse: more to set up, less to run, because those relationships are yours.",
    "Where the lines cross is a volume question, and it is specific to your markets, your game mix and your payment costs. It is not a question you should answer from a vendor’s website.",
    "Send us your monthly GGR and market mix and we will tell you which model is cheaper for you, including when the answer is white-label.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Do we need a licence before we start?", answer: "You need one before you go live, not before you start. We can build while your application is in progress. If you do not intend to hold one at all, white-label is the route." },
    { question: "Which licences do you support?", answer: "We work with operators across multiple jurisdictions and configure the platform to the conditions of yours. Bring your licence and its requirements to the scoping call." },
    { question: "Can we bring our existing provider deals?", answer: "Yes, that is the point of turnkey. Where we already hold an integration it is switched on. Where we do not, we build it and give you a date in the scope." },
    { question: "How many brands can we run?", answer: "Multiple brands from a single platform instance, with separate front-ends, player pools and reporting." },
    { question: "Do our developers get API access?", answer: "Yes. Wallet, player, bonus, game and payment layers, with documentation and a sandbox." },
    { question: "We are already live on another platform. What then?", answer: "Then this is a migration rather than a launch, and your players, balances, bonus state and affiliate attribution port across. See Platform Migration." },
    { question: "What does it cost?", answer: "Each requirement is different, and the set-up fee will reflect that. There will be a small, monthly recurring fee charged as a percent of the revenue." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Own the relationships. Skip the build.",
  body: "Bring your licence, your markets and your provider list. You will leave the call with a scope and a date.",
  cta: { label: "Book a Scoping Call", href: "/contact-us" },
};

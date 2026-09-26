import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "iGaming Agent System | Multi-Level Networks, Commission and Credit",
  description: "Multi-level agent hierarchies with configurable commission, credit lines and settlement cycles. Built for markets where distribution runs through people, not advertising.",
};

export const hero: PageHeroContent = {
  image: "/images/pages/hero-agent-system.webp",
  eyebrow: "Agent System",
  title: "Distribution that runs through people.",
  titleAccent: "",
  subhead: "Multi-level agent hierarchies, configurable commission, credit lines and settlement, accounted for properly inside the platform rather than tracked in a spreadsheet nobody trusts.",
  ctas: [
    { label: "Book a Demo", href: "/contact-us", variant: "filled" },
  ],
};

export const whoRunsOne: ProseBandContent = {
  eyebrow: "The Model",
  title: "In much of the world,",
  titleAccent: "players arrive through a person.",
  paragraphs: [
    "Across large parts of Asia and Latin America, acquisition does not run through paid media and affiliate links. It runs through agents: people with a network, a reputation and a book of players they personally serve.",
    "That model has requirements a standard platform does not meet. Agents need their own interface, their own reporting and their own players. Commission runs through multiple levels. Money frequently moves on credit rather than card. Settlement happens on a cycle rather than instantly.",
    "An agent system is not a referral scheme with extra steps. It is a different accounting model, and it has to be built in rather than reported on afterwards.",
  ],
};

export const hierarchy: CardGridContent = {
  eyebrow: "Structure",
  title: "Master agents, agents, sub-agents, players.",
  groups: [
    {
      items: [
        { title: "Multi-level structures- Hierarchies that reflect how your network actually works rather than forcing it into two tiers.", body: "" },
        { title: "Player assignment", body: "Every player belongs to an agent, permanently and visibly, with the chain above them intact." },
        { title: "Delegated administration", body: "Agents manage their own downline within the permissions you grant, without touching anyone else’s." },
        { title: "Per-level reporting- Every level sees its own performance and its downline, and nothing above or beside it.", body: "" },
      ],
    },
  ],
};

export const commission: CardGridContent = {
  eyebrow: "How Agents Earn",
  title: "Configurable models,",
  titleAccent: "calculated by the platform.",
  groups: [
    {
      items: [
        { title: "Revenue share or turnover-based- Whichever model your network runs on, configurable per level and per agent.", body: "" },
        { title: "Tiered rates", body: "Rates that change with volume or performance, applied automatically." },
        { title: "Automatic calculation", body: "Commission computed from the same ledger as everything else, so agent statements and your revenue reporting come from one source." },
        { title: "Transparent statements", body: "Agents see how their commission was derived, which removes the single largest source of disputes in these networks." },
      ],
    },
  ],
};

export const creditSettlement: CardGridContent = {
  eyebrow: "How Money Moves",
  title: "Credit lines,",
  titleAccent: "exposure limits and settlement cycles.",
  intro: "Many agent networks operate on credit rather than prefunded balances. An agent is extended a line, distributes to players, and settles on a cycle. The platform has to model that natively, because handling it outside the system is how operators lose track of what they are owed.",
  groups: [
    {
      items: [
        { title: "Credit lines", body: "Extended per agent, with limits enforced by the platform." },
        { title: "Exposure visibility", body: "Outstanding credit across the network, visible at every level, in real time." },
        { title: "Settlement cycles", body: "Configurable periods with statements generated automatically." },
        { title: "Cash and credit together", body: "Networks that run both models supported without separate systems." },
      ],
    },
  ],
};

export const exposure: ProseBandContent = {
  eyebrow: "The Honest Part",
  title: "Two risks worth naming before you start.",
  paragraphs: [
    "Credit is counterparty risk. Every line extended is money owed by a person, and the platform can enforce limits and show exposure but cannot make an agent pay. Networks fail on collections far more often than on technology, and the tooling exists to make that risk visible rather than to remove it.",
    "Agent networks also attract regulatory attention, because cash-based distribution and layered settlement are patterns that anti-money-laundering frameworks are designed to examine. Agent activity is logged, attributable and reportable, and your compliance obligations are yours to meet.",
  ],
};

export const anyModel: ProseBandContent = {
  eyebrow: "Configuration, Not Commitment",
  title: "Switch it on regardless of how you buy.",
  paragraphs: [
    "The agent system is a platform configuration rather than a separate product, so it runs on white-label, turnkey or a custom build. You choose the commercial model first and turn this on within it.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "How many levels can we run?", answer: "Up to 4 levels." },
    { question: "Do agents get their own interface?", answer: "Yes, with their own login, their own downline and their own reporting, scoped to what you permit." },
    { question: "Can agents operate on credit?", answer: "This depends on your settings, but is generally not recommended." },
    { question: "Can we run agents alongside normal registration?", answer: "Yes. Direct players and agent-introduced players coexist on the same platform with the same wallet and reporting." },
    { question: "Is there a mobile interface for agents?", answer: "Yes, our back-office is mobile-friendly." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Running a network already?",
  body: "Tell us your structure, your commission model and whether you run on credit. We will tell you what maps directly and what would need building.",
  cta: { label: "Book a Demo", href: "/contact-us" },
};

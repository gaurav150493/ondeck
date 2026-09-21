import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent, StepListContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "Managed iGaming CRM | Lifecycle Campaigns, Run For You",
  description: "Onboarding, reactivation, churn prevention and win-back campaigns planned, built and run by a team that does this daily. Your data, your brand, our execution.",
};

export const hero: PageHeroContent = {
  eyebrow: "Managed Crm",
  title: "The engine is not the problem.",
  titleAccent: "Nobody has time to run it.",
  subhead: "Lifecycle campaigns planned, built, tested and run by people who do it every day, using your data, your brand voice and the promo engine you already have.",
  ctas: [
    { label: "Book a CRM Review", href: "/contact-us", variant: "filled" },
    { label: "See the Platform", href: "/contact-us", variant: "hollow" },
  ],
};

export const problem: ProseBandContent = {
  eyebrow: "Why This Exists",
  title: "Most operators are running three campaigns and calling it a CRM.",
  paragraphs: [
    "A welcome email, a deposit bonus and something that fires when a player goes quiet. Everyone intends to build more. It slips, because the person who would build it is also running acquisition, approving withdrawals and answering the affiliate manager.",
    "Meanwhile the money is in the gap. The player who deposited once and never returned, the one who used to play weekly and stopped three weeks ago, the one who is one session away from churning and nobody noticed.",
    "This service is the team that does that work. Not software, and not advice. Campaigns planned, built, tested, sent and reported on.",
  ],
};

export const lifecycle: CardGridContent = {
  eyebrow: "The Lifecycle",
  title: "The campaigns that pay for themselves.",
  groups: [
    {
      items: [
        { title: "Onboarding journeys", body: "From registration to first deposit to second, which is the point where a player either becomes a player or does not." },
        { title: "Early-life retention- The first thirty days, where most of the churn happens and most operators are silent.", body: "" },
        { title: "Reactivation", body: "Structured sequences for players who have gone quiet, segmented by how valuable they were rather than treated as one group." },
        { title: "Churn prevention", body: "Intervention triggered by behavioural change rather than by the player already being gone." },
        { title: "Win-back- Longer-horizon campaigns for lapsed players, with the economics checked rather than assumed.", body: "" },
        { title: "Bonus calendar", body: "A planned promotional calendar rather than a reactive one, aligned to your sporting and seasonal peaks." },
        { title: "VIP identification and handoff", body: "Spotting emerging high-value players and passing them to VIP management before a competitor does." },
      ],
    },
  ],
};

export const channels: ProseBandContent = {
  eyebrow: "How It Reaches Players",
  title: "On the stack that is already connected.",
  paragraphs: [
    "Customer.io and Fast Track are already integrated into the platform, alongside the segments and triggers the player record provides. Campaigns run across email, SMS, push and on-site messaging, coordinated rather than channel by channel.",
  ],
};

export const howWeWork: StepListContent = {
  eyebrow: "The Engagement",
  title: "Audit, plan, build, run, report.",
  steps: [
    { title: "Audit", body: "We look at what is running now, what your segments look like, and where the obvious gaps are. You get the findings whether or not you continue." },
    { title: "Plan", body: "A campaign roadmap with priorities based on the size of the opportunity rather than what is easiest to build." },
    { title: "Build", body: "Journeys, creative, copy and offers built in the platform and tested before they reach a player." },
    { title: "Run", body: "Ongoing execution, monitoring and iteration, with a regular reporting cycle." },
  ],
};

export const staysYours: CardGridContent = {
  eyebrow: "The Boundary",
  title: "Your data, your brand,",
  titleAccent: "your sign-off.",
  groups: [
    {
      items: [
        { title: "Your player data", body: "It stays in your platform and it stays yours. We work inside it rather than exporting it." },
        { title: "Your brand voice", body: "We write to it. You approve before anything sends." },
        { title: "Your budget control", body: "Bonus spend runs to caps you set, reported against what it returned." },
        { title: "Your relationships", body: "If the engagement ends, the campaigns, segments and journeys remain in your platform." },
      ],
    },
  ],
};

export const measurement: ProseBandContent = {
  eyebrow: "The Honest Part",
  title: "CRM attribution is harder than most agencies admit.",
  paragraphs: [
    "A reactivated player who would have returned anyway still shows up in the campaign report. Anyone promising a precise uplift figure before knowing your data is selling you a number rather than a result.",
    "What we do instead is test properly: control groups where the volume supports them, incremental measurement rather than gross attribution, and bonus cost reported against revenue so a campaign that looks successful and loses money is visible as such.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Do we need to be on your platform?", answer: "Yes, this service is only available to OnDeck customers." },
    { question: "Who writes the copy?", answer: "We do, to your brand voice, with your approval before anything sends." },
    { question: "Can we keep running our own campaigns alongside?", answer: "Yes. Plenty of operators keep specific campaigns in-house and hand over the lifecycle work." },
    { question: "What happens if we stop?", answer: "Everything built stays in your platform and keeps running." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Want to know what you are leaving on the table?",
  body: "The audit will tell you, campaign by campaign, and it is useful to you whether or not we run it.",
  cta: { label: "Book a CRM Review", href: "/contact-us" },
};

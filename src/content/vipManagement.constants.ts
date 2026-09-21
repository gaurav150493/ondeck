import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "iGaming VIP Management | High-Value Player Retention, Done Responsibly",
  description: "Identify, develop and retain high-value players with dedicated hosts, personalised treatment and affordability checks built into the programme rather than bolted on.",
};

export const hero: PageHeroContent = {
  eyebrow: "Vip Management",
  title: "A small number of players decide your year.",
  titleAccent: "",
  subhead: "Identification, development and retention of high-value players, run by dedicated hosts, with affordability and harm checks built into the programme rather than added after something goes wrong.",
  ctas: [
    { label: "Talk to Us", href: "/contact-us", variant: "filled" },
  ],
};

export const concentration: ProseBandContent = {
  eyebrow: "Why It Matters",
  title: "Revenue in this industry is extremely concentrated.",
  paragraphs: [
    "A small fraction of players generate a large share of revenue at almost every operator. Losing three of them in a quarter is a worse outcome than losing three hundred ordinary players, and it is far more likely to happen quietly.",
    "Most operators know this and still manage those players the same way they manage everyone else: the same automated bonus, the same generic reactivation email, the same support queue. Then the player moves to a competitor who called them by name.",
  ],
};

export const identification: CardGridContent = {
  eyebrow: "Finding Them Early",
  title: "The valuable moment is before they are obviously valuable.",
  intro: "By the time a player is unmistakably a VIP, every competitor with a decent CRM has noticed too. The advantage is in spotting the trajectory early, while the relationship is still available to build.",
  groups: [
    {
      items: [
        { title: "Behavioural signals", body: "Deposit patterns, session depth and velocity that indicate potential rather than current value alone." },
        { title: "Early engagement", body: "Contact at the point the trajectory appears, not at the point the threshold is crossed." },
        { title: "Tier structures", body: "Clear progression that players can see and work toward, managed in the platform." },
        { title: "Handoff from CRM", body: "Automated lifecycle work hands over to a human at a defined point rather than continuing to send templates to someone worth a personal call." },
      ],
    },
  ],
};

export const relationship: CardGridContent = {
  eyebrow: "What Hosts Do",
  title: "A named person who actually knows them.",
  groups: [
    {
      items: [
        { title: "Dedicated hosts", body: "A consistent point of contact rather than whoever is on shift." },
        { title: "Personalised treatment", body: "Bonuses, limits and terms shaped to the individual within the parameters you set." },
        { title: "Direct access", body: "A route that bypasses the queue, which for this segment is most of the value." },
        { title: "Proactive contact", body: "Reaching out around behaviour and milestones rather than only when a player has gone quiet." },
        { title: "Reactivation", body: "Personal outreach to lapsed high-value players, which converts at a completely different rate from an email." },
      ],
    },
  ],
};

export const responsibility: CardGridContent = {
  eyebrow: "The Part That Is Not Optional",
  title: "The highest-value players are also the highest-risk ones.",
  intro: "This needs saying plainly, because the industry has an expensive history with it. The behaviour that makes a player valuable and the behaviour that indicates harm overlap significantly: rising deposits, increasing session length, chasing losses. A VIP programme that rewards those patterns without examining them is not a retention strategy, it is a liability, and regulators across multiple markets have treated it as one.",
  groups: [
    {
      items: [
        { title: "Affordability checks", body: "Proportionate to the level of spend, applied as part of the programme rather than triggered by a complaint." },
        { title: "Defined limits on incentives", body: "Rules about what can be offered to a player showing risk indicators, agreed before a host is in a conversation about it." },
        { title: "Hosts trained and accountable", body: "Incentives structured so a host is not rewarded for pushing a player who should be slowing down." },
      ],
    },
  ],
};

export const measurement: CardGridContent = {
  eyebrow: "Reporting",
  title: "Retention,",
  titleAccent: "value and risk together.",
  groups: [
    {
      items: [
        { title: "Retention by tier", body: "Whether the programme keeps the players it is meant to keep." },
        { title: "Value development", body: "Movement through tiers over time rather than a static count." },
        { title: "Cost of treatment", body: "What VIP bonusing and gifting costs against what those players return." },
        { title: "Risk flags", body: "Reported alongside value, not in a separate document nobody reads together with it." },
      ],
    },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Are hosts dedicated to our brand?This depends on what you choose, but we recommend dedicated VIP hosts who know your brand inside out.", answer: "What languages do hosts speak?We have only English and Spanish hosts available by default, but this isn’t a blocked. We have the infrastructure to recruit VIP hosts just about anywhere in the world." },
    { question: "Who decides what a player is offered?", answer: "You set the parameters and hosts work within them. Anything beyond comes back to you." },
    { question: "How does this work with responsible gambling requirements?", answer: "Affordability and harm checks are part of the programme design rather than a separate process, and the reporting shows value and risk together." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Who are your top twenty players, and when did anyone last speak to them?",
  body: "If that question is uncomfortable, it is the right place to start.",
  cta: { label: "Talk to Us", href: "/contact-us" },
};

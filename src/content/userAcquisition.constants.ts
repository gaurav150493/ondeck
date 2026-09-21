import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "iGaming User Acquisition | Affiliates, Media and Organic",
  description: "Affiliate programme build and management, media buying where it is permitted, and organic growth. Run by people who know which channels actually work in regulated markets.",
};

export const hero: PageHeroContent = {
  eyebrow: "User Acquisition",
  title: "Players,",
  titleAccent: "from the channels that actually work.",
  subhead: "Affiliate programmes built and managed properly, media buying where the market permits it, and organic growth that compounds. Tracked back to deposits rather than clicks.",
  ctas: [
    { label: "Book an Acquisition Review", href: "/contact-us", variant: "filled" },
  ],
};

export const constraint: ProseBandContent = {
  eyebrow: "Why Igaming Is Different",
  title: "Most of the playbook does not apply here.",
  paragraphs: [
    "Gambling advertising is restricted or prohibited on the major platforms in many markets, permitted with certification in others, and subject to rules that change without much warning. An acquisition strategy built on assumptions from another industry fails quickly and expensively.",
    "Which is why affiliates and organic search carry a disproportionate share of acquisition in this industry, and why the operators who win are the ones who treat the affiliate channel as a managed relationship business rather than a tracking link.",
  ],
};

export const affiliates: CardGridContent = {
  eyebrow: "The Primary Channel",
  title: "A programme,",
  titleAccent: "not a tracking link.",
  groups: [
    {
      items: [
        { title: "Programme setup", body: "Built on Affilka, Partner Matrix or Affnook, already integrated into the platform, with attribution that survives a platform migration." },
        { title: "Deal structures", body: "CPA, revenue share and hybrid terms structured around the value of the players a partner actually sends." },
        { title: "Recruitment", body: "Identifying and signing the affiliates who matter in your specific markets, which is a different list in every region." },
        { title: "Relationship management", body: "Ongoing contact, negotiation and support, because affiliates promote the operators who answer them." },
        { title: "Traffic quality control", body: "Monitoring for fraud, incentivised traffic and partners whose players deposit once and vanish." },
        { title: "Performance reporting", body: "Partner-level economics measured on player value rather than registrations." },
      ],
    },
  ],
};

export const paidMedia: ProseBandContent = {
  eyebrow: "Where It Is Permitted",
  title: "Media buying,",
  titleAccent: "within the rules of your market.",
  paragraphs: [
    "Run paid ads through our partners. These deals will be tailored to the markets you operate in.",
  ],
};

export const organic: CardGridContent = {
  eyebrow: "The Compounding Channel",
  title: "Slower,",
  titleAccent: "and the only one you own.",
  intro: "Paid traffic stops the day you stop paying. Affiliate traffic belongs to the affiliate. Organic search is the only acquisition channel that becomes an asset, and in a category where paid channels are restricted it is worth disproportionately more than in most industries.",
  groups: [
    {
      items: [
        { title: "Content and search", body: "Built on CMS pages you control, targeting the terms your market actually searches." },
        { title: "Technical foundations", body: "Site structure, page speed and multi-language signalling handled at the platform level." },
        { title: "Local relevance", body: "Market-specific content rather than translated versions of the same page." },
      ],
    },
  ],
};

export const measurement: CardGridContent = {
  eyebrow: "What We Report",
  title: "Deposits,",
  titleAccent: "not registrations.",
  intro: "Registration counts are the easiest number to move and the least useful one to have. Because acquisition sits on the same player record as everything else, a channel can be measured on what its players are worth three months later rather than on how many of them signed up.",
  groups: [
    {
      items: [
        { title: "Cost per depositing player", body: "By channel, by partner, by market." },
        { title: "Player value by source", body: "Cohort performance over time rather than a first-week snapshot." },
        { title: "Payback periods", body: "How long a channel takes to return its cost, which decides whether it can be scaled." },
      ],
    },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Do you work with our existing affiliates?", answer: "Yes. An established programme gets taken over and improved rather than replaced." },
    { question: "Who owns the affiliate relationships?", answer: "You do. The contracts and the relationships are in your name and stay with you." },
    { question: "Can you run acquisition if we are not on your platform?", answer: "What budget do we need?" },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Where are your players actually coming from?",
  body: "Most operators know the number and not the economics. The review breaks it down by channel and partner on player value rather than volume.",
  cta: { label: "Book an Acquisition Review", href: "/contact-us" },
};

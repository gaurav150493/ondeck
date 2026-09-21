import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "iGaming CMS | Change the Site Without Shipping Code",
  description: "Lobbies, landing pages, banners, localisation and SEO controlled by your marketing team. Schedule campaigns, target by segment, launch a market without a release.",
};

export const hero: PageHeroContent = {
  eyebrow: "Content Management",
  title: "Change the site without shipping code.",
  titleAccent: "",
  subhead: "Lobbies, landing pages, banners, menus and copy, controlled by the people who own the campaign rather than the people who own the release schedule.",
  ctas: [
    { label: "Book a Demo", href: "/contact-us", variant: "filled" },
  ],
};

export const problem: ProseBandContent = {
  eyebrow: "Why It Matters",
  title: "A campaign that lands on Friday should not need a Tuesday release.",
  paragraphs: [
    "On most platforms, changing a banner is a ticket. Reordering a lobby is a ticket. A landing page for a new affiliate deal is a ticket, and it sits in a queue behind every other operator on that platform.",
    "The cost is not the development time. It is the campaigns that never run because the lead time made them pointless, and the reaction you could not make because the moment had passed by the time the release went out.",
    "Everything a marketing team touches lives in the CMS. If you need a developer to change it, we have built it wrong.",
  ],
};

export const controls: CardGridContent = {
  eyebrow: "Without A Developer",
  title: "The whole surface the player sees.",
  groups: [
    {
      items: [
        { title: "Lobbies", body: "Game categories, ordering, featured positions and merchandising across every provider in the catalogue." },
        { title: "Landing pages", body: "Campaign and affiliate pages built from components, live in minutes." },
        { title: "Banners and promotional slots", body: "Creative, placement, scheduling and targeting." },
        { title: "Navigation and static content", body: "Menus, footers, help pages, terms and policy content." },
        { title: "Scheduling", body: "Content that goes live and comes down on its own, which matters most at 2am on a weekend." },
        { title: "Segment targeting", body: "Different players see different content, driven by the same segments the promo engine and CRM use." },
      ],
    },
  ],
};

export const localisation: CardGridContent = {
  eyebrow: "Multiple Markets",
  title: "A new market should be a configuration,",
  titleAccent: "not a project.",
  intro: "Language, currency, game availability, payment methods, regulatory copy and market-specific promotions all vary by jurisdiction, and all of them are content rather than code.",
  groups: [
    {
      items: [
        { title: "Multi-language content- Managed per market, with fallbacks so nothing renders empty.", body: "" },
        { title: "Market-specific variation- Different lobbies, promotions, payment displays and terms per market.", body: "" },
      ],
    },
  ],
};

export const seo: CardGridContent = {
  eyebrow: "Organic Traffic",
  title: "Controls for operators who do not only buy their traffic.",
  intro: "Plenty of iGaming platforms treat the public site as a shell around the game client, which is fine until you want organic traffic and discover you cannot edit a page title.",
  groups: [
    {
      items: [
        { title: "Meta titles and descriptions", body: "Per page, per market, editable." },
        { title: "URL structure", body: "Readable, controllable slugs." },
        { title: "Structured data and sitemaps", body: "Generated and maintained rather than left to you." },
        { title: "Multi-language SEO- Correct language and region signalling so markets do not compete with each other in search.", body: "" },
      ],
    },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Do we need developers to use it?", answer: "No. That is the point of it. Developers are needed for new component types, not for content." },
    { question: "Can we run different content per brand?", answer: "Yes. Brands can share components and diverge entirely on content, theme and market configuration." },
    { question: "Can we schedule campaigns in advance?", answer: "Yes, with content publishing and expiring automatically." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Want to see how fast a page goes live?",
  body: "Ask for the lobby and landing page walkthrough. It is a short demo and it tells you what your marketing team’s week will look like.",
  cta: { label: "Book a Demo", href: "/contact-us" },
};

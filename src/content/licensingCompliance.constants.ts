import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "iGaming Licensing and Compliance Support | Launch Under Our Licence",
  description: "Anjouan licence coverage under Keen Sage International Limited for operators without their own, plus support for operators pursuing and maintaining a licence of their own.",
};

export const hero: PageHeroContent = {
  eyebrow: "Licensing & Compliance",
  title: "The door everyone gets stuck at first.",
  titleAccent: "",
  subhead: "Launch under our licence while you build, or get support pursuing your own. Either way the licence stops being the reason you are not live yet.",
  ctas: [
    { label: "Talk to Us", href: "/contact-us", variant: "filled" },
  ],
};

export const problem: ProseBandContent = {
  eyebrow: "Why It Blocks People",
  title: "A licence takes months and costs money before you have a single player.",
  paragraphs: [
    "Application fees, capital requirements, corporate structuring, due diligence on every shareholder, and a timeline measured in months rather than weeks. All of it spent before you know whether the business works.",
    "Meanwhile payment processors want to see a licence before they will consider you, and most game providers want the same. It is a circular problem and it stops more operators than any technical obstacle does.",
  ],
};

export const launchUnderOurs: CardGridContent = {
  eyebrow: "Licence Coverage",
  title: "Anjouan,",
  titleAccent: "under Keen Sage International Limited.",
  intro: "Operators without their own licence can launch under ours. You operate inside our compliance framework, on our provider and payment contracts, and you are live in days rather than quarters.",
  groups: [
    {
      items: [
        { title: "Included with white-label- Licence coverage is part of the white-label model rather than a separate purchase.", body: "" },
        { title: "Market coverage", body: "Where you can accept players is determined by what the licence permits, confirmed in scoping." },
        { title: "A defined path off it", body: "When your own licence makes sense, moving to it is a migration rather than a rebuild." },
      ],
    },
  ],
};

export const getYourOwn: CardGridContent = {
  eyebrow: "When It Is Time",
  title: "Support for operators going it alone.",
  groups: [
    {
      items: [
        { title: "Jurisdiction selection", body: "Which licence fits your markets, your budget and your payment requirements." },
        { title: "Timeline and cost expectations", body: "What the process actually involves before you commit to it." },
        { title: "Platform readiness", body: "Configuring the platform to the conditions of the licence you are pursuing so certification is not a surprise." },
      ],
    },
  ],
};

export const ongoing: ProseBandContent = {
  eyebrow: "After The Licence",
  title: "Holding a licence is a continuing obligation.",
  paragraphs: [
    "The application is the beginning. What follows is reporting, record keeping, responsible gambling obligations, anti-money-laundering programmes, advertising standards and audits, all of which continue for as long as you operate.",
  ],
};

export const boundary: ProseBandContent = {
  eyebrow: "What We Are Not",
  title: "We are not your lawyers.",
  paragraphs: [
    "We provide licence coverage, platform configuration and operational support. We do not provide legal advice, we do not opine on whether a market is safe for you to enter, and we will tell you when a question needs counsel rather than answering it ourselves.",
    "Anyone in this industry who tells you a grey market is fine is doing you harm. The honest answer is usually that it depends on your structure, your appetite and your lawyers, and that is the answer you will get here.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Can we launch without our own licence?", answer: "Yes, under our Anjouan licence held by Keen Sage International Limited, as part of the white-label model." },
    { question: "Which markets does that cover?", answer: "What the licence permits, which we confirm in scoping rather than publishing a list that goes out of date." },
    { question: "Can we move to our own licence later?", answer: "Yes, and that move is a migration, so your players, balances and bonus state carry across." },
    { question: "Do you help us get our own licence?", answer: "Yes, we can assist you in procuring your own license." },
    { question: "Do you provide legal advice?", answer: "No. We provide coverage, configuration and operational support, and we will tell you when something needs your counsel." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Stuck on the licence?",
  body: "Tell us your markets and your timeline. There is usually a route to being live sooner than you think, and we will be straight with you about what it costs in control.",
  cta: { label: "Talk to Us", href: "/contact-us" },
};

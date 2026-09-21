import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "iGaming Fraud Prevention, Risk and KYC | Four-Layer Defence",
  description: "Signup, device, identity and geo enforcement working together, with SumSub, Usercheck and Fingerprint integrated. Stop multi-accounting and bonus abuse without punishing real players.",
};

export const hero: PageHeroContent = {
  eyebrow: "Fraud, Risk & Kyc",
  title: "Four layers between you and the people who are not here to play.",
  titleAccent: "",
  subhead: "Signup, device, identity and geography, checked together rather than separately, so the pattern is visible even when each individual signal looks fine.",
  ctas: [
    { label: "Book a Demo", href: "/contact-us", variant: "filled" },
  ],
};

export const layers: CardGridContent = {
  eyebrow: "Defence In Depth",
  title: "No single check catches a determined abuser.",
  intro: "Any one signal can be defeated. Email addresses are free, devices can be reset, documents can be borrowed and locations can be masked. What is difficult is defeating all four at once, consistently, at scale.",
  groups: [
    {
      items: [
        { title: "Layer one: signup", body: "Email and phone validation, disposable address detection and duplicate registration checks, using Usercheck." },
        { title: "Layer two: device", body: "Device fingerprinting through Fingerprint, linking accounts that share hardware regardless of what details were entered." },
        { title: "Layer three: identity", body: "Document verification, liveness and sanctions screening through SumSub." },
        { title: "Layer four: geography", body: "Geo enforcement so players are only accepted where your licence permits, with VPN and proxy detection." },
      ],
    },
  ],
};

export const multiAccounting: CardGridContent = {
  eyebrow: "The Common Case",
  title: "Most fraud is not sophisticated.",
  titleAccent: "It is repetitive.",
  intro: "The volume problem for most operators is not organised crime. It is the same person opening nine accounts to claim a welcome bonus nine times, and the small professional community that does this across every operator in a market.",
  groups: [
    {
      items: [
        { title: "Account linking", body: "Shared devices, payment instruments, addresses and behavioural patterns surfaced automatically." },
        { title: "Bonus eligibility enforcement", body: "Rules applied by the platform at claim time, not argued over in support afterwards." },
        { title: "Risk scoring", body: "Players flagged for review by rule rather than by whoever happens to notice." },
      ],
    },
  ],
};

export const responsibleGambling: CardGridContent = {
  eyebrow: "A Different Obligation",
  title: "Related tooling,",
  titleAccent: "different purpose.",
  intro: "Responsible gambling shares infrastructure with fraud and risk, and it is not the same thing. Fraud tooling protects the business. Responsible gambling protects players, and in most regulated markets it is a legal duty rather than a commercial choice.",
  groups: [
    {
      items: [
        { title: "Player-set limits- Deposit, loss and session limits set by the player and enforced at the platform level across every vertical.", body: "" },
        { title: "Cool-off and self-exclusion- Enforced immediately and preserved through a platform migration, because losing an exclusion record is a serious failure.", body: "" },
        { title: "Behavioural indicators", body: "Patterns surfaced for review by your team." },
      ],
    },
  ],
};

export const reviewWorkflows: ProseBandContent = {
  eyebrow: "For Your Team",
  title: "Decisions with the context attached.",
  paragraphs: [
    "Flagged cases arrive with everything needed to judge them: verification status, device links, payment history, risk score, session behaviour. One screen rather than four systems and a guess.",
    "Every decision is recorded, which matters when a regulator, a payment processor or a player asks why an account was restricted.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Which KYC provider do you use?", answer: "SumSub for identity and document verification, Usercheck for email and phone validation, Fingerprint for device intelligence." },
    { question: "Can we use our own KYC provider?", answer: "Yes, we can integrate any KYC provider of your choice." },
    { question: "Does KYC status survive a platform migration?", answer: "Yes. Verified players stay verified, which avoids a mass re-verification event at cutover." },
    { question: "How do you handle VPN users?", answer: "Detected at the geo layer and handled according to your policy, since the correct response differs by market and by licence." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "Ask about the review queue.",
  body: "Integrations are easy to list. What matters is what your risk team sees when a case is flagged, and how long it takes them to decide.",
  cta: { label: "Book a Demo", href: "/contact-us" },
};

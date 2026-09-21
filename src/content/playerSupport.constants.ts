import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";
import type { Fact } from "@/components/facts-figures/factsFigures.constants";

export const meta = {
  title: "Outsourced iGaming Player Support | Multilingual, Round the Clock",
  description: "Trained player support across chat, email and tickets, working inside your platform with the player record, KYC status and payment history already in front of them.",
};

export const hero: PageHeroContent = {
  eyebrow: "Player Support",
  title: "Support that already knows who it is talking to.",
  titleAccent: "",
  subhead: "Trained agents working inside your platform, with the player record, verification status, payment history and bonus state in front of them from the first message.",
  ctas: [
    { label: "Talk to Us", href: "/contact-us", variant: "filled" },
    { label: "See the Platform", href: "/contact-us", variant: "hollow" },
  ],
};

export const different: ProseBandContent = {
  eyebrow: "Not A Generic Contact Centre",
  title: "Most player contacts are about money.",
  paragraphs: [
    "A withdrawal that has not arrived. A verification document rejected without an obvious reason. A bonus that did not credit. A deposit that failed at the processor.",
    "A generic outsourced agent handles those by raising a ticket with you, which means the player waits twice and your team does the work anyway. An agent who can see the payment attempt, the KYC decision and the bonus state resolves it in the conversation.",
    "That is the difference between support that costs you less and support that costs you a player.",
  ],
};

export const scope: CardGridContent = {
  eyebrow: "Scope",
  title: "The contacts that make up the volume.",
  groups: [
    {
      items: [
        { title: "Account and access", body: "Registration problems, login issues, profile changes." },
        { title: "Verification", body: "Guiding players through KYC, explaining rejections and chasing missing documents." },
        { title: "Payments", body: "Deposit failures, withdrawal status, method availability and limits." },
        { title: "Bonuses and promotions", body: "Eligibility, wagering progress and terms, answered from the actual player state rather than from the terms page." },
        { title: "Technical issues", body: "Game faults, disconnections and round disputes, escalated with the session data attached." },
        { title: "Complaints", body: "Handled to a defined process with escalation paths and a record of every step." },
      ],
    },
  ],
};

export const coverage: ProseBandContent = {
  eyebrow: "Hours, Languages, Channels",
  title: "The numbers that matter.",
  paragraphs: [
    "Our team is trained and staffed to provide 24/7 support over live chat, email and over calls. We always have agents fluent in English available for deployment on your brands. For support in other languages, we need a ramp-up duration of 1 month.",
  ],
};

export const quality: CardGridContent = {
  eyebrow: "Measurement",
  title: "Support is one of the few things in this industry that is properly measurable.",
  groups: [
    {
      items: [
        { title: "First response time", body: "Measured by channel, reported, and committed to." },
        { title: "Resolution rate", body: "How much is closed without escalation to your team, which is the actual value of the service." },
        { title: "Player satisfaction", body: "Collected at the point of contact rather than inferred." },
        { title: "Contact drivers", body: "What players are contacting you about, which frequently identifies a product problem worth fixing rather than a support problem worth staffing." },
      ],
    },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Do agents work only on our brand?", answer: "Depends on your requirement. You can opt in for dedicated agents or you can share them with other brands." },
    { question: "Can they make decisions or only escalate?", answer: "Within defined limits agreed with you, so routine cases resolve in the conversation and anything beyond those limits comes to your team with the context attached." },
    { question: "Do we keep our own support team?", answer: "Many operators keep a small senior team for escalations and complaints and hand over first-line volume. That works well." },
    { question: "What tools do agents use?", answer: "Your platform, so they see the same player record your own team does." },
  ],
};

export const facts: Fact[] = [
  { value: "30", label: "Projects", note: "Launched" },
  { value: "15", label: "Operators", note: "Worldwide" },
  { value: "99.99%", label: "Uptime", note: "Guaranteed" },
  { value: "24/7", label: "Technical", note: "Support" },
];

export const closing = {
  title: "What is your first response time right now?",
  body: "If the honest answer is that nobody measures it, that is the place to start. Tell us your volumes and languages and we will tell you what it would take.",
  cta: { label: "Talk to Us", href: "/contact-us" },
};

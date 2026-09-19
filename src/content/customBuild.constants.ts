import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent, StepListContent } from "@/components/page-sections/pageSections.types";

export const meta = {
  alternates: { canonical: "/solutions/custom-build" },
  title: "Custom iGaming Platform Development | Build on a Proven Core",
  description: "A product designed around your model, built on a platform core that already handles wallet, compliance, payments and providers. Bespoke where it matters, proven where it does not.",
};

export const hero: PageHeroContent = {
  eyebrow: "Custom Build",
  title: "Build something that does not exist yet.",
  titleAccent: "",
  subhead: "Your product, your model, your interface. Built on a core that already handles the wallet, the compliance and the integrations, so the risk sits in the new part rather than all of it.",
  ctas: [
    { label: "Start with Discovery", href: "/contact-us", variant: "filled" },
    { label: "Compare Solutions", href: "#compare", variant: "hollow" },
  ],
};

export const whoFor: CardGridContent = {
  eyebrow: "Who This Is For",
  title: "Three kinds of operator end up here.",
  groups: [
    {
      items: [
        { title: "The brand whose product is the differentiator", body: "You are not competing on game count. You are competing on an experience nobody else offers, and a themed template cannot deliver it." },
        { title: "The operator with an unusual model", body: "Agent networks, sweepstakes, prediction markets, crypto-native mechanics, social and free-to-play hybrids. Models the standard platform was not shaped around." },
        { title: "The operator with a development team", body: "You have engineers. You do not want a product, you want infrastructure they can build on, with real APIs and a release process." },
      ],
    },
  ],
};

export const bespoke: CardGridContent = {
  eyebrow: "The Bespoke Layer",
  title: "Designed,",
  titleAccent: "not re-skinned.",
  groups: [
    {
      items: [
        { title: "A front-end built from scratch", body: "Your own interface and user journeys, designed around your model rather than themed on top of someone else’s." },
        { title: "Custom modules", body: "Features that do not exist on our platform today, and will not exist on your competitors’ tomorrow." },
        { title: "API-first architecture", body: "Wallet, player, bonus, game and payment layers exposed as documented endpoints, plus custom endpoints for what you commission." },
        { title: "A dedicated environment", body: "Isolated infrastructure, scaled and tuned to your traffic rather than shared with every other operator on the platform." },
        { title: "Your team alongside ours", body: "Documented APIs, a sandbox, a shared release process and a cadence your engineers can plan around." },
        { title: "Roadmap ownership", body: "What you commission is yours in the roadmap, not a suggestion competing against other clients’ requests." },
      ],
    },
  ],
};

export const proven: ProseBandContent = {
  eyebrow: "The Part You Do Not Rebuild",
  title: "Custom should mean the new part,",
  titleAccent: "not all of it.",
  paragraphs: [
    "Most failed platform builds do not fail on the interesting feature. They fail on the wallet reconciling incorrectly under load, the bonus engine allowing an exploit, or a payment integration that breaks quietly at the worst moment. Those are solved problems, and solving them again costs eighteen months.",
    "So the core stays the core: player account management, wallet and ledger, the bonus and promo engine, payment orchestration across 34+ methods, fraud, risk and KYC, provider integrations across 100+ suppliers, and reporting. Proven, maintained and already carrying live traffic.",
    "You pay to build what is genuinely new. Not to rebuild what already works.",
  ],
};

export const process: StepListContent = {
  eyebrow: "The Process",
  title: "Discovery first, always.",
  steps: [
    { title: "Discovery and specification", body: "We work through your model, your requirements and the parts that genuinely need building. The output is a written specification with a fixed scope, a timeline and a price. It is useful to you whether or not you build it with us." },
    { title: "Design", body: "Interface and experience design against the specification, reviewed with you before a line of production code is written." },
    { title: "Build in sprints", body: "Working software on a regular demo cadence. You see progress continuously rather than at the end, and scope changes get costed as they arise rather than argued about later." },
    { title: "UAT and certification", body: "Your team tests against real scenarios. Any certification your licence requires happens here." },
    { title: "Launch and iterate", body: "Go live, then keep shipping. Custom clients tend to have a roadmap rather than a finish line." },
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "How long does a custom build take?", answer: "It depends entirely on what is being built, which is why discovery comes first and produces a fixed timeline rather than an estimate." },
    { question: "How is it priced?", answer: "Deployment price depends on the scope of work. Post-deployment, we charge a monthly fee equivalent to a small percentage of your revenue." },
    { question: "Do we own the code?", answer: "No, the code remains the intellectual property of OnDeck." },
    { question: "Can we start with turnkey and go custom later?", answer: "Yes, and for most operators that is the sensible order. Launch on turnkey, learn what your players actually need, then build that rather than what you assumed at the start." },
    { question: "Who maintains it once it is live?", answer: "We do, under the same 24/7 support and 99.99% uptime commitment as the rest of the platform. Custom modules are maintained as part of the platform, not left to rot in a corner." },
    { question: "Can our own developers work on it?", answer: "Yes. Documented APIs, a sandbox environment and a shared release process. How far into the stack your team can reach is agreed in discovery." },
  ],
};


export const closing = {
  title: "Have something specific in mind?",
  body: "Bring the model and the constraints. Discovery will tell you what it takes to build, what it costs, and whether you need a custom build at all.",
  cta: { label: "Start with Discovery", href: "/contact-us" },
};

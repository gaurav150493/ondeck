import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent, StepListContent } from "@/components/page-sections/pageSections.types";

export const meta = {
  alternates: { canonical: "/solutions/platform-migration" },
  title: "iGaming Platform Migration | Move Off Legacy Without Losing Players",
  description: "Port your player database, wallet balances, bonus state and affiliate attribution to a modern stack. Keep your provider mix and PSP contracts. Parallel run before cutover.",
};

export const hero: PageHeroContent = {
  eyebrow: "Platform Migration",
  title: "Move off legacy.",
  titleAccent: "Keep your players.",
  subhead: "Your database, balances, bonus state and affiliate attribution port across intact. Your provider mix and PSP contracts come with you. Nobody has to re-register, re-verify, or learn a new back office.",
  ctas: [
    { label: "Book a Migration Review", href: "/contact-us", variant: "filled" },
    { label: "See What Ports", href: "#inventory", variant: "hollow" },
  ],
};

export const problem: ProseBandContent = {
  eyebrow: "Why Operators Stay Stuck",
  title: "You already know the platform is holding you back.",
  paragraphs: [
    "That's rarely the hard part. The hard part is that migrating feels like betting the business on a weekend.",
    "The fears are specific and they're reasonable. Players who have to re-register don't all come back. Bonus balances that don't survive the move turn into support tickets and chargebacks. Affiliate attribution that breaks mid-month turns into a commission dispute with every partner you have. Open bets have to settle somewhere. And regulators expect transaction history to still exist after you've moved.",
    "So most operators put it off for another year, and pay for that year in release velocity, integration fees, and features their competitors already shipped.",
    "We built our migration path around those specific failure points, not around a sales deck.",
  ],
};

export const inventory: CardGridContent = {
  eyebrow: "The Inventory",
  title: "Everything that matters moves with you.",
  intro: "Before anything is agreed, we map your existing data against this list and tell you exactly what carries, what needs transforming, and what genuinely cannot move.",
  groups: [
    {
      label: "Ports cleanly",
      items: [
        { title: "Player accounts", body: "Logins, profile data, and account status. Players sign in with the credentials they already use." },
        { title: "Wallet balances", body: "Real-money balances reconciled to the cent, with a frozen-ledger checkpoint both sides sign off before cutover." },
        { title: "Bonus state", body: "Active bonuses, wagering progress, and remaining requirements. Nobody loses progress they'd already earned." },
        { title: "Segments and VIP tiers", body: "CRM segmentation and loyalty standing carry across, so campaigns keep running against the same audiences." },
        { title: "KYC verification status", body: "Verified players stay verified. No mass re-verification event." },
        { title: "Responsible gambling controls", body: "Deposit limits, session limits, cool-offs and self-exclusions transfer as a compliance priority, not an afterthought." },
        { title: "Affiliate attribution", body: "Existing player-to-affiliate links are preserved, so commission continuity holds through the move." },
        { title: "Transaction history", body: "Retained and queryable for regulatory reporting and player disputes." },
      ],
    },
    {
      label: "Needs handling",
      items: [
        { title: "Stored payment tokens", body: "Card tokens are held by your PSP and are rarely portable between platforms. Where the PSP relationship continues, we work with them on token migration. Where it doesn't, first deposits after cutover require re-entry. We tell you which applies before you sign." },
        { title: "Open sportsbook bets", body: "Either settled out on the legacy platform during a defined window, or migrated with the original terms intact. We recommend the first for cleanliness and will do the second if your volumes demand it." },
        { title: "Password hashes", body: "Portable when the legacy platform uses a standard hashing algorithm. Where it doesn't, we run a transparent reset flow rather than pretending otherwise." },
      ],
    },
  ],
};

export const path: StepListContent = {
  eyebrow: "The Path",
  title: "Four phases.",
  titleAccent: "No big-bang weekend.",
  steps: [
    { title: "Audit", body: "We map your data model, integration list, PSP contracts and open liabilities. You get a written migration plan with a fixed scope, a cutover date, and a list of anything we've found that will need a decision from you." },
    { title: "Build and port", body: "Your environment is configured, integrations connected, and a full copy of your data is loaded into a staging instance. Your team gets access early to work in the back office against real data before anything goes live." },
    { title: "Parallel run", body: "Both platforms run against the same data set. We reconcile balances, bonus states and transaction records line by line until the numbers match. Discrepancies get resolved here, not in production." },
    { title: "Cutover", body: "A short, scheduled window with a delta sync of anything that changed since the last checkpoint. Rollback stays available throughout. If the reconciliation doesn't pass, we don't go." },
  ],
};

export const contracts: CardGridContent = {
  eyebrow: "Your Commercial Relationships",
  title: "You keep your provider mix and your rates.",
  intro: "Migration shouldn't mean renegotiating every contract you've spent years building.",
  groups: [
    {
      items: [
        { title: "100+ game providers pre-configured", body: "" },
        { title: "8 aggregator and direct provider integrations live", body: "" },
        { title: "34+ payment methods including 5+ crypto rails", body: "" },
        { title: "10+ marketing and affiliate platforms already connected, including Customer.io, Fast Track, Affilka and Partner Matrix", body: "" },
        { title: "3 risk and identity integrations: SumSub, Usercheck, Fingerprint", body: "" },
      ],
    },
  ],
};

export const operations: ProseBandContent = {
  eyebrow: "Your Team",
  title: "No six-week retraining.",
  paragraphs: [
    "The back office is built for people already fluent in white-label admin. Your ops team will recognise where things are on day one, because the workflows follow the conventions they already use rather than reinventing them for the sake of a redesign.",
    "Support, risk and marketing keep working the way they work now. The difference is what happens when they ask for something new: on legacy, that's a ticket into a queue behind every other operator on the platform. Here it's a roadmap conversation with the team that writes the code.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "How long does a migration take?", answer: "It depends on the size of your player base, how clean your data is, and whether we need to build integrations you're currently using that we don't yet support. The audit phase gives you a fixed date before you commit to anything." },
    { question: "Will players notice?", answer: "They'll see a new interface if you want one. What they won't see is a forced re-registration, a lost balance, or a reset bonus. Sign-in works with the credentials they already have." },
    { question: "What happens to open bets?", answer: "Either settled on the legacy platform during an agreed window or migrated with original terms intact. We'll recommend one based on your volumes and your sportsbook's settlement behaviour." },
    { question: "Can we keep our current payment providers?", answer: "Yes. We integrate around your existing PSP contracts rather than replacing them. The one caveat is stored card tokens, which are held by the PSP and aren't always portable. We flag this in the audit." },
    { question: "Do we need our own licence?", answer: "Not to start. Anjouan licence coverage is available under Keen Sage International Limited if you don’t yet hold your own. If you do hold one, we operate under yours." },
    { question: "What if the migration fails?", answer: "The parallel run exists so that failure surfaces in staging rather than production. Reconciliation has to pass before cutover is authorised, and rollback stays available through the cutover window." },
  ],
};


export const closing = {
  title: "Still running on a platform you'd rather not be on?",
  body: "Send us your integration list and player volumes. You'll get a written assessment of what ports, what doesn't, and what it would take.",
  cta: { label: "Book a Migration Review", href: "/contact-us" },
};

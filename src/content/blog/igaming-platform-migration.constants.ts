import type { BlogPost } from "@/components/blog/blog.types";

export const post: BlogPost = {
  slug: "igaming-platform-migration",
  title: "iGaming Platform Migration",
  heading: "iGaming Platform Migration: How to Switch Providers Without Losing Players",
  standfirst: "Most operators who want to leave their platform never do, because moving feels like betting the business on a weekend. It does not have to be. Here is what a safe migration actually involves.",
  seoTitle: "iGaming Platform Migration: Switch Without Losing Players",
  description: "How to move to a new iGaming platform without losing players, balances or affiliates: what must transfer, what is hard to move, and how to run the cutover safely.",
  image: "/images/news/igaming-platform-migration.webp",
  author: "Ellen Tilly",
  publishedAt: "2026-08-27",
  readingMinutes: 5,
  lead: [
    "Ask operators why they are still on a platform they would rather leave and the answers are remarkably consistent. Not because the platform is good. Because moving feels too dangerous.",
    "The fears are specific and reasonable. Players who are forced to re-register do not all come back. Balances or bonuses that do not survive the move turn into complaints and chargebacks. Affiliate tracking that breaks turns into commission disputes with every partner. Regulators expect transaction history to still exist afterwards.",
    "So operators wait another year, and pay for that year in slow releases, integration fees and features competitors already have. This guide sets out how migration works when it is done properly, so you can judge the real risk rather than the imagined one.",
  ],
  sections: [
    {
      heading: "Step one: check your current contract",
      paragraphs: ["Before talking to any new provider, read your existing agreement. Three clauses decide how hard your migration will be.", "If these terms are weak, the migration plan has to work around them. Knowing that before you start is far better than discovering it halfway through."],
      items: [
        { title: "Notice period", body: "How much warning you must give, and whether leaving early triggers penalties." },
        { title: "Data ownership and export", body: "Whether the player data is yours and what your provider is obliged to hand over, in what format." },
        { title: "Transition support", body: "Whether your provider must cooperate with the move, and for how long." },
      ],
    },
    {
      heading: "What must move with you",
      paragraphs: ["A successful migration is one your players barely notice. That means these need to arrive intact."],
      items: [
        { title: "Player accounts", body: "so players sign in with their existing details rather than registering again." },
        { title: "Wallet balances", body: "reconciled exactly, since a discrepancy of any size becomes a support ticket and a trust problem." },
        { title: "Bonus state", body: "including active bonuses and wagering progress, so nobody loses progress they had already earned." },
        { title: "Segments and VIP tiers", body: "so your campaigns keep reaching the same audiences and your best players keep their status." },
        { title: "Verification status", body: "so verified players are not asked to verify again." },
        { title: "Responsible gambling controls", body: "including deposit limits, cool-offs and self-exclusions. Losing an exclusion record is a serious compliance failure, not an inconvenience." },
        { title: "Affiliate attribution", body: "so each player stays linked to the partner who referred them and commissions continue correctly." },
        { title: "Transaction history", body: "kept available for regulatory reporting and for resolving disputes." },
      ],
    },
    {
      heading: "What is genuinely hard to move",
      paragraphs: ["Any provider who says everything transfers seamlessly has either not done many migrations or is not being straight with you. Three things commonly need special handling.", "Stored payment details. Saved card tokens are held by your payment processor rather than your platform, and are often not portable. If you keep the same processor, token migration may be possible. If you change processors, players will usually need to re-enter card details on their first deposit after the move. Plan the communication for it.", "Open sportsbook bets. Bets placed before the cutover have to settle somewhere. The cleanest approach is usually to let them settle on the old platform during a defined window. The alternative is to migrate them with their original terms intact, which is more complex but sometimes necessary at high volumes.", "Passwords. Whether existing passwords can move depends on how your current platform stores them. Where the method is standard they can transfer. Where it is not, a clearly communicated password reset is better than a silent failure."],
      items: [
      ],
    },
    {
      heading: "How a safe migration runs",
      paragraphs: ["The single most important principle is to avoid a big-bang switch. A well-run migration happens in phases, with a way back at every stage.", "Phase 1: Audit", "Map your data, integrations, payment contracts and open liabilities. The output is a written plan with a fixed scope, a target date and a list of every decision you need to make.", "Phase 2: Build and load", "Configure the new platform, connect your integrations and load a full copy of your data into a test environment. Your team should start working with the new back office here, against real data, well before launch.", "Phase 3: Parallel run", "Run both platforms against the same data and reconcile balances, bonus states and transactions line by line until the numbers match. This is where problems should surface, while they are still harmless.", "Phase 4: Cutover", "A short, scheduled window in which anything that changed since the last checkpoint is synchronised and players move across. Rollback stays available throughout. If reconciliation does not pass, you do not go."],
      items: [
      ],
    },
    {
      heading: "Communicating with players and partners",
      paragraphs: ["Technical success can still become a commercial failure if nobody is told what is happening."],
      items: [
        { title: "Players", body: "need to know what will change, what will not, and exactly what, if anything, they need to do. Tell them before, during and after." },
        { title: "Affiliates", body: "need reassurance that tracking and commissions continue, ideally with written confirmation of how attribution is preserved." },
        { title: "Your support team", body: "needs to know the new platform and the likely questions before the first player asks one." },
      ],
    },
    {
      heading: "The first thirty days after cutover",
      paragraphs: ["Migration does not end at cutover. Watch these closely for the first month."],
      items: [
        { title: "Deposit success rates", body: "by payment method, since payment issues appear here first." },
        { title: "Login and account issues", body: "as an early sign of anything that did not transfer correctly." },
        { title: "Support contact volume and reasons", body: "which will show you problems faster than any dashboard." },
        { title: "Affiliate reporting", body: "checked against the old platform’s figures for the same partners." },
      ],
    },
  ],
  faq: [
    { question: "How long does an iGaming platform migration take?", answer: "It depends on the size of your player base, the state of your data and your integrations. The audit phase should give you a fixed date before you commit." },
    { question: "Will players have to register again?", answer: "Not if the migration is done properly. Accounts, balances and bonus progress should transfer, and players should sign in with their existing details." },
    { question: "Can I keep my payment providers when I switch?", answer: "Usually, yes. Keeping the same processor also makes it easier to preserve saved payment details." },
    { question: "What is the biggest risk in a migration?", answer: "Balances or bonus state that do not reconcile. That is why a parallel run with line-by-line reconciliation before cutover matters so much." },
    { question: "OnDeck Global migrates operators off legacy platforms with player accounts, balances, bonus state and affiliate attribution carried across, and a parallel run before cutover. Send us your integration list and player volumes and we will tell you in writing what transfers, what does not, and what it would take.", answer: "- Button- Book a Migration Review" },
  ],
  cta: { body: "OnDeck Global migrates operators off legacy platforms with player accounts, balances, bonus state and affiliate attribution carried across, and a parallel run before cutover. Send us your integration list and player volumes and we will tell you in writing what transfers, what does not, and what it would take.", label: "Book a Migration Review" },
  related: ["/solutions/platform-migration", "/platform/fraud-risk-kyc", "/services/user-acquisition"],
};

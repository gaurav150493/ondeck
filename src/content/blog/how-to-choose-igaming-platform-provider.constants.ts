import type { BlogPost } from "@/components/blog/blog.types";

export const post: BlogPost = {
  slug: "how-to-choose-igaming-platform-provider",
  title: "How to Choose an iGaming Platform Provider",
  heading: "How to Choose an iGaming Platform Provider: 12 Questions to Ask Before You Sign",
  standfirst: "Every provider demos well. The differences show up in the contract, the data model and the first real incident. These are the questions that expose them.",
  seoTitle: "How to Choose an iGaming Platform Provider: 12 Questions",
  description: "Twelve questions to ask any iGaming platform provider before you sign, covering costs, data ownership, exit terms, compliance and what happens when something breaks.",
  image: "/images/news/how-to-choose-igaming-platform-provider.webp",
  author: "Ellen Tilly",
  publishedAt: "2026-09-04",
  readingMinutes: 6,
  lead: [
    "Choosing a platform is one of the few decisions in iGaming that is genuinely hard to reverse. Your player data, your wallet, your bonus history and your integrations all end up living inside it. A poor choice rarely fails dramatically. It fails slowly, through costs that grow faster than revenue, changes that take months, and an exit that turns out to be far harder than anyone said.",
    "Demos will not tell you any of this. Every platform looks good when someone who built it is driving. These twelve questions are designed to get past the demo. They are grouped into commercial, technical, operational and compliance questions, and for each one there is an example of a good answer and an answer that should worry you.",
  ],
  sections: [
    {
      heading: "Commercial questions",
      paragraphs: ["## 1. What will this cost me in total, not just in platform fees?", "The platform fee is rarely the whole bill. Game content, payment processing margins, minimum monthly charges, fees for new integrations and support tiers can together exceed the headline rate.", "A good answer: A full cost breakdown at your projected volumes, including every pass-through, in writing.", "A red flag: A single revenue share figure with everything else described as “standard” or “depending on usage”.", "## 2. Who owns the player data, and can I export all of it?", "Your player database is the most valuable asset you build. If you cannot take it with you, you do not really own your business.", "A good answer: An unambiguous contractual statement that the data is yours, with a full export available in a standard format.", "A red flag: Ownership language that is vague, or an export limited to basic contact details without balances, transaction history or bonus state.", "## 3. What happens if I want to leave?", "The terms of your exit are set on the day you sign, when you have the most leverage. By the time you want to leave, you have none.", "A good answer: A defined notice period, a documented data handover process and a willingness to support migration.", "A red flag: Long lock-in periods, early termination penalties, or a provider who seems surprised by the question."],
      items: [
      ],
    },
    {
      heading: "Technical questions",
      paragraphs: ["## 4. Is this one system, or several joined together?", "Many platforms combine separately built casino, sportsbook, bonus and payment systems under one brand. The seams show up as balances that disagree, bonuses paying against outdated wallet states, and reports that never quite reconcile.", "A good answer: A single player record and a single wallet shared by every vertical, which you can see demonstrated in one player view.", "A red flag: Separate balances for casino and sportsbook, or a back office that sends you to different screens for different products.", "## 5. How long does it take to change a market’s rules?", "Regulation changes constantly. Deposit limits, payment methods, game availability and required messaging all differ by market and all change without much notice.", "A good answer: Changes made in the back office by your own team, in hours or days.", "A red flag: Changes that require a development ticket and a release, and a queue shared with every other client.", "## 6. What can my own developers access?", "Even if you do not have engineers today, you may later. The ability to build on the platform, or connect your own tools, determines how far you can grow on it.", "A good answer: Documented APIs across the wallet, player, bonus and payment layers, with a sandbox environment.", "A red flag: No API access, or access available only at an enterprise tier you are unlikely to reach.", "## 7. What was your last serious incident, and how did you handle it?", "Uptime percentages tell you very little. How a provider behaves when something goes wrong tells you almost everything.", "A good answer: A specific, honest account of a real incident, what caused it and what changed afterwards.", "A red flag: A claim that nothing significant has ever gone wrong. It has, and they are either unaware or unwilling to say."],
      items: [
      ],
    },
    {
      heading: "Content and payments questions",
      paragraphs: ["## 8. Can I keep my existing game and payment contracts?", "If you already have provider deals or payment relationships, losing them to switch platforms is a real cost. If you do not, you need to know whose contracts you will be using and on what terms.", "A good answer: Integration around your existing contracts where you have them, and clarity about the provider’s own terms where you do not.", "A red flag: A requirement to use the provider’s contracts regardless, with no visibility of the rates.", "## 9. What happens when a deposit fails?", "A failed deposit often means a lost player, and it never appears in your acquisition reporting. It just looks like someone who never converted.", "A good answer: Routing across processors and automatic retries through alternative routes, with approval rates you can see.", "A red flag: Each payment method connected to a single processor, and failures simply returned to the player."],
      items: [
      ],
    },
    {
      heading: "Compliance questions",
      paragraphs: ["## 10. Which licences and markets do you support today?", "Support for a market in principle is different from live operators in that market today. The second is what you need.", "A good answer: A specific list of jurisdictions with live operators, and a clear account of what it takes to add a new one.", "A red flag: A claim to support “most regulated markets” without naming any.", "## 11. How do fraud, KYC and responsible gambling tools actually work?", "These are obligations in every licensed market, and in several they are the area regulators examine most closely. Tools that exist on paper but are hard to use tend not to be used.", "A good answer: Named vendors for identity and device checks, controls enforced across every vertical, and a review workflow you can see in the demo.", "A red flag: Generic descriptions of “advanced fraud protection”, or responsible gambling tools that exist only as a settings page."],
      items: [
      ],
    },
    {
      heading: "The relationship question",
      paragraphs: ["## 12. Who do I speak to when something is wrong, and can I talk to an existing client?", "At 2am on a busy weekend, the quality of your provider is the quality of whoever answers. And the most reliable evidence of how a provider behaves comes from someone already working with them.", "A good answer: A named escalation path, a clear support commitment, and an introduction to a current operator.", "A red flag: A general support inbox and no references available."],
      items: [
      ],
    },
    {
      heading: "How to use these questions",
      paragraphs: ["Ask them in writing and ask every provider on your shortlist the same set, so the answers can be compared directly. Pay as much attention to how a provider answers as to what it says. Precise, specific answers, including honest admissions of what a platform does not do, are a far better sign than confident generalities.", "And weight the questions by how hard the problem would be to fix later. A missing feature can be built. A contract that locks away your player data cannot easily be rewritten."],
      items: [
      ],
    },
  ],
  faq: [
    { question: "What is the most important factor when choosing an iGaming platform?", answer: "Whether you own and can export your player data, closely followed by the total cost at your projected volumes. Both are set in the contract and are very hard to change afterwards." },
    { question: "Should I choose white-label or turnkey?", answer: "White-label if you do not hold a licence and want to launch quickly. Turnkey if you have a licence and want to own your contracts. The white-label vs turnkey guide covers the trade-off in detail." },
    { question: "How long does it take to switch platforms?", answer: "It depends on data volume, integrations and contract terms. A well-planned migration runs in phases with a parallel run before cutover, rather than a single switch." },
    { question: "We would rather be asked these questions than not. Send the list to OnDeck Global and we will answer all twelve in writing, including where our answer is that we do not do something.", answer: "- Button- Get in Touch" },
  ],
  cta: { body: "We would rather be asked these questions than not. Send the list to OnDeck Global and we will answer all twelve in writing, including where our answer is that we do not do something.", label: "Get in Touch" },
  related: ["/solutions/platform-migration", "/platform/pam", "/platform/cms", "/platform/payments", "/platform/fraud-risk-kyc"],
};

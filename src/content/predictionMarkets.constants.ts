import type { CardGridContent, CompareTableContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";

export const meta = {
  title: "Prediction Markets Platform | Event Contracts for Operators",
  description: "An exchange-style vertical where players trade event contracts against each other and you earn a fee on volume instead of carrying risk on the outcome. On our roadmap now.",
};

export const hero: PageHeroContent = {
  eyebrow: "Prediction Markets  ·  On Roadmap",
  title: "Event contracts,",
  titleAccent: "as a first-class vertical.",
  subhead: "Players trade positions against each other. Prices move with the market. You earn a fee on volume and carry no liability on the outcome. It is a fundamentally different business from a sportsbook, and we are building it properly rather than bolting it on.",
  ctas: [
    { label: "Register Interest", href: "/contact-us", variant: "filled" },
    { label: "How It Differs from Sportsbook", href: "#differs", variant: "hollow" },
  ],
};

export const why: ProseBandContent = {
  eyebrow: "The Category",
  title: "This stopped being a curiosity.",
  paragraphs: [
    "Event contracts moved from the edge of the industry to the centre of it in under two years. The largest operators in the United States have launched prediction products, dedicated exchanges are running serious daily volume, and the format has pulled in a trader profile that traditional sportsbooks were never built to serve.",
    "What it has not done yet is reach operators outside the top tier, because building an order book, a settlement engine and a liquidity strategy is a different discipline from running a sportsbook. That gap is the reason this is on our roadmap.",
  ],
};

export const differs: CompareTableContent = {
  eyebrow: "Sportsbook Vs Prediction Market",
  title: "Different product.",
  titleAccent: "Different business.",
  columns: ["Sportsbook", "Prediction market"],
  rows: [
    { label: "Counterparty", values: ["You, on every bet", "Another player"] },
    { label: "Pricing", values: ["Set by your trading desk", "Set by supply and demand"] },
    { label: "Your revenue", values: ["Margin built into the odds", "Fee on trading volume"] },
    { label: "Your risk", values: ["Liability on every open position", "None on the outcome"] },
    { label: "Exiting early", values: ["Cash-out, priced by you", "Sell the position to the market"] },
    { label: "Winning players", values: ["A problem to be limited", "Liquidity you want more of"] },
    { label: "Operating burden", values: ["Trading and risk management", "Liquidity and market making"] },
  ],
  intro: "The interfaces look similar enough that operators assume prediction markets are a sportsbook with different wording. They are not. Almost every operating assumption changes.",
};

export const operatorView: CardGridContent = {
  eyebrow: "The Operator View",
  title: "What you gain,",
  titleAccent: "and what you take on.",
  groups: [
    {
      label: "What you gain",
      items: [
        { title: "Predictable revenue", body: "Fee income scales with volume rather than swinging with results. No weekend where the favourites all win and the month is gone." },
        { title: "No trading desk", body: "No odds compilation, no liability limits, no in-play risk management." },
        { title: "No reason to limit winners", body: "Sharp players supply liquidity instead of eroding margin, which removes the most player-hostile part of running a sportsbook." },
        { title: "A different audience", body: "The format attracts an analytical, finance-adjacent player who does not respond to conventional sportsbook marketing." },
      ],
    },
    {
      label: "What you take on",
      items: [
        { title: "Liquidity is the whole problem", body: "A market with nobody on the other side is worse than no market. Thin order books and wide spreads drive players straight back to a sportsbook." },
        { title: "Market making is not optional", body: "Early liquidity has to come from somewhere, whether that is your own capital, a market-making partner, or both. This is a cost and a risk, and anyone who tells you otherwise has not run one." },
        { title: "Settlement has to be beyond dispute", body: "Every market needs a named resolution source agreed before it opens. Ambiguous settlement is how these products lose trust permanently." },
        { title: "Regulatory positioning is unsettled", body: "This is a live legal question in several jurisdictions and not one to take casually." },
      ],
    },
  ],
};

export const regulatory: ProseBandContent = {
  eyebrow: "The Honest Part",
  title: "Where this sits legally depends entirely on where you are.",
  paragraphs: [
    "In the United States, event contracts are the subject of an active dispute between federal derivatives regulation and state gaming regulators, and the outcome will shape the category for years. Outside the US the picture varies widely, and in several markets event contracts can be offered under an existing gaming licence.",
    "What we will not do is tell you your position is fine. We will tell you how the product works, what it needs technically, and what other operators in your markets are doing. Your counsel decides the rest.",
  ],
};

export const status: ProseBandContent = {
  eyebrow: "Where We Are",
  title: "On the roadmap,",
  titleAccent: "and we will not pretend otherwise.",
  paragraphs: [
    "Prediction markets are in development as a first-class vertical on the platform, sharing the wallet, player record, KYC and reporting that everything else uses. It is not live today.",
    "We are talking to operators who want to be early, and that conversation is genuinely two-way: what markets you would list, what your players would trade, and where your regulatory position allows it. That input shapes what gets built first.",
  ],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "Is this available now?", answer: "No. It is in development. We are working with operators who want to shape it and be early rather than selling something that does not exist yet." },
    { question: "Do we need a separate licence?", answer: "That depends on your jurisdiction and it is a question for your counsel. In some markets event contracts fall under an existing gaming licence and in others they do not. We will tell you what we know about your market and what other operators there are doing." },
    { question: "How do we make money if we are not the counterparty?", answer: "A fee on trading volume. It is a lower take per unit of handle than a sportsbook margin, but it is steadier, and it does not carry liability." },
    { question: "Where does the liquidity come from?", answer: "Your players, market makers, or both. This is the central operating question of a prediction market and we would rather discuss it honestly at the start than have you discover it after launch." },
    { question: "Can we run it alongside our sportsbook?", answer: "Yes, and most operators should. The same player will use both for different things, and on one wallet and one player record you can see that behaviour properly rather than guessing at it." },
    { question: "What sports and events can be listed?", answer: "Sports, financial benchmarks, economic indicators and other verifiable public events. The binding constraint is not the technology, it is whether a market has a settlement source that is beyond dispute and whether your licence permits it." },
  ],
};

export const differsOutro = "The row that matters most is the last one. A sportsbook lives or dies on how well you manage risk. A prediction market lives or dies on whether there is anyone on the other side of the trade.";

export const closing = {
  title: "Want to be early rather than late?",
  body: "Tell us your markets and what you would want to list. If prediction markets are not right for you, we will say so, because a vertical with no liquidity helps neither of us.",
  cta: { label: "Register Interest", href: "/contact-us" },
};

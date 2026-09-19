import type { CardGridContent, FaqContent, PageHeroContent, ProseBandContent } from "@/components/page-sections/pageSections.types";

export const meta = {
  alternates: { canonical: "/products/games-aggregation" },
  title: "Casino Games Aggregation | 100+ Providers, One Integration",
  description: "Slots, live casino, crash and table games from 100+ providers through a single integration. One wallet, one back office, one reporting schema. Add a studio in an afternoon.",
};

export const hero: PageHeroContent = {
  eyebrow: "Games Aggregation",
  title: "Every provider.",
  titleAccent: "One integration.",
  subhead: "Slots, live casino, crash and table games from 100+ providers, all behind a single API, a single wallet and one back office. Adding a studio becomes a configuration change instead of a project.",
  ctas: [
    { label: "See the Provider List", href: "#catalogue", variant: "filled" },
    { label: "Talk to Us", href: "/contact-us", variant: "hollow" },
  ],
};

export const why: ProseBandContent = {
  eyebrow: "The Problem",
  title: "The tenth direct integration costs as much as the first.",
  paragraphs: [
    "Every direct provider integration is its own contract, its own certification, its own wallet callback behaviour and its own quirks in how rounds are reported. The first one teaches your team a great deal. The tenth teaches them nothing and still takes weeks.",
    "Meanwhile the content that drives your revenue keeps moving. A studio releases a hit, your players want it this month, and your development roadmap says next quarter. By the time it is live the moment has passed.",
    "Aggregation inverts that. You integrate once. After that, turning on a provider is a switch in the back office, and the reporting, bonusing and wallet behaviour are identical no matter whose game it is.",
  ],
};

export const catalogue: CardGridContent = {
  eyebrow: "What You Can Run",
  title: "100+ providers, pre-configured.",
  groups: [
    {
      items: [
        { title: "Slots", body: "The depth of the catalogue, from the studios that drive volume to the niche titles that hold specific segments." },
        { title: "Live casino", body: "Live dealer tables, roulette, blackjack, baccarat and game shows, streamed and integrated into the same wallet as everything else." },
        { title: "Crash and instant games", body: "The formats that dominate in emerging markets and convert differently from slots." },
        { title: "Table games and video poker", body: "RNG classics for players who want them and for markets where live is not viable." },
        { title: "Jackpots", body: "Network and local jackpots where the provider supports them." },
      ],
    },
  ],
};

export const howItWorks: CardGridContent = {
  eyebrow: "The Technical Layer",
  title: "One integration,",
  titleAccent: "one set of behaviours.",
  groups: [
    {
      items: [
        { title: "Single API", body: "One integration covering game launch, session handling, round lifecycle and settlement across every provider in the catalogue." },
        { title: "One wallet", body: "Seamless wallet integration so player balance stays in one place. No transfers, no reconciliation between game and cashier." },
        { title: "Unified reporting schema", body: "GGR, rounds, RTP, per-game and per-player performance in one format regardless of whose game produced it. Provider comparison becomes possible." },
        { title: "Free rounds and bonuses", body: "Free spins and bonus mechanics supported across providers that expose them, driven from the same promo engine as everything else." },
        { title: "Jurisdiction filtering", body: "Games that cannot be offered in a market are not offered in that market. Handled at the platform level, not in your operations team’s head." },
        { title: "RTP variants", body: "Where a provider exposes RTP configuration, you control it per market." },
        { title: "Certification", body: "Handled per market as part of the integration rather than left to you." },
      ],
    },
  ],
};

export const merchandising: CardGridContent = {
  eyebrow: "Running The Lobby",
  title: "A catalogue is only worth what your lobby does with it.",
  intro: "A hundred providers is a liability if a player has to scroll through all of them. The aggregation layer connects directly to the CMS and the promo engine, so the lobby is something your marketing team shapes rather than something your developers deploy.",
  groups: [
    {
      items: [
        { title: "Lobby control from the CMS", body: "Categories, ordering, featured positions and campaign tie-ins, changed without a release." },
        { title: "Segment-specific lobbies", body: "Different players see different front pages, driven by the same segments your CRM already uses." },
        { title: "Cross-provider tournaments", body: "Tournaments and leaderboards that span studios rather than being trapped inside one provider’s ecosystem." },
        { title: "Performance data that informs the mix", body: "One reporting schema means you can see which studios actually earn their lobby position and which ones do not." },
      ],
    },
  ],
};

export const distribution: ProseBandContent = {
  eyebrow: "For Platforms And Operators",
  title: "Taking the catalogue via API.",
  paragraphs: [],
};

export const faq: FaqContent = {
  eyebrow: "Get in Touch",
  title: "Quick Answers",
  intro: "Find answers to common questions or get in touch with our team.",
  items: [
    { question: "How long does it take to add a new provider?", answer: "If the provider is already in the catalogue, it is a configuration change and can be live the same day. If it is not, we integrate it and give you a date during scoping." },
    { question: "Can we keep our existing provider contracts?", answer: "Yes, on turnkey and custom. Your direct deals stay yours at your rates and we integrate them. On white-label, content runs on our contracts." },
    { question: "Is live casino included?", answer: "Yes. Live dealer tables and game shows sit in the same catalogue, the same wallet and the same reporting as everything else." },
    { question: "Can we run bonuses across different providers?", answer: "Yes, from one promo engine, for every provider that supports the mechanic. Free rounds depend on provider support and we will tell you which ones offer it." },
  ],
};


export const closing = {
  title: "Want the full studio list?",
  body: "Tell us your markets and we will send the catalogue that applies to them, along with what it would take to add anything missing.",
  cta: { label: "See the Provider List", href: "#catalogue" },
};

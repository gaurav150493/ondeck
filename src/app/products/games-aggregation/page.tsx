import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { GameProviders } from "@/components/game-providers/GameProviders";
import { catalogue, distribution, faq, hero, howItWorks, merchandising, meta, why } from "@/content/gamesAggregation.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function GamesAggregationPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...why} />
      <CardGrid {...catalogue} id="catalogue" />
      <CardGrid {...howItWorks} />
      <CardGrid {...merchandising} />
      <GameProviders
        id="distribution"
        eyebrow={distribution.eyebrow}
        title={distribution.title}
        highlight={distribution.titleAccent}
      />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

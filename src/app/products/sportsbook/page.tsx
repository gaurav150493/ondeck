import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { coverage, faq, hero, integrated, meta, positioning } from "@/content/sportsbook.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function SportsbookPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...positioning} />
      <CardGrid {...coverage} id="coverage" />
      <CardGrid {...integrated} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

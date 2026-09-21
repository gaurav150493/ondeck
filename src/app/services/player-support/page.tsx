import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { coverage, different, faq, hero, meta, quality, scope } from "@/content/playerSupport.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function PlayerSupportPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...different} />
      <CardGrid {...scope} />
      <ProseSection {...coverage} />
      <CardGrid {...quality} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

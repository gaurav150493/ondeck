import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { anyModel, beyondUs, compliance, faq, hero, meta, model, theMap } from "@/content/sweepstakes.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function SweepstakesPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...model} />
      <CardGrid {...theMap} />
      <ProseSection {...beyondUs} />
      <ProseSection {...compliance} />
      <ProseSection {...anyModel} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

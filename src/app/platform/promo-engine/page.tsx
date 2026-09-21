import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { costAbuse, faq, hero, mechanics, meta, targeting } from "@/content/promoEngine.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function PromoEnginePage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <CardGrid {...mechanics} />
      <CardGrid {...targeting} />
      <CardGrid {...costAbuse} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

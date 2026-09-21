import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { backOffice, faq, hero, meta, playerRecord, reporting, whyItMatters } from "@/content/pam.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function PamPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...whyItMatters} />
      <CardGrid {...playerRecord} />
      <CardGrid {...backOffice} />
      <CardGrid {...reporting} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

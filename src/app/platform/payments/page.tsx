import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { contracts, coverage, faq, hero, meta, orchestration, payouts, whyItMatters } from "@/content/payments.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function PaymentsPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...whyItMatters} />
      <CardGrid {...coverage} id="coverage" />
      <CardGrid {...orchestration} />
      <CardGrid {...payouts} />
      <ProseSection {...contracts} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

import type { Metadata } from "next";
import { CompareTable } from "@/components/page-sections/CompareTable";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { SplitSection } from "@/components/page-sections/SplitSection";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { differs, faq, hero, meta, operatorView, regulatory, status, why } from "@/content/predictionMarkets.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function PredictionMarketsPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...why} />
      <CompareTable {...differs} id="differs" />
      <SplitSection {...operatorView} />
      <ProseBand {...regulatory} />
      <ProseBand {...status} />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { affiliates, constraint, faq, hero, measurement, meta, organic, paidMedia } from "@/content/userAcquisition.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function UserAcquisitionPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...constraint} />
      <CardGrid {...affiliates} />
      <ProseSection {...paidMedia} />
      <CardGrid {...organic} />
      <CardGrid {...measurement} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

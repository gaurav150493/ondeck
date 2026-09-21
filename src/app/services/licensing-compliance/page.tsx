import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { boundary, faq, getYourOwn, hero, launchUnderOurs, meta, ongoing, problem } from "@/content/licensingCompliance.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function LicensingCompliancePage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...problem} />
      <CardGrid {...launchUnderOurs} />
      <CardGrid {...getYourOwn} />
      <ProseSection {...ongoing} />
      <ProseSection {...boundary} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

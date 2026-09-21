import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { controls, faq, hero, localisation, meta, problem, seo } from "@/content/cms.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function CmsPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...problem} />
      <CardGrid {...controls} />
      <CardGrid {...localisation} />
      <CardGrid {...seo} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { CompareTable } from "@/components/page-sections/CompareTable";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { StepList } from "@/components/page-sections/StepList";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { bespoke, faq, hero, meta, process, proven, whoFor } from "@/content/customBuild.constants";
import { solutionsCompare } from "@/content/solutionsCompare.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function CustomBuildPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <CardGrid {...whoFor} />
      <CardGrid {...bespoke} />
      <ProseBand {...proven} />
      <StepList {...process} />
      <CompareTable {...solutionsCompare} id="compare" />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

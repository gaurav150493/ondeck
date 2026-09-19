import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { CompareTable } from "@/components/page-sections/CompareTable";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { StepList } from "@/components/page-sections/StepList";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { economics, faq, hero, included, launchPath, meta, whoFor } from "@/content/turnkey.constants";
import { solutionsCompare } from "@/content/solutionsCompare.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function TurnkeyPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...whoFor} />
      <CardGrid {...included} />
      <StepList {...launchPath} />
      <ProseBand {...economics} />
      <CompareTable {...solutionsCompare} id="compare" />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { SplitSection } from "@/components/page-sections/SplitSection";
import { StepList } from "@/components/page-sections/StepList";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { contracts, faq, hero, inventory, meta, operations, path, problem } from "@/content/platformMigration.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function PlatformMigrationPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...problem} />
      <CardGrid {...inventory} id="inventory" />
      <StepList {...path} />
      <SplitSection {...contracts} />
      <ProseBand {...operations} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

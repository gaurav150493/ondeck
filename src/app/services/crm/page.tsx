import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { StepList } from "@/components/page-sections/StepList";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { channels, faq, hero, howWeWork, lifecycle, measurement, meta, problem, staysYours } from "@/content/crm.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function CrmPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...problem} />
      <CardGrid {...lifecycle} />
      <ProseSection {...channels} />
      <StepList {...howWeWork} />
      <CardGrid {...staysYours} />
      <ProseSection {...measurement} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

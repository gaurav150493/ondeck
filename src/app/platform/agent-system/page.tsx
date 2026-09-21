import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { anyModel, commission, creditSettlement, exposure, faq, hero, hierarchy, meta, whoRunsOne } from "@/content/agentSystem.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function AgentSystemPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...whoRunsOne} />
      <CardGrid {...hierarchy} />
      <CardGrid {...commission} />
      <CardGrid {...creditSettlement} />
      <ProseSection {...exposure} />
      <ProseSection {...anyModel} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

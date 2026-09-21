import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { faq, hero, layers, meta, multiAccounting, responsibleGambling, reviewWorkflows } from "@/content/fraudRiskKyc.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function FraudRiskKycPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <CardGrid {...layers} />
      <CardGrid {...multiAccounting} />
      <CardGrid {...responsibleGambling} />
      <ProseSection {...reviewWorkflows} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

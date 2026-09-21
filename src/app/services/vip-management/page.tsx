import type { Metadata } from "next";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { PageHero } from "@/components/page-sections/PageHero";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { concentration, faq, hero, identification, measurement, meta, relationship, responsibility } from "@/content/vipManagement.constants";
import containerStyles from "@/styles/container.module.scss";

export const metadata: Metadata = meta;

export default function VipManagementPage() {
  return (
    <main className={containerStyles.page}>
      <PageHero {...hero} />
      <ProseBand {...concentration} />
      <CardGrid {...identification} />
      <CardGrid {...relationship} />
      <CardGrid {...responsibility} />
      <CardGrid {...measurement} />
      <FactsFigures />
      <FaqAccordion {...faq} />
      <CtaBanner />
    </main>
  );
}

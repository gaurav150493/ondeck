import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { content, meta } from "@/content/terms.constants";

export const metadata: Metadata = meta;

export default function TermsConditionsPage() {
  return <LegalPage {...content} />;
}

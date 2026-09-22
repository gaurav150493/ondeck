import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { content, meta } from "@/content/privacy.constants";

export const metadata: Metadata = meta;

export default function PrivacyPolicyPage() {
  return <LegalPage {...content} />;
}

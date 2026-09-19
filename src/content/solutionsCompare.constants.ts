import type { CompareTableContent } from "@/components/page-sections/pageSections.types";

export const solutionsCompare: CompareTableContent = {
  eyebrow: "Which Solution Fits",
  title: "White-label,",
  titleAccent: "turnkey or custom.",
  columns: ["White-Label", "Turnkey", "Custom Build"],
  rows: [
    { label: "Gaming licence", values: ["Ours (Anjouan, Keen Sage)", "Yours", "Yours"] },
    { label: "Provider contracts", values: ["Ours", "Yours", "Yours"] },
    { label: "PSPs & merchant accounts", values: ["Ours", "Yours", "Yours"] },
    { label: "Front-end", values: ["Branded theme", "Branded, deeply configurable", "Designed from scratch"] },
    { label: "Custom features", values: ["No", "Configuration only", "Yes"] },
    { label: "API access", values: ["Limited", "Full", "Full, plus custom endpoints"] },
    { label: "Multi-brand", values: ["One brand", "Multiple brands", "Multiple brands"] },
    { label: "Time to launch", values: ["Days", "Weeks", "Months"] },
    { label: "Up-front cost", values: ["Lowest", "Moderate", "Highest"] },
    { label: "Cost per unit of GGR", values: ["Highest", "Lower", "Lowest at scale"] },
    { label: "Best for", values: ["First launch, testing a market", "Licensed operators scaling up", "Established brands, unusual models"] },
  ],
};

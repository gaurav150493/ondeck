export interface PageCta {
  label: string;
  href: string;
  variant: "filled" | "hollow";
}

export interface PageHeroContent {
  eyebrow: string;
  title: string;
  titleAccent: string;
  subhead: string;
  ctas: PageCta[];
}

export interface SectionHeader {
  id?: string;
  eyebrow?: string;
  title?: string;
  titleAccent?: string;
}

export interface ProseBandContent extends SectionHeader {
  paragraphs: string[];
}

export interface CardItem {
  title: string;
  body: string;
}

export interface CardGridContent extends SectionHeader {
  intro?: string;
  outro?: string;
  groups: { label?: string; items: CardItem[] }[];
}

export interface StepItem {
  title: string;
  body: string;
}

export interface StepListContent extends SectionHeader {
  steps: StepItem[];
}

export interface CompareRow {
  label: string;
  values: string[];
}

export interface CompareTableContent extends SectionHeader {
  columns: string[];
  rows: CompareRow[];
  intro?: string;
  outro?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent extends SectionHeader {
  intro?: string;
  items: FaqItem[];
}

export interface StatItem {
  value: string;
  label: string;
  caption: string;
}

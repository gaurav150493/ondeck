export interface BlogListItem {
  title: string;
  body: string;
}

export type BlogBlock =
  | { type: "p"; value: string }
  | { type: "item"; title: string; body: string }
  | { type: "table"; columns: string[]; rows: { label: string; values: string[] }[] };

export interface BlogSection {
  heading: string;
  level: number;
  blocks: BlogBlock[];
}

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  heading: string;
  standfirst: string;
  seoTitle: string;
  description: string;
  image: string;
  author: string;
  publishedAt: string;
  readingMinutes: number;
  lead: string[];
  sections: BlogSection[];
  faq: BlogFaqItem[];
  cta: { body: string; label: string };
  related: string[];
}

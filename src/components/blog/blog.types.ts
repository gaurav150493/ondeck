export interface BlogListItem {
  title: string;
  body: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  items: BlogListItem[];
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
  publishedAt: string;
  readingMinutes: number;
  lead: string[];
  sections: BlogSection[];
  faq: BlogFaqItem[];
  cta: { body: string; label: string };
  related: string[];
}

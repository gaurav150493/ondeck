export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalContent {
  title: string;
  updated: string;
  sections: LegalSection[];
}

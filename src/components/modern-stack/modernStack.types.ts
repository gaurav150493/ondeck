export type StackTone = "blue" | "violet";

export interface StackCard {
  title: string;
  image: string;
  tone: StackTone;
  points: string[];
}

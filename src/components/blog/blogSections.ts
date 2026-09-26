import type { BlogSection } from "./blog.types";

export function splitHeading(heading: string) {
  const trimmed = heading.trim();

  if (trimmed.includes(":")) {
    const [head, ...rest] = trimmed.split(":");
    const tail = rest.join(":").trim();
    if (tail && tail.length <= 48) return { title: `${head}:`, titleAccent: tail };
  }

  if (trimmed.includes(",")) {
    const head = trimmed.slice(0, trimmed.lastIndexOf(","));
    const tail = trimmed.slice(trimmed.lastIndexOf(",") + 1).trim();
    if (tail.split(" ").length >= 2 && tail.length <= 42) {
      return { title: `${head},`, titleAccent: tail };
    }
  }

  const words = trimmed.split(" ");
  if (words.length >= 4) {
    const tail = words.slice(-2).join(" ");
    if (tail.length <= 28) {
      return { title: words.slice(0, -2).join(" "), titleAccent: tail };
    }
  }

  return { title: trimmed, titleAccent: undefined };
}

export function sectionShape(section: BlogSection) {
  const items = section.blocks.filter((block) => block.type === "item");
  const tables = section.blocks.filter((block) => block.type === "table");
  const paragraphs = section.blocks
    .filter((block) => block.type === "p")
    .map((block) => (block.type === "p" ? block.value : ""));

  return { items, tables, paragraphs };
}

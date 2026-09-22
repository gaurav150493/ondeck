import type { MetadataRoute } from "next";
import { primaryNav } from "@/components/header/header.constants";
import { posts } from "@/content/blog/posts.constants";
import { siteConfig } from "@/config/site.config";

const routes = [
  "/",
  "/contact-us",
  "/privacy-policy",
  "/terms-conditions",
  ...primaryNav.flatMap((group) => group.items.map((item) => item.href)),
  ...posts.map((post) => `/blog/${post.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

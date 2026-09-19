import type { MetadataRoute } from "next";
import { primaryNav } from "@/components/header/header.constants";
import { siteConfig } from "@/config/site.config";

const built = new Set([
  "/solutions/white-label",
  "/solutions/turnkey",
  "/solutions/custom-build",
  "/solutions/platform-migration",
  "/products/games-aggregation",
  "/products/sportsbook",
  "/products/prediction-markets",
]);

const routes = [
  "/",
  "/contact-us",
  ...primaryNav.flatMap((group) => group.items.map((item) => item.href)).filter((href) => built.has(href)),
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

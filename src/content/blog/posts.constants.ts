import { post as costToStartOnlineCasino } from "./cost-to-start-online-casino.constants";
import { post as futureOfIgaming } from "./future-of-igaming.constants";
import { post as howToChooseIgamingPlatformProvider } from "./how-to-choose-igaming-platform-provider.constants";
import { post as igamingPlatformMigration } from "./igaming-platform-migration.constants";
import { post as predictionMarketsVsSportsbooks } from "./prediction-markets-vs-sportsbooks.constants";
import type { BlogPost } from "@/components/blog/blog.types";

export const posts: BlogPost[] = [
  futureOfIgaming,
  costToStartOnlineCasino,
  howToChooseIgamingPlatformProvider,
  igamingPlatformMigration,
  predictionMarketsVsSportsbooks,
];

export function findPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

import { CoreCapabilities } from "@/components/core-capabilities/CoreCapabilities";
import { CtaBanner } from "@/components/cta-banner/CtaBanner";
import { FactsFigures } from "@/components/facts-figures/FactsFigures";
import { GameProviders } from "@/components/game-providers/GameProviders";
import { Hero } from "@/components/hero/Hero";
import { IgamingProducts } from "@/components/igaming-products/IgamingProducts";
import { IndustryNews } from "@/components/industry-news/IndustryNews";
import { ModernStack } from "@/components/modern-stack/ModernStack";
import { Services } from "@/components/services/Services";
import containerStyles from "@/styles/container.module.scss";

export default function HomePage() {
  return (
    <main className={containerStyles.page}>
      <Hero />
      <IgamingProducts />
      <CoreCapabilities />
      <Services />
      <ModernStack />
      <FactsFigures />
      <GameProviders />
      <IndustryNews />
      <CtaBanner />
    </main>
  );
}

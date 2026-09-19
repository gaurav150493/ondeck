export interface GameProvider {
  name: string;
  logo: string;
}

export const gameProviders: GameProvider[] = [
  { name: "Evolution", logo: "/images/providers/evolution.webp" },
  { name: "Pragmatic Play", logo: "/images/providers/pragmatic-play.webp" },
  { name: "Play'n GO", logo: "/images/providers/playn-go.webp" },
  { name: "Hacksaw Gaming", logo: "/images/providers/hacksaw-gaming.webp" },
  { name: "Relax Gaming", logo: "/images/providers/relax-gaming.webp" },
  { name: "NetEnt", logo: "/images/providers/netent.webp" },
  { name: "Red Tiger", logo: "/images/providers/red-tiger.webp" },
  { name: "Push Gaming", logo: "/images/providers/push-gaming.webp" },
  { name: "Yggdrasil", logo: "/images/providers/yggdrasil.webp" },
  { name: "Nolimit City", logo: "/images/providers/nolimit-city.webp" },
  { name: "Booming Games", logo: "/images/providers/booming-games.webp" },
  { name: "Microgaming", logo: "/images/providers/microgaming.webp" },
];

export const moreProviders = "100+ more";

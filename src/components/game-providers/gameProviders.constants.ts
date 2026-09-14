export interface GameProvider {
  name: string;
  logo: string;
}

export const gameProviders: GameProvider[] = [
  { name: "Evolution", logo: "/images/providers/evolution.png" },
  { name: "Pragmatic Play", logo: "/images/providers/pragmatic-play.png" },
  { name: "Play'n GO", logo: "/images/providers/playn-go.png" },
  { name: "Hacksaw Gaming", logo: "/images/providers/hacksaw-gaming.png" },
  { name: "Relax Gaming", logo: "/images/providers/relax-gaming.png" },
  { name: "NetEnt", logo: "/images/providers/netent.png" },
  { name: "Red Tiger", logo: "/images/providers/red-tiger.png" },
  { name: "Push Gaming", logo: "/images/providers/push-gaming.png" },
  { name: "Yggdrasil", logo: "/images/providers/yggdrasil.png" },
  { name: "Nolimit City", logo: "/images/providers/nolimit-city.png" },
  { name: "Booming Games", logo: "/images/providers/booming-games.png" },
  { name: "Microgaming", logo: "/images/providers/microgaming.png" },
];

export const moreProviders = "100+ more";

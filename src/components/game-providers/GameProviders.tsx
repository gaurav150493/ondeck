import Image from "next/image";
import { SectionHeading } from "@/common/SectionHeading/SectionHeading";
import containerStyles from "@/styles/container.module.scss";
import styles from "./GameProviders.module.scss";
import { gameProviders, moreProviders } from "./gameProviders.constants";

export function GameProviders({
  id = "game-providers",
  eyebrow = "Our game providers",
  title,
  highlight,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  highlight?: string;
} = {}) {
  return (
    <section className={containerStyles.section} aria-labelledby={id}>
      <div className={containerStyles.container}>
        <SectionHeading id={id} eyebrow={eyebrow} title={title} highlight={highlight} />

        <ul className={styles.grid}>
          {gameProviders.map((provider) => (
            <li key={provider.name} className={styles.tile}>
              <Image
                className={styles.logo}
                src={provider.logo}
                alt={provider.name}
                width={331}
                height={208}
              />
            </li>
          ))}
        </ul>

        <p className={styles.more}>{moreProviders}</p>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon } from "@/common/icons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import type { PageHeroContent } from "./pageSections.types";

export function PageHero({ eyebrow, title, titleAccent, subhead, ctas }: PageHeroContent) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroArt}>
        <Image
          className={styles.heroImage}
          src="/images/pages/page-hero.webp"
          alt=""
          width={1400}
          height={788}
          priority
        />
      </div>

      <div className={containerStyles.container}>
        <div className={styles.heroPanel}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.heroTitle}>
            {title}
            <span className={styles.heroAccent}>{titleAccent}</span>
          </h1>
          <p className={styles.heroSubhead}>{subhead}</p>
          <div className={styles.heroActions}>
            {ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant} icon={<ArrowRightIcon />}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

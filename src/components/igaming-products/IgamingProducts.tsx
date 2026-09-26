import Image from "next/image";
import Link from "next/link";
import { ArrowCircleIcon } from "@/common/icons";
import { SectionHeading } from "@/common/SectionHeading/SectionHeading";
import containerStyles from "@/styles/container.module.scss";
import styles from "./IgamingProducts.module.scss";
import { ProductDeck } from "./ProductDeck";
import { productCards } from "./igamingProducts.constants";

export function IgamingProducts() {
  return (
    <section className={containerStyles.section} aria-labelledby="igaming-products">
      <div className={containerStyles.container}>
        <SectionHeading
          id="igaming-products"
          eyebrow="iGaming products"
          title="Everything you need to power every"
          highlight="experience."
        />

        <ProductDeck>
          {productCards.map((card, index) => (
            <Link
              key={card.title}
              href={card.href}
              className={styles.card}
              style={{ "--i": index } as React.CSSProperties}
            >
              <Image
                className={styles.thumb}
                src={card.image}
                alt=""
                width={400}
                height={260}
              />
              <div className={styles.body}>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.description}>{card.description}</p>
                <span className={styles.arrow}>
                  <ArrowCircleIcon />
                </span>
              </div>
            </Link>
          ))}
        </ProductDeck>
      </div>
    </section>
  );
}

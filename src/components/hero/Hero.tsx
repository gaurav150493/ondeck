import Image from "next/image";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon } from "@/common/icons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.art}>
        <Image
          className={styles.background}
          src="/images/hero-banner.webp"
          alt=""
          width={1600}
          height={738}
          priority
          sizes="100vw"
        />
      </div>

      <div className={containerStyles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>One modern stack</p>
          <h1 className={styles.title}>
            <span className={styles.titleTop}>Build. Launch.</span>
            <span className={styles.titleAccent}>Scale. Win.</span>
          </h1>
          <p className={styles.tagline}>
            The all-in-one iGaming platform for ambitious operators.
          </p>
          <div className={styles.actions}>
            <Button href="/platform/pam" size="large" icon={<ArrowRightIcon />}>
              Explore Platform
            </Button>
            <Button href="/contact-us" variant="hollow" size="large" icon={<ArrowRightIcon />}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

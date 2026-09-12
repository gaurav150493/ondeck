import Image from "next/image";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon, PlayIcon } from "@/common/icons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        className={styles.background}
        src="/images/hero.png"
        alt=""
        width={1280}
        height={650}
        priority
        sizes="100vw"
      />

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
            <Button href="/platform/overview" size="large" icon={<ArrowRightIcon />}>
              Explore Platform
            </Button>
            <Button href="/watch" variant="hollow" size="large" icon={<PlayIcon />} iconPosition="before">
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

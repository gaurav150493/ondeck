import Image from "next/image";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon } from "@/common/icons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./CtaBanner.module.scss";

export function CtaBanner() {
  return (
    <section className={styles.banner} aria-labelledby="cta-banner">
      <div className={styles.media}>
        <Image
          className={styles.image}
          src="/images/cta.png"
          alt=""
          width={1717}
          height={916}
        />
      </div>

      <div className={`${containerStyles.container} ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 className={styles.title} id="cta-banner">
            Ready to build your <span className={styles.accent}>success story?</span>
          </h2>
          <p className={styles.subtitle}>Let&apos;s create the next big thing together.</p>
        </div>
      </div>

      <div className={styles.action}>
        <Button href="/contact-us/" icon={<ArrowRightIcon />}>
          Get in Touch
        </Button>
      </div>
    </section>
  );
}

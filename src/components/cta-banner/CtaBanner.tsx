import Image from "next/image";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon, GiftIcon } from "@/common/icons";
import { offer, showOffer } from "@/config/offer.config";
import containerStyles from "@/styles/container.module.scss";
import styles from "./CtaBanner.module.scss";
import { OfferConfetti } from "./OfferConfetti";

export function CtaBanner() {
  return (
    <section
      className={`${styles.banner} ${showOffer ? styles.bannerOffer : ""}`}
      aria-labelledby="cta-banner"
    >
      <div className={styles.media}>
        <Image
          className={styles.image}
          src="/images/cta.webp"
          alt=""
          width={1717}
          height={916}
        />

        {showOffer && <OfferConfetti src={offer.confetti} />}
      </div>

      <div className={`${containerStyles.container} ${styles.inner}`}>
        <div className={styles.copy}>
          {showOffer && (
            <p className={styles.offerEyebrow}>
              <GiftIcon />
              {offer.eyebrow}
            </p>
          )}

          {showOffer && <p className={styles.offerHeadline}>{offer.headline}</p>}

          <h2 className={styles.title} id="cta-banner">
            Ready to build your <span className={styles.accent}>success story?</span>
          </h2>

          {showOffer && <span className={styles.offerRule} />}

          <p className={styles.subtitle}>Let&apos;s create the next big thing together.</p>
        </div>
      </div>

      <div className={styles.action}>
        <Button href="/contact-us" variant="filled" icon={<ArrowRightIcon />}>
          Get in Touch
        </Button>
      </div>
    </section>
  );
}

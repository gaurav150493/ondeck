import Image from "next/image";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon } from "@/common/icons";
import { SectionHeading } from "@/common/SectionHeading/SectionHeading";
import containerStyles from "@/styles/container.module.scss";
import { CapabilityLineDefs, CapabilityLine } from "./CapabilityLines";
import { CapabilityPin } from "./CapabilityPin";
import styles from "./CoreCapabilities.module.scss";
import { capabilities } from "./coreCapabilities.constants";
import type { Capability, CapabilitySide } from "./coreCapabilities.types";

function CapabilityItem({ capability, index }: { capability: Capability; index: number }) {
  return (
    <div data-node={capability.id} data-index={index} className={styles.item}>
      <span className={styles.iconWrap}>{capability.icon}</span>
      <span className={styles.text}>
        <span className={styles.title}>{capability.title}</span>
        <span className={styles.meta}>{capability.meta}</span>
        <span className={styles.detail}>{capability.detail}</span>
      </span>
    </div>
  );
}

function CapabilityItems({ side }: { side: CapabilitySide }) {
  const className = `${styles.items} ${side === "left" ? styles.itemsLeft : styles.itemsRight}`;

  return (
    <div className={className}>
      {capabilities
        .map((capability, index) => ({ capability, index }))
        .filter(({ capability }) => capability.side === side)
        .map(({ capability, index }) => (
          <CapabilityItem key={capability.id} capability={capability} index={index} />
        ))}
    </div>
  );
}

export function CoreCapabilities() {
  return (
    <section
      className={`${containerStyles.section} ${styles.section}`}
      aria-labelledby="core-capabilities"
    >
      <CapabilityPin count={capabilities.length}>
        <div className={containerStyles.container}>
          <div className={styles.panel}>
            <div className={styles.left}>
              <SectionHeading
                id="core-capabilities"
                eyebrow="Core capabilities & modules"
                title={
                  <>
                    Engineered for scale.
                    <br />
                    Build for
                  </>
                }
                highlight="growth."
              />
              <Button
                href="/platform/pam"
                variant="gradient"
                size="large"
                icon={<ArrowRightIcon />}
              >
                Explore All Modules
              </Button>
            </div>

            <div className={styles.right}>
              <div className={styles.visual}>
                <Image
                  className={styles.image}
                  src="/images/capabilities.webp"
                  alt=""
                  width={652}
                  height={348}
                />
              </div>

              <CapabilityItems side="left" />
              <CapabilityItems side="right" />

              <CapabilityLineDefs />
              {capabilities.map((capability, index) => (
                <CapabilityLine key={capability.id} id={capability.id} index={index} />
              ))}
            </div>
          </div>
        </div>
      </CapabilityPin>
    </section>
  );
}

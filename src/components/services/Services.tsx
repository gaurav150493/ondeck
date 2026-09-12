import Link from "next/link";
import { SectionHeading } from "@/common/SectionHeading/SectionHeading";
import containerStyles from "@/styles/container.module.scss";
import styles from "./Services.module.scss";
import { services } from "./services.constants";

export function Services() {
  return (
    <section className={containerStyles.section} aria-labelledby="services">
      <div className={containerStyles.container}>
        <SectionHeading id="services" eyebrow="iGaming Services" />

        <div className={styles.list}>
          {services.map((service) => (
            <article key={service.title} className={styles.item}>
              <span className={styles.iconWrap}>{service.icon}</span>
              <div className={styles.body}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <Link href={service.href} className={styles.link}>
                  Learn More &gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

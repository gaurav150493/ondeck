import Image from "next/image";
import { SectionHeading } from "@/common/SectionHeading/SectionHeading";
import containerStyles from "@/styles/container.module.scss";
import styles from "./ModernStack.module.scss";
import { stackCards } from "./modernStack.constants";

export function ModernStack() {
  return (
    <section className={containerStyles.section} aria-labelledby="modern-stack">
      <div className={containerStyles.container}>
        <SectionHeading
          id="modern-stack"
          eyebrow="One modern stack"
          title={
            <>
              One platform. Two ways
              <br />
              to move
            </>
          }
          highlight="forward."
        />

        <div className={styles.grid}>
          {stackCards.map((card) => (
            <article key={card.title} className={styles.card}>
              <Image
                className={styles.image}
                src={card.image}
                alt=""
                width={320}
                height={300}
              />
              <div className={styles.body}>
                <h3 className={`${styles.title} ${styles[card.tone]}`}>{card.title}</h3>
                <ul className={styles.points}>
                  {card.points.map((point) => (
                    <li key={point} className={styles.point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

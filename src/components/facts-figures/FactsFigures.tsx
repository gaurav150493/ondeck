import { SectionHeading } from "@/common/SectionHeading/SectionHeading";
import containerStyles from "@/styles/container.module.scss";
import styles from "./FactsFigures.module.scss";
import { facts } from "./factsFigures.constants";
import { ShuffleNumber } from "./ShuffleNumber";

export function FactsFigures() {
  return (
    <section className={containerStyles.section} aria-labelledby="facts-figures">
      <div className={containerStyles.container}>
        <SectionHeading id="facts-figures" eyebrow="Facts & figures" />

        <ul className={styles.grid}>
          {facts.map((fact) => (
            <li key={fact.label} className={styles.fact}>
              <ShuffleNumber className={styles.value} value={fact.value} />
              <span className={styles.label}>{fact.label}</span>
              <span className={styles.note}>{fact.note}</span>
            </li>
          ))}
        </ul>

        <div className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}

import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import { SectionIntro } from "./SectionIntro";
import type { FaqContent } from "./pageSections.types";

export function FaqAccordion({ id, eyebrow, title, titleAccent, intro, items }: FaqContent) {
  return (
    <section className={styles.section} id={id}>
      <div className={containerStyles.container}>
        <SectionIntro eyebrow={eyebrow} title={title} titleAccent={titleAccent} />
        {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
        <div className={styles.faq}>
          {items.map((item) => (
            <details key={item.question} className={styles.faqItem} name="faq">
              <summary className={styles.faqQuestion}>
                {item.question}
                <span className={styles.faqMark} aria-hidden="true" />
              </summary>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import { SectionIntro } from "./SectionIntro";
import type { ProseBandContent } from "./pageSections.types";

export function ProseSection({ id, wide, eyebrow, title, titleAccent, paragraphs }: ProseBandContent) {
  return (
    <section className={styles.section} id={id}>
      <div className={containerStyles.container}>
        {title ? <SectionIntro eyebrow={eyebrow} title={title} titleAccent={titleAccent} /> : null}
        <div className={`${styles.prose} ${wide ? styles.fullWidth : ""}`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

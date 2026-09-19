import styles from "./PageSections.module.scss";
import type { SectionHeader } from "./pageSections.types";

export function SectionIntro({ eyebrow, title, titleAccent }: SectionHeader) {
  return (
    <div className={styles.intro}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>
        {title}
        {titleAccent ? <span className={styles.titleAccent}> {titleAccent}</span> : null}
      </h2>
    </div>
  );
}

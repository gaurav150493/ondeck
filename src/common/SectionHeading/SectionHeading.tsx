import styles from "./SectionHeading.module.scss";
import type { SectionHeadingProps } from "./sectionHeading.types";

export function SectionHeading({
  eyebrow,
  eyebrowTone = "blue",
  title,
  highlight,
  id,
}: SectionHeadingProps) {
  const eyebrowClass =
    eyebrowTone === "gold" ? `${styles.eyebrow} ${styles.gold}` : styles.eyebrow;

  return (
    <div className={styles.heading}>
      <p className={eyebrowClass} id={title ? undefined : id}>
        {eyebrow}
      </p>
      {title && (
        <h2 className={styles.title} id={id}>
          {title}
          {highlight && <span className={styles.highlight}> {highlight}</span>}
        </h2>
      )}
    </div>
  );
}

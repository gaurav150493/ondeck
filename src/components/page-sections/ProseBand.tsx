import Image from "next/image";
import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import type { ProseBandContent } from "./pageSections.types";

export function ProseBand({ id, eyebrow, title, titleAccent, paragraphs }: ProseBandContent) {
  return (
    <section className={styles.band} id={id}>
      <Image
        className={styles.bandImage}
        src="/images/pages/band-bg.webp"
        alt=""
        width={1600}
        height={633}
      />
      <div className={containerStyles.container}>
        <div className={styles.bandPanel}>
          <div className={styles.bandHead}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.title}>
              {title}
              {titleAccent ? <span className={styles.titleAccent}> {titleAccent}</span> : null}
            </h2>
          </div>
          <div className={styles.bandBody}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

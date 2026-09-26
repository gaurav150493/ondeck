import Image from "next/image";
import { CircleCheckIcon } from "@/common/icons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import { SectionIntro } from "./SectionIntro";
import type { CardGridContent } from "./pageSections.types";

interface SplitSectionProps extends CardGridContent {
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  paragraphs?: string[];
}

export function SplitSection({
  id,
  eyebrow,
  title,
  titleAccent,
  intro,
  outro,
  groups,
  paragraphs,
  image = "/images/pages/tradeoff-art.webp",
  imageWidth = 1024,
  imageHeight = 848,
}: SplitSectionProps) {
  const points = groups.flatMap((group) => group.items);

  return (
    <section className={styles.split} id={id}>
      <div className={styles.splitInner}>
        <Image
          className={styles.splitArt}
          src={image}
          alt=""
          width={imageWidth}
          height={imageHeight}
        />

        <div className={`${containerStyles.container} ${styles.splitBody}`}>
          {title ? (
            <SectionIntro eyebrow={eyebrow} title={title} titleAccent={titleAccent} />
          ) : null}
          {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}

          {paragraphs?.length ? (
            <div className={styles.splitProse}>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {points.length > 0 ? (
            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point.title} className={styles.point}>
                  <span className={styles.pointMark} aria-hidden="true">
                    <CircleCheckIcon size={20} />
                  </span>
                  <span>
                    <strong className={styles.pointTitle}>{point.title}</strong> {point.body}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}

          {outro ? <p className={styles.sectionOutro}>{outro}</p> : null}
        </div>
      </div>
    </section>
  );
}

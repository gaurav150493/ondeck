import Image from "next/image";
import { CircleCheckIcon } from "@/common/icons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import { SectionIntro } from "./SectionIntro";
import type { CardGridContent } from "./pageSections.types";

export function SplitSection({
  id,
  eyebrow,
  title,
  titleAccent,
  intro,
  outro,
  groups,
}: CardGridContent) {
  const points = groups.flatMap((group) => group.items);

  return (
    <section className={styles.split} id={id}>
      <div className={styles.splitInner}>
        <Image
          className={styles.splitArt}
          src="/images/pages/tradeoff-art.webp"
          alt=""
          width={1024}
          height={848}
        />

        <div className={`${containerStyles.container} ${styles.splitBody}`}>
          <SectionIntro eyebrow={eyebrow} title={title} titleAccent={titleAccent} />
          {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
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
          {outro ? <p className={styles.sectionOutro}>{outro}</p> : null}
        </div>
      </div>
    </section>
  );
}

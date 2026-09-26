import { cardIcons } from "./cardIcons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import { IconCard } from "./IconCard";
import { SectionIntro } from "./SectionIntro";
import type { CardGridContent } from "./pageSections.types";

export function CardGrid({
  id,
  wide,
  eyebrow,
  title,
  titleAccent,
  intro,
  outro,
  groups,
}: CardGridContent) {
  const offsets = groups.reduce<number[]>(
    (acc, group, index) => [...acc, acc[index] + group.items.length],
    [0],
  );

  return (
    <section className={styles.section} id={id}>
      <div className={containerStyles.container}>
        <SectionIntro eyebrow={eyebrow} title={title} titleAccent={titleAccent} />
        {intro ? <p className={`${styles.sectionIntro} ${wide ? styles.fullWidth : ""}`}>{intro}</p> : null}
        {groups.map((group, groupIndex) => (
          <div key={group.label ?? "default"} className={styles.group}>
            {group.label ? <h3 className={styles.groupLabel}>{group.label}</h3> : null}
            <ul className={styles.cards}>
              {group.items.map((item, index) => (
                <IconCard
                  key={item.title}
                  icon={cardIcons[(offsets[groupIndex] + index) % cardIcons.length]}
                  title={item.title}
                  body={item.body}
                />
              ))}
            </ul>
          </div>
        ))}
        {outro ? <p className={`${styles.sectionOutro} ${wide ? styles.fullWidth : ""}`}>{outro}</p> : null}
      </div>
    </section>
  );
}

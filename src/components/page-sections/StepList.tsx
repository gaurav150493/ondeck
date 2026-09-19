import {
  BullseyeIcon,
  FileIcon,
  LayerGroupIcon,
  RocketIcon,
  SettingsIcon,
} from "@/common/icons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import { SectionIntro } from "./SectionIntro";
import type { StepListContent } from "./pageSections.types";

const stepIcons = [
  <BullseyeIcon key="bullseye" size={40} />,
  <SettingsIcon key="setting" size={40} />,
  <LayerGroupIcon key="layer" size={40} />,
  <RocketIcon key="rocket" size={40} />,
  <FileIcon key="file" size={40} />,
];

export function StepList({ id, eyebrow, title, titleAccent, steps }: StepListContent) {
  return (
    <section className={styles.section} id={id}>
      <div className={containerStyles.container}>
        <SectionIntro eyebrow={eyebrow} title={title} titleAccent={titleAccent} />
        <ul className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepIcon} aria-hidden="true">
                {stepIcons[index % stepIcons.length]}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

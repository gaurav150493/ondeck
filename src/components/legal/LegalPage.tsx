import containerStyles from "@/styles/container.module.scss";
import styles from "./Legal.module.scss";
import type { LegalContent } from "./legal.types";

export function LegalPage({ title, updated, sections }: LegalContent) {
  return (
    <main className={containerStyles.page}>
      <article className={styles.page}>
        <div className={containerStyles.container}>
          <header className={styles.head}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.updated}>{updated}</p>
          </header>

          <div className={styles.body}>
            {sections.map((section) => (
              <section key={section.title} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}

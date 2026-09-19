import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import { SectionIntro } from "./SectionIntro";
import type { CompareTableContent } from "./pageSections.types";

export function CompareTable({
  id,
  eyebrow,
  title,
  titleAccent,
  columns,
  rows,
  intro,
}: CompareTableContent) {
  return (
    <section className={styles.section} id={id}>
      <div className={containerStyles.container}>
        <SectionIntro eyebrow={eyebrow} title={title} titleAccent={titleAccent} />
        {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">
                  <span className={styles.srOnly}>Feature</span>
                </th>
                {columns.map((column) => (
                  <th key={column} scope="col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, index) => (
                    <td key={columns[index]} data-column={columns[index]}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

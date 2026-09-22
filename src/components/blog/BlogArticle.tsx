import Image from "next/image";
import Link from "next/link";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon } from "@/common/icons";
import { primaryNav } from "@/components/header/header.constants";
import containerStyles from "@/styles/container.module.scss";
import styles from "./Blog.module.scss";
import type { BlogPost } from "./blog.types";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const navLabels = new Map(
  primaryNav.flatMap((group) => group.items.map((item) => [item.href, item.label])),
);

export function BlogArticle({ post }: { post: BlogPost }) {
  const related = post.related.filter((href) => navLabels.has(href));

  return (
    <main className={containerStyles.page}>
      <article>
        <header className={styles.hero}>
          <div className={styles.heroArt}>
            <Image
              className={styles.heroImage}
              src={post.image}
              alt=""
              width={554}
              height={742}
              priority
            />
          </div>

          <div className={`${containerStyles.container} ${styles.heroInner}`}>
            <p className={styles.eyebrow}>Industry news</p>
            <h1 className={styles.heading}>{post.heading}</h1>
            <p className={styles.standfirst}>{post.standfirst}</p>
            <p className={styles.byline}>
              <span className={styles.author}>{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>
                {dateFormatter.format(new Date(post.publishedAt))}
              </time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} minute read</span>
            </p>
          </div>
        </header>

        <div className={`${containerStyles.container} ${styles.layout}`}>
          <div className={styles.body}>
            {post.lead.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            {post.sections.map((section) => (
              <section key={section.heading} className={styles.section} id={slugify(section.heading)}>
                {section.level > 1 ? (
                  <h3 className={styles.subHeading}>{section.heading}</h3>
                ) : (
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                )}
                {groupBlocks(section.blocks).map((group, index) =>
                  group.type === "items" ? (
                    <ul key={index} className={styles.points}>
                      {group.items.map((item) => (
                        <li key={item.title} className={styles.point}>
                          <strong className={styles.pointTitle}>{item.title}</strong>
                          {item.body ? ` — ${item.body}` : null}
                        </li>
                      ))}
                    </ul>
                  ) : group.type === "table" ? (
                    <div key={index} className={styles.tableScroll}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th scope="col">
                              <span className={styles.srOnly}>Item</span>
                            </th>
                            {group.columns.map((column) => (
                              <th key={column} scope="col">
                                {column}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {group.rows.map((row) => (
                            <tr key={row.label}>
                              <th scope="row">{row.label}</th>
                              {row.values.map((value, column) => (
                                <td key={group.columns[column]} data-column={group.columns[column]}>
                                  {value}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p key={index} className={styles.paragraph}>
                      {group.value}
                    </p>
                  ),
                )}
              </section>
            ))}

            {post.faq.length > 0 ? (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Frequently asked questions</h2>
                <dl className={styles.faq}>
                  {post.faq.map((item) => (
                    <div key={item.question} className={styles.faqItem}>
                      <dt className={styles.question}>{item.question}</dt>
                      <dd className={styles.answer}>{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideInner}>
              <h2 className={styles.asideTitle}>In this article</h2>
              <ul className={styles.contents}>
                {post.sections.map((section) => (
                  <li key={section.heading}>
                    <a className={styles.contentsLink} href={`#${slugify(section.heading)}`}>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>

              {related.length > 0 ? (
                <>
                  <h2 className={styles.asideTitle}>Related</h2>
                  <ul className={styles.related}>
                    {related.map((href) => (
                      <li key={href}>
                        <Link href={href} className={styles.relatedLink}>
                          {navLabels.get(href)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </aside>
        </div>

        <section className={styles.cta}>
          <div className={styles.ctaArt}>
            <Image
              className={styles.ctaImage}
              src="/images/cta.webp"
              alt=""
              width={1717}
              height={916}
            />
          </div>
          <div className={`${containerStyles.container} ${styles.ctaInner}`}>
            <p className={styles.ctaBody}>{post.cta.body}</p>
            <Button href="/contact-us" icon={<ArrowRightIcon />}>
              {post.cta.label}
            </Button>
          </div>
        </section>
      </article>
    </main>
  );
}

type BlockGroup =
  | { type: "p"; value: string }
  | { type: "items"; items: { title: string; body: string }[] }
  | { type: "table"; columns: string[]; rows: { label: string; values: string[] }[] };

function groupBlocks(blocks: BlogPost["sections"][number]["blocks"]) {
  const groups: BlockGroup[] = [];

  for (const block of blocks) {
    if (block.type === "item") {
      const last = groups.at(-1);
      if (last?.type === "items") last.items.push({ title: block.title, body: block.body });
      else groups.push({ type: "items", items: [{ title: block.title, body: block.body }] });
    } else if (block.type === "table") {
      groups.push({ type: "table", columns: block.columns, rows: block.rows });
    } else {
      groups.push({ type: "p", value: block.value });
    }
  }

  return groups;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

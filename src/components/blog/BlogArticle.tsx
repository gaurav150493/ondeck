import Image from "next/image";
import Link from "next/link";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon } from "@/common/icons";
import { primaryNav } from "@/components/header/header.constants";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { CompareTable } from "@/components/page-sections/CompareTable";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { ProseBand } from "@/components/page-sections/ProseBand";
import { ProseSection } from "@/components/page-sections/ProseSection";
import containerStyles from "@/styles/container.module.scss";
import styles from "./Blog.module.scss";
import { sectionShape, splitHeading } from "./blogSections";
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
  const bandIndex = post.sections.findIndex((section) => {
    const { items, tables } = sectionShape(section);
    return items.length === 0 && tables.length === 0;
  });

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

        <section className={styles.lead}>
          <div className={containerStyles.container}>
            {post.lead.map((paragraph) => (
              <p key={paragraph} className={styles.leadParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {post.sections.map((section, index) => {
          const { items, tables, paragraphs } = sectionShape(section);
          const { title, titleAccent } = splitHeading(section.heading);
          const key = section.heading;

          if (tables.length > 0) {
            const table = tables[0];
            return table.type === "table" ? (
              <CompareTable
                key={key}
                title={title}
                titleAccent={titleAccent}
                intro={paragraphs[0]}
                outro={paragraphs.slice(1).join(" ") || undefined}
                columns={table.columns}
                rows={table.rows}
              />
            ) : null;
          }

          if (items.length > 0) {
            return (
              <CardGrid
                key={key}
                title={title}
                titleAccent={titleAccent}
                intro={paragraphs[0]}
                outro={paragraphs.slice(1).join(" ") || undefined}
                groups={[
                  {
                    items: items.map((block) =>
                      block.type === "item" ? { title: block.title, body: block.body } : null,
                    ).filter((item): item is { title: string; body: string } => item !== null),
                  },
                ]}
              />
            );
          }

          return index === bandIndex ? (
            <ProseBand key={key} title={title} titleAccent={titleAccent} paragraphs={paragraphs} />
          ) : (
            <ProseSection key={key} title={title} titleAccent={titleAccent} paragraphs={paragraphs} />
          );
        })}

        {post.faq.length > 0 ? (
          <FaqAccordion
            title="Frequently asked"
            titleAccent="questions"
            items={post.faq}
          />
        ) : null}

        {related.length > 0 ? (
          <section className={styles.relatedBand}>
            <div className={containerStyles.container}>
              <h2 className={styles.relatedTitle}>Read next</h2>
              <ul className={styles.relatedList}>
                {related.map((href) => (
                  <li key={href}>
                    <Link href={href} className={styles.relatedLink}>
                      {navLabels.get(href)}
                      <ArrowRightIcon size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

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

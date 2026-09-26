import Image from "next/image";
import Link from "next/link";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon } from "@/common/icons";
import { primaryNav } from "@/components/header/header.constants";
import { CardGrid } from "@/components/page-sections/CardGrid";
import { CompareTable } from "@/components/page-sections/CompareTable";
import { FaqAccordion } from "@/components/page-sections/FaqAccordion";
import { ProseSection } from "@/components/page-sections/ProseSection";
import { SplitSection } from "@/components/page-sections/SplitSection";
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

        <SplitSection
          image={post.image}
          imageWidth={554}
          imageHeight={742}
          paragraphs={post.lead}
          groups={[]}
        />

        {post.sections.map((section) => {
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

          return (
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

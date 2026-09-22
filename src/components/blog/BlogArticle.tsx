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
      <article className={styles.article}>
        <div className={containerStyles.container}>
          <p className={styles.eyebrow}>Industry news</p>
          <h1 className={styles.heading}>{post.heading}</h1>
          <p className={styles.standfirst}>{post.standfirst}</p>
          <p className={styles.byline}>
            <time dateTime={post.publishedAt}>
              {dateFormatter.format(new Date(post.publishedAt))}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} minute read</span>
          </p>

          <Image
            className={styles.cover}
            src={post.image}
            alt=""
            width={554}
            height={742}
            priority
          />

          <div className={styles.body}>
            {post.lead.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            {post.sections.map((section) => (
              <section key={section.heading} className={styles.section}>
                <h2 className={styles.sectionHeading}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.items.length > 0 ? (
                  <ul className={styles.points}>
                    {section.items.map((item) => (
                      <li key={item.title} className={styles.point}>
                        <strong className={styles.pointTitle}>{item.title}</strong>
                        {item.body ? ` — ${item.body}` : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {post.faq.length > 0 ? (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Frequently asked questions</h2>
                <dl className={styles.faq}>
                  {post.faq.map((item) => (
                    <div key={item.question}>
                      <dt className={styles.question}>{item.question}</dt>
                      <dd className={styles.answer}>{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
          </div>

          {related.length > 0 ? (
            <aside className={styles.related}>
              <h2 className={styles.relatedTitle}>Related</h2>
              <ul className={styles.relatedList}>
                {related.map((href) => (
                  <li key={href}>
                    <Link href={href} className={styles.relatedLink}>
                      {navLabels.get(href)}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}

          <aside className={styles.cta}>
            <p className={styles.ctaBody}>{post.cta.body}</p>
            <Button href="/contact-us" icon={<ArrowRightIcon />}>
              {post.cta.label}
            </Button>
          </aside>
        </div>
      </article>
    </main>
  );
}

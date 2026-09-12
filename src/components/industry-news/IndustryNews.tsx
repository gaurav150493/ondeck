import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/common/SectionHeading/SectionHeading";
import containerStyles from "@/styles/container.module.scss";
import styles from "./IndustryNews.module.scss";
import { articles } from "./industryNews.constants";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function IndustryNews() {
  return (
    <section className={containerStyles.section} aria-labelledby="industry-news">
      <div className={containerStyles.container}>
        <SectionHeading
          id="industry-news"
          eyebrow="Game industry news & tips"
          title="Insights to keep you ahead."
        />

        <div className={styles.grid}>
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className={styles.card}>
              <Image
                className={styles.thumb}
                src={article.image}
                alt=""
                width={400}
                height={220}
              />
              <div className={styles.body}>
                <span className={styles.tag}>{article.tag}</span>
                <h3 className={styles.title}>{article.title}</h3>
                <time className={styles.date} dateTime={article.publishedAt}>
                  {dateFormatter.format(new Date(article.publishedAt))}
                </time>
                <span className={styles.link}>Learn More &gt;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

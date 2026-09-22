import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/common/SectionHeading/SectionHeading";
import { posts } from "@/content/blog/posts.constants";
import containerStyles from "@/styles/container.module.scss";
import styles from "./IndustryNews.module.scss";

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
      </div>

      <div className={styles.rail}>
        <ul className={`${containerStyles.container} ${styles.track}`}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.item}>
              <Link href={`/blog/${post.slug}`} className={styles.card}>
                <Image
                  className={styles.thumb}
                  src={post.image}
                  alt=""
                  width={400}
                  height={220}
                />
                <div className={styles.body}>
                  <span className={styles.tag}>Industry news</span>
                  <h3 className={styles.title}>{post.title}</h3>
                  <time className={styles.date} dateTime={post.publishedAt}>
                    {dateFormatter.format(new Date(post.publishedAt))}
                  </time>
                  <span className={styles.link}>Learn More &gt;</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

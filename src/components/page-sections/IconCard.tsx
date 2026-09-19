import Link from "next/link";
import styles from "./PageSections.module.scss";

export function IconCard({
  icon,
  title,
  body,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href?: string;
}) {
  return (
    <li className={styles.card}>
      <span className={styles.cardMark} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.cardBody}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.cardText}>{body}</span>
        {href ? (
          <Link className={styles.cardLink} href={href}>
            Learn More &gt;
          </Link>
        ) : null}
      </span>
    </li>
  );
}

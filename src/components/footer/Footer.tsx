import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import containerStyles from "@/styles/container.module.scss";
import styles from "./Footer.module.scss";
import { footerAbout, footerNav, legalLinks } from "./footer.constants";
import { socialLinks } from "./socialLinks.constants";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={containerStyles.container}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Image src="/images/logo-footer.png" alt={siteConfig.name} width={149} height={46} />
            <p className={styles.about}>{footerAbout}</p>
            <div className={styles.socials}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.social}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className={styles.copyright}>
              {new Date().getFullYear()} © ondeckglobal • All rights reserved
            </p>
            <div className={styles.legal}>
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.columns}>
            {footerNav.map((column) => (
              <nav key={column.label} aria-label={column.label}>
                <h3 className={styles.columnTitle}>{column.label}</h3>
                {column.items.map((item) =>
                  item.href.startsWith("mailto:") ? (
                    <a key={item.href} href={item.href} className={styles.columnLink}>
                      {item.label}
                    </a>
                  ) : (
                    <Link key={item.href} href={item.href} className={styles.columnLink}>
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

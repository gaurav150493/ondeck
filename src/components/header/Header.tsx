import Image from "next/image";
import Link from "next/link";
import { Button } from "@/common/Button/Button";
import { ArrowRightIcon, ChevronDownIcon } from "@/common/icons";
import containerStyles from "@/styles/container.module.scss";
import styles from "./Header.module.scss";
import { primaryNav } from "./header.constants";
import { StickyHeader } from "./StickyHeader";

export function Header() {
  return (
    <StickyHeader>
      <div className={`${containerStyles.container} ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="OnDeck Global home">
          <Image
            className={styles.logoMark}
            src="/images/logo-header.webp"
            alt="OnDeck Global"
            width={227}
            height={46}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {primaryNav.map((group) => (
            <div key={group.label} className={styles.group}>
              <button type="button" className={styles.groupLabel} aria-expanded="false">
                {group.label}
                <ChevronDownIcon />
              </button>
              <div className={styles.dropdown}>
                {group.items.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.dropdownLink}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/login" className={styles.login}>
            Login
          </Link>
          <Button href="/contact-us" icon={<ArrowRightIcon />}>
            Get in Touch
          </Button>
        </div>
      </div>
    </StickyHeader>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { primaryNav } from "./header.constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const header = panel.current?.closest("header");
    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    if (header instanceof HTMLElement) header.dataset.mobileMenu = "open";
    document.addEventListener("keydown", onKey);
    panel.current?.focus();

    return () => {
      document.body.style.overflow = previous;
      if (header instanceof HTMLElement) header.removeAttribute("data-mobile-menu");
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.menuBars} data-open={open} aria-hidden="true" />
      </button>

      <div
        id="mobile-menu"
        ref={panel}
        className={styles.menuPanel}
        data-open={open}
        tabIndex={-1}
        inert={!open}
      >
        <nav className={styles.menuInner} aria-label="Mobile">
          {primaryNav.map((group) => (
            <section key={group.label} className={styles.menuGroup}>
              <h2 className={styles.menuGroupLabel}>{group.label}</h2>
              <ul className={styles.menuList}>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.menuLink}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <Link href="/contact-us" className={styles.menuContact} onClick={() => setOpen(false)}>
            sales@ondeckglobal.com
          </Link>
        </nav>
      </div>
    </>
  );
}

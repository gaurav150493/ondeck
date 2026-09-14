"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./Header.module.scss";

const threshold = 8;

export function StickyHeader({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      node.dataset.scrolled = window.scrollY > threshold ? "true" : "false";
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header ref={ref} className={styles.header} data-scrolled="false">
      {children}
    </header>
  );
}

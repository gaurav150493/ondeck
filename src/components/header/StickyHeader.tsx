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

    const nav = node.querySelector("nav");

    const dismiss = (event: Event) => {
      if (!(event.target as HTMLElement | null)?.closest("a")) return;
      node.dataset.menu = "dismissed";
      (document.activeElement as HTMLElement | null)?.blur();
    };

    const restore = () => {
      node.dataset.menu = "";
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    nav?.addEventListener("click", dismiss);
    nav?.addEventListener("mouseleave", restore);
    nav?.addEventListener("focusin", restore);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      nav?.removeEventListener("click", dismiss);
      nav?.removeEventListener("mouseleave", restore);
      nav?.removeEventListener("focusin", restore);
    };
  }, []);

  return (
    <header ref={ref} className={styles.header} data-scrolled="false" data-menu="">
      {children}
    </header>
  );
}

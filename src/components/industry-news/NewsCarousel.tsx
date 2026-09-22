"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ArrowRightIcon } from "@/common/icons";
import styles from "./IndustryNews.module.scss";

export function NewsCarousel({ children }: { children: ReactNode }) {
  const track = useRef<HTMLUListElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = track.current;
    const node = root.current;
    if (!list || !node) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const max = list.scrollWidth - list.clientWidth;
      node.dataset.atStart = String(list.scrollLeft <= 1);
      node.dataset.atEnd = String(list.scrollLeft >= max - 1);
      node.dataset.static = String(max <= 1);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    list.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      list.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const step = (direction: 1 | -1) => {
    const list = track.current;
    if (!list) return;
    const card = list.firstElementChild as HTMLElement | null;
    const width = card ? card.offsetWidth + 18 : list.clientWidth;
    list.scrollBy({ left: width * direction, behavior: "smooth" });
  };

  return (
    <div ref={root} className={styles.carousel} data-at-start="true" data-at-end="false">
      <ul ref={track} className={styles.track}>
        {children}
      </ul>

      <div className={styles.controls}>
        <button
          type="button"
          className={`${styles.control} ${styles.prev}`}
          aria-label="Previous articles"
          onClick={() => step(-1)}
        >
          <ArrowRightIcon />
        </button>
        <button
          type="button"
          className={styles.control}
          aria-label="Next articles"
          onClick={() => step(1)}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

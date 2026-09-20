"use client";

import { useEffect, useRef } from "react";
import containerStyles from "@/styles/container.module.scss";
import styles from "./PageSections.module.scss";
import { SectionIntro } from "./SectionIntro";
import type { FaqContent } from "./pageSections.types";

const duration = 280;
const easing = "cubic-bezier(0.33, 1, 0.68, 1)";

export function FaqAccordion({ id, eyebrow, title, titleAccent, intro, items }: FaqContent) {
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = list.current;
    if (!root) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new Map<HTMLDetailsElement, Animation>();

    const slide = (item: HTMLDetailsElement, open: boolean) => {
      const body = item.lastElementChild as HTMLElement | null;
      if (!body) return;

      running.get(item)?.cancel();
      const summary = item.firstElementChild as HTMLElement;
      const start = item.offsetHeight;
      item.open = true;
      const end = open ? summary.offsetHeight + body.offsetHeight : summary.offsetHeight;

      item.style.overflow = "hidden";
      const animation = item.animate(
        { height: [`${start}px`, `${end}px`] },
        { duration, easing },
      );
      running.set(item, animation);

      animation.onfinish = () => {
        running.delete(item);
        item.open = open;
        item.style.removeProperty("overflow");
        item.style.removeProperty("height");
      };
    };

    const onClick = (event: MouseEvent) => {
      const summary = (event.target as HTMLElement | null)?.closest("summary");
      const item = summary?.parentElement as HTMLDetailsElement | null;
      if (!summary || !item || !root.contains(item)) return;

      event.preventDefault();
      const opening = !item.open;

      if (still.matches) {
        item.open = opening;
      } else {
        slide(item, opening);
      }

      if (!opening) return;
      for (const other of root.querySelectorAll<HTMLDetailsElement>("details[open]")) {
        if (other === item) continue;
        if (still.matches) other.open = false;
        else slide(other, false);
      }
    };

    root.addEventListener("click", onClick);
    return () => {
      root.removeEventListener("click", onClick);
      for (const animation of running.values()) animation.cancel();
    };
  }, []);

  return (
    <section className={styles.section} id={id}>
      <div className={containerStyles.container}>
        <SectionIntro eyebrow={eyebrow} title={title} titleAccent={titleAccent} />
        {intro ? <p className={styles.sectionIntro}>{intro}</p> : null}
        <div ref={list} className={styles.faq}>
          {items.map((item) => (
            <details key={item.question} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                {item.question}
                <span className={styles.faqMark} aria-hidden="true" />
              </summary>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

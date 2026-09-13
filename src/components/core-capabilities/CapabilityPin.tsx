"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import styles from "./CoreCapabilities.module.scss";

export function CapabilityPin({ count, children }: { count: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.removeAttribute("data-active");
      return;
    }

    let frame = 0;
    let current = -1;

    const measure = () => {
      frame = 0;
      const pane = node.firstElementChild as HTMLElement | null;
      const runway = pane ? node.offsetHeight - pane.offsetHeight : 0;
      const rect = node.getBoundingClientRect();
      const progress =
        runway > 0
          ? -rect.top / runway
          : (window.innerHeight * 0.72 - rect.top) / (rect.height + window.innerHeight * 0.3);
      const index = Math.min(count - 1, Math.max(0, Math.floor(progress * count)));

      if (index !== current) {
        current = index;
        node.setAttribute("data-active", String(index));
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [count]);

  return (
    <div
      ref={ref}
      className={styles.track}
      data-active={0}
      style={{ "--steps": count } as CSSProperties}
    >
      <div className={styles.sticky}>{children}</div>
    </div>
  );
}

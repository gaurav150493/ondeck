"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import styles from "./CoreCapabilities.module.scss";

const fitMargin = 32;

export function CapabilityPin({ count, children }: { count: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const pane = node?.firstElementChild as HTMLElement | null;
    if (!node || !pane) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.pin = "off";
      return;
    }

    let frame = 0;
    let current = -1;
    let offset = -1;
    let seen = false;
    let collapsed = false;

    const setIndex = (next: number) => {
      if (next === current) return;
      current = next;
      node.setAttribute("data-active", String(next));
    };

    const measure = () => {
      frame = 0;
      if (collapsed) return;

      const viewport = window.innerHeight;
      const paneHeight = pane.offsetHeight;
      const rect = node.getBoundingClientRect();

      if (paneHeight > viewport - fitMargin) {
        node.dataset.pin = "off";
        const progress =
          (viewport * 0.72 - rect.top) / (paneHeight + viewport * 0.3);
        setIndex(Math.min(count - 1, Math.max(0, Math.floor(progress * count))));
        return;
      }

      node.dataset.pin = "on";

      const next = Math.round((viewport - paneHeight) / 2);
      if (next !== offset) {
        offset = next;
        node.style.setProperty("--pin-offset", `${next}px`);
      }

      const runway = node.offsetHeight - paneHeight;
      if (runway <= 0) return;

      const progress = (offset - rect.top) / runway;
      const index = Math.min(count - 1, Math.max(0, Math.floor(progress * count)));
      setIndex(index);

      if (index >= count - 1) seen = true;
      if (!seen || rect.bottom > 0) return;

      collapsed = true;
      const from = window.scrollY;
      node.dataset.pin = "off";
      node.style.removeProperty("--pin-offset");
      window.scrollTo(0, Math.max(0, from - runway));
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
      data-pin="off"
      style={{ "--steps": count } as CSSProperties}
    >
      <div className={styles.sticky}>{children}</div>
    </div>
  );
}

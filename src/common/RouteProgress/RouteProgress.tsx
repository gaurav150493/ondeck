"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import styles from "./RouteProgress.module.scss";

export function RouteProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const settle = useRef(0);

  useEffect(() => {
    const node = bar.current;
    if (!node) return;

    const start = () => {
      window.clearTimeout(settle.current);
      node.dataset.state = "idle";
      void node.offsetWidth;
      node.dataset.state = "loading";
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as HTMLElement | null)?.closest("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || !href.startsWith("/")) return;
      if (href.split("#")[0] === window.location.pathname) return;

      start();
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    const node = bar.current;
    if (!node || node.dataset.state !== "loading") return;

    node.dataset.state = "done";
    settle.current = window.setTimeout(() => {
      node.dataset.state = "idle";
    }, 320);

    return () => window.clearTimeout(settle.current);
  }, [pathname]);

  return <div ref={bar} className={styles.bar} data-state="idle" aria-hidden="true" />;
}

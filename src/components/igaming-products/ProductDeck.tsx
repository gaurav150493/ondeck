"use client";

import type { ReactNode } from "react";
import { useInView } from "@/customHooks/useInView";
import styles from "./IgamingProducts.module.scss";

export function ProductDeck({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`${styles.grid} ${inView ? styles.dealt : ""}`}>
      {children}
    </div>
  );
}

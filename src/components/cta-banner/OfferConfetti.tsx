"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "@/customHooks/useInView";
import styles from "./CtaBanner.module.scss";

export function OfferConfetti({ src }: { src: string }) {
  const { ref, inView } = useInView<HTMLDivElement>("0px 0px -20% 0px");

  useEffect(() => {
    const controller = new AbortController();
    void fetch(src, { signal: controller.signal }).catch(() => undefined);

    return () => controller.abort();
  }, [src]);

  return (
    <div ref={ref} className={`${styles.confetti} ${inView ? styles.confettiRun : ""}`} aria-hidden="true">
      {inView ? (
        <Image src={src} alt="" width={1200} height={669} unoptimized priority={false} />
      ) : null}
    </div>
  );
}

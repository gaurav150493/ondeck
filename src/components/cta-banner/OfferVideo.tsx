"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/customHooks/useInView";
import styles from "./CtaBanner.module.scss";

export function OfferVideo({ src }: { src: string }) {
  const { ref, inView } = useInView<HTMLDivElement>("0px 0px -20% 0px");
  const video = useRef<HTMLVideoElement>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    void fetch(src, { signal: controller.signal }).catch(() => undefined);

    return () => controller.abort();
  }, [src]);

  useEffect(() => {
    const node = video.current;
    if (!inView || !node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    void node.play().catch(() => undefined);
  }, [inView]);

  const state = played ? styles.confettiDone : inView ? styles.confettiPlaying : "";

  return (
    <div ref={ref} className={`${styles.confetti} ${state}`} aria-hidden="true">
      <video
        ref={video}
        src={src}
        muted
        playsInline
        preload="auto"
        onEnded={() => setPlayed(true)}
      />
    </div>
  );
}

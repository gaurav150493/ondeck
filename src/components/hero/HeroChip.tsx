"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";

const bannerWidth = 1280;
const bannerHeight = 650;
const chipCentreX = 690.5;
const chipCentreY = 271.5;

export function HeroChip() {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let frame = 0;

    const place = () => {
      frame = 0;
      const width = node.clientWidth;
      const height = node.clientHeight;
      if (!width || !height) return;

      const scale = Math.max(width / bannerWidth, height / bannerHeight);
      const [alignX = "50%", alignY = "50%"] = getComputedStyle(node).objectPosition.split(" ");
      const ratio = (value: string) => (Number.parseFloat(value) || 0) / 100;

      const left = (width - bannerWidth * scale) * ratio(alignX);
      const top = (height - bannerHeight * scale) * ratio(alignY);

      node.style.setProperty("--chip-x", `${left + chipCentreX * scale}px`);
      node.style.setProperty("--chip-y", `${top + chipCentreY * scale}px`);
    };

    const onResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(place);
    };

    place();
    window.addEventListener("resize", onResize);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <Image
      ref={ref}
      className={styles.chip}
      src="/images/hero-chip.webp"
      alt=""
      width={bannerWidth}
      height={bannerHeight}
      priority
      sizes="100vw"
    />
  );
}

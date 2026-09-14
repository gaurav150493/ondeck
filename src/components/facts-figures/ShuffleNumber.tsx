"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/customHooks/useInView";

const DURATION = 1400;

function easeOut(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

function countTo(value: string, progress: number) {
  return value.replace(/\d+(?:\.\d+)?/g, (token) => {
    const target = Number(token);
    const decimals = token.includes(".") ? token.split(".")[1].length : 0;
    return (1 + (target - 1) * progress).toFixed(decimals);
  });
}

export function ShuffleNumber({ value, className }: { value: string; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / DURATION);

      if (progress < 1) {
        setDisplay(countTo(value, easeOut(progress)));
        frame = window.requestAnimationFrame(step);
        return;
      }

      setDisplay(value);
    };

    frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
      setDisplay(value);
    };
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

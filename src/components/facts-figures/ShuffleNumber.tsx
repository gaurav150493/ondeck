"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/customHooks/useInView";

const DURATION = 900;
const TICK = 55;

function scramble(target: string) {
  return target.replace(/\d/g, () => String(Math.floor(Math.random() * 10)));
}

export function ShuffleNumber({ value, className }: { value: string; className?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = performance.now();
    const timer = window.setInterval(() => {
      if (performance.now() - start >= DURATION) {
        window.clearInterval(timer);
        setDisplay(value);
        return;
      }
      setDisplay(scramble(value));
    }, TICK);

    return () => {
      window.clearInterval(timer);
      setDisplay(value);
    };
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

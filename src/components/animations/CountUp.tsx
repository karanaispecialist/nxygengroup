"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  value: string | number;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 2.2, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse value, prefix, suffix, e.g. "40+", "500+", "100,000+", "100%"
    const str = String(value);
    const numericMatch = str.match(/[\d,]+/);
    if (!numericMatch) {
      setDisplayValue(str);
      return;
    }

    const rawNumStr = numericMatch[0].replace(/,/g, "");
    const targetNumber = parseInt(rawNumStr, 10);
    const prefix = str.slice(0, numericMatch.index);
    const suffix = str.slice((numericMatch.index ?? 0) + numericMatch[0].length);
    const hasCommas = numericMatch[0].includes(",");

    const controls = animate(0, targetNumber, {
      duration,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
      onUpdate: (latest) => {
        const rounded = Math.round(latest);
        const formatted = hasCommas ? rounded.toLocaleString("en-IN") : String(rounded);
        setDisplayValue(`${prefix}${formatted}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}


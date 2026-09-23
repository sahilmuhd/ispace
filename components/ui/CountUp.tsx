"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number; // seconds
  separator?: string;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  separator = ",",
  className = "",
  prefix = "",
  suffix = ""
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const totalDuration = duration * 1000;

          const easeOutQuad = (t: number) => t * (2 - t);

          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / totalDuration, 1);
            const currentValue = Math.floor(from + (to - from) * easeOutQuad(progress));
            setValue(currentValue);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setValue(to);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [to, from, duration]);

  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

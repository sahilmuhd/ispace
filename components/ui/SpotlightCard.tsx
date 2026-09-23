"use client";

import React, { useRef } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(201, 138, 62, 0.22)",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
      style={{ "--spotlight-color": spotlightColor } as React.CSSProperties}
      {...props}
    >
      {children}

      <style jsx>{`
        .card-spotlight {
          position: relative;
          overflow: hidden;
          --mouse-x: 50%;
          --mouse-y: 50%;
          --spotlight-color: rgba(201, 138, 62, 0.22);
        }
        .card-spotlight::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle 260px at var(--mouse-x) var(--mouse-y),
            var(--spotlight-color),
            transparent 75%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 2;
        }
        .card-spotlight:hover::before,
        .card-spotlight:focus-within::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

"use client";

import React from "react";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // seconds
}

export default function ShinyText({
  children,
  className = "",
  speed = 4
}: ShinyTextProps) {
  return (
    <span className={`shiny-text ${className}`} style={{ animationDuration: `${speed}s` }}>
      {children}

      <style jsx>{`
        .shiny-text {
          display: inline-block;
          background: linear-gradient(
            120deg,
            #c98a3e 0%,
            #ffffff 45%,
            #f1c40f 50%,
            #ffffff 55%,
            #c98a3e 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine linear infinite;
        }
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </span>
  );
}

"use client";

import React from "react";

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
}

export default function BorderGlow({
  children,
  className = "",
  glowColor = "rgba(201, 138, 62, 0.6)",
  borderRadius = "6px"
}: BorderGlowProps) {
  return (
    <div
      className={`border-glow-wrap ${className}`}
      style={
        {
          "--glow-color": glowColor,
          "--radius": borderRadius
        } as React.CSSProperties
      }
    >
      <div className="border-glow-inner">{children}</div>

      <style jsx>{`
        .border-glow-wrap {
          position: relative;
          border-radius: var(--radius);
          padding: 1px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.08);
          transition: background 0.3s ease;
        }
        .border-glow-wrap::before {
          content: "";
          position: absolute;
          inset: -150%;
          background: conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            var(--glow-color) 45deg,
            transparent 90deg,
            transparent 180deg,
            var(--glow-color) 225deg,
            transparent 270deg
          );
          animation: rotateGlow 8s linear infinite;
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }
        .border-glow-wrap:hover::before {
          opacity: 1;
          animation-duration: 5s;
        }
        .border-glow-inner {
          position: relative;
          z-index: 1;
          border-radius: calc(var(--radius) - 1px);
          overflow: hidden;
          background: var(--navy);
          height: 100%;
        }
        @keyframes rotateGlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

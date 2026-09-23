"use client";

import React, { useRef, useState, useCallback } from "react";

interface TiltedCardProps {
  children?: React.ReactNode;
  imageSrc?: string;
  altText?: string;
  captionText?: string;
  tag?: string;
  className?: string;
  containerHeight?: string;
  aspectRatio?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  glareEffect?: boolean;
}

export default function TiltedCard({
  children,
  imageSrc,
  altText = "Card image",
  captionText,
  tag,
  className = "",
  containerHeight,
  aspectRatio = "4 / 3",
  rotateAmplitude = 12,
  scaleOnHover = 1.03,
  glareEffect = true
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const px = x / rect.width;
      const py = y / rect.height;

      const rotateX = (0.5 - py) * rotateAmplitude * 2;
      const rotateY = (px - 0.5) * rotateAmplitude * 2;

      setTransform(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
          2
        )}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`
      );

      if (glareEffect) {
        setGlarePosition({
          x: px * 100,
          y: py * 100,
          opacity: 0.4
        });
      }
    },
    [rotateAmplitude, scaleOnHover, glareEffect]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    if (glareEffect) {
      setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilted-card-wrap ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        height: containerHeight || undefined,
        aspectRatio: containerHeight ? undefined : aspectRatio
      }}
    >
      <div
        className="tilted-card-inner"
        style={{
          transform,
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"
        }}
      >
        {imageSrc ? (
          <div className="tilted-card-img-wrap">
            <img src={imageSrc} alt={altText} className="tilted-card-img" />
            <div className="tilted-card-tint" />
          </div>
        ) : null}

        {children}

        {tag && (
          <div className="tilted-card-tag">
            <span className="dot" />
            {tag}
          </div>
        )}

        {captionText && (
          <div className="tilted-card-caption">
            <span>{captionText}</span>
          </div>
        )}

        {glareEffect && (
          <div
            className="tilted-card-glare"
            style={{
              background: `radial-gradient(circle 350px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.25), transparent 70%)`,
              opacity: glarePosition.opacity,
              transition: "opacity 0.3s ease"
            }}
          />
        )}
      </div>

      <style jsx>{`
        .tilted-card-wrap {
          perspective: 1200px;
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          max-width: 100%;
        }
        .tilted-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 6px;
          overflow: hidden;
          background: #0f1722;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.6);
          transform-style: preserve-3d;
          will-change: transform;
        }
        .tilted-card-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .tilted-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.04);
          transition: transform 0.6s ease;
        }
        .tilted-card-wrap:hover .tilted-card-img {
          transform: scale(1.1);
        }
        .tilted-card-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 20, 32, 0.1) 0%,
            rgba(10, 20, 32, 0.7) 100%
          );
        }
        .tilted-card-tag {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 10;
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--white);
          background: rgba(10, 20, 32, 0.85);
          backdrop-filter: blur(8px);
          padding: 8px 14px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 3px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transform: translateZ(24px);
        }
        .tilted-card-tag .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
        }
        .tilted-card-caption {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          background: rgba(10, 20, 32, 0.8);
          backdrop-filter: blur(8px);
          padding: 6px 12px;
          border: 1px solid rgba(201, 138, 62, 0.35);
          border-radius: 3px;
          transform: translateZ(20px);
        }
        .tilted-card-glare {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 15;
        }
      `}</style>
    </div>
  );
}

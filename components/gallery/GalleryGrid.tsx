"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "@/data/images";

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
        );
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <>
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <button
            key={img.id}
            className="gallery-tile"
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image: ${img.alt}`}
          >
            {img.src ? (
              <img src={img.src} alt={img.alt} className="tile-img" />
            ) : null}
            <div className="tile-tint" />
            <div className="tile-info">
              <span className="tile-tag">View Item</span>
              <span className="tile-caption">{img.alt}</span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setActiveIndex(null)}
        >
          <button
            className="lb-close"
            aria-label="Close"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          <button
            className="lb-nav prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) =>
                i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
              );
            }}
          >
            ‹
          </button>

          <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
            {galleryImages[activeIndex].src && (
              <img
                src={galleryImages[activeIndex].src || ""}
                alt={galleryImages[activeIndex].alt}
                className="lb-img"
              />
            )}
            <div className="lb-caption-bar">
              <span className="lb-counter">
                {activeIndex + 1} / {galleryImages.length}
              </span>
              <span className="lb-tag">{galleryImages[activeIndex].alt}</span>
            </div>
          </div>

          <button
            className="lb-nav next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) =>
                i === null ? i : (i + 1) % galleryImages.length
              );
            }}
          >
            ›
          </button>
        </div>
      )}

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .gallery-tile {
          all: unset;
          cursor: pointer;
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #0f1722;
          border: 1px solid var(--line-dark);
          border-radius: 4px;
          display: flex;
          align-items: flex-end;
          padding: 20px;
          box-shadow: 0 8px 24px -8px rgba(10, 20, 32, 0.15);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .gallery-tile:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px -10px rgba(10, 20, 32, 0.25);
          border-color: rgba(201, 138, 62, 0.5);
        }
        .gallery-tile:nth-child(3n + 1) {
          grid-column: span 2;
        }
        .tile-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-tile:hover .tile-img {
          transform: scale(1.08);
        }
        .tile-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(10, 20, 32, 0.1) 0%, rgba(10, 20, 32, 0.8) 100%);
          transition: background 0.3s ease;
        }
        .gallery-tile:hover .tile-tint {
          background: linear-gradient(180deg, rgba(10, 20, 32, 0.05) 0%, rgba(10, 20, 32, 0.88) 100%);
        }
        .tile-info {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .tile-tag {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
        }
        .tile-caption {
          font-size: 14px;
          color: var(--white);
          font-weight: 500;
          line-height: 1.4;
        }
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(8, 14, 22, 0.95);
          backdrop-filter: blur(12px);
          z-index: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.25s ease;
        }
        .lb-stage {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          background: #0f1722;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8);
          display: flex;
          flex-direction: column;
        }
        .lb-img {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          display: block;
        }
        .lb-caption-bar {
          background: #0a1420;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .lb-counter {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 12px;
          color: var(--accent);
          font-weight: 600;
        }
        .lb-tag {
          font-size: 13.5px;
          color: var(--white);
        }
        .lb-close {
          all: unset;
          position: absolute;
          top: 24px;
          right: 32px;
          color: var(--white);
          font-size: 26px;
          cursor: pointer;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .lb-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.08);
        }
        .lb-nav {
          all: unset;
          color: var(--white);
          font-size: 48px;
          cursor: pointer;
          padding: 24px;
          user-select: none;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .lb-nav:hover {
          color: var(--accent);
          transform: scale(1.15);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-tile:nth-child(3n + 1) {
            grid-column: span 1;
          }
          .lb-nav {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

"use client";

import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { capabilities } from "@/data/capabilities";

export default function CapabilitiesList({ showDescription = false }: { showDescription?: boolean }) {
  return (
    <section className="capabilities" id="capabilities">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="label">Core Operations</span>
              </div>
              <h2>Our Capabilities</h2>
            </div>
            <p>
              Four integrated divisions, one point of accountability — from sourcing through fabrication
              and on-site project execution.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="cap-list">
            {capabilities.map((cap) => (
              <SpotlightCard
                key={cap.id}
                id={cap.id}
                className="cap-card"
                spotlightColor="rgba(201, 138, 62, 0.28)"
              >
                <div className="cap-row">
                  <div className="cap-header-mobile">
                    <span className="cnum">{cap.number}</span>
                    <h3 className="mobile-title">{cap.title}</h3>
                    <span className="mobile-arrow" aria-hidden="true">→</span>
                  </div>

                  {cap.image && (
                    <div className="cap-thumb">
                      <img src={cap.image} alt={cap.title} />
                      <div className="thumb-overlay" />
                    </div>
                  )}

                  <div className="cap-content">
                    <h3 className="desktop-title">{cap.title}</h3>
                    <p>{showDescription ? cap.description : cap.summary}</p>
                  </div>

                  <span className="arrow desktop-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .capabilities {
          background: #f0efe9;
          position: relative;
        }
        .cap-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        :global(.cap-card) {
          background: var(--white);
          border: 1px solid var(--line-dark);
          border-radius: 6px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }
        :global(.cap-card:hover) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -10px rgba(10, 20, 32, 0.12);
          border-color: rgba(201, 138, 62, 0.4);
        }
        .cap-row {
          display: grid;
          grid-template-columns: 50px 160px 1fr 40px;
          align-items: center;
          gap: 28px;
          padding: 22px 28px;
          position: relative;
          z-index: 1;
        }
        .cap-header-mobile {
          display: none;
        }
        .cnum {
          font-family: var(--font-space-grotesk), sans-serif;
          color: var(--accent);
          font-size: 15px;
          font-weight: 700;
        }
        .cap-thumb {
          width: 160px;
          height: 100px;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          background: var(--navy);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        .cap-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        :global(.cap-card:hover) .cap-thumb img {
          transform: scale(1.08);
        }
        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(10, 20, 32, 0.35) 100%);
        }
        .desktop-title {
          font-size: 21px;
          color: var(--navy);
          margin-bottom: 6px;
          transition: color 0.3s ease;
        }
        :global(.cap-card:hover) .desktop-title {
          color: #a86c26;
        }
        .cap-content p {
          color: var(--slate);
          font-size: 14.5px;
          line-height: 1.6;
        }
        .desktop-arrow {
          justify-self: end;
          font-size: 22px;
          color: var(--navy);
          transition: transform 0.3s ease, color 0.3s ease;
        }
        :global(.cap-card:hover) .desktop-arrow {
          transform: translateX(8px);
          color: var(--accent);
        }

        /* Responsive Mobile & Tablet Layout */
        @media (max-width: 860px) {
          .cap-row {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
            padding: 20px 18px;
          }
          .cnum {
            display: none;
          }
          .desktop-title,
          .desktop-arrow {
            display: none;
          }
          .cap-header-mobile {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .cap-header-mobile .cnum {
            display: inline-block;
            font-size: 14px;
          }
          .mobile-title {
            font-size: 18px;
            color: var(--navy);
            flex-grow: 1;
            margin: 0;
            font-weight: 600;
          }
          .mobile-arrow {
            font-size: 20px;
            color: var(--accent);
          }
          .cap-thumb {
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 9;
            max-height: 220px;
          }
          .cap-content p {
            font-size: 14px;
            line-height: 1.55;
            color: var(--slate);
          }
        }
      `}</style>
    </section>
  );
}

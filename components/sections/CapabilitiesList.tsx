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
                  <span className="cnum">{cap.number}</span>

                  {cap.image && (
                    <div className="cap-thumb">
                      <img src={cap.image} alt={cap.title} />
                      <div className="thumb-overlay" />
                    </div>
                  )}

                  <div className="cap-content">
                    <h3>{cap.title}</h3>
                    <p>{showDescription ? cap.description : cap.summary}</p>
                  </div>

                  <span className="arrow" aria-hidden="true">
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
          border-radius: 4px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        :global(.cap-card:hover) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -10px rgba(10, 20, 32, 0.12);
          border-color: rgba(201, 138, 62, 0.4);
        }
        .cap-row {
          display: grid;
          grid-template-columns: 60px 140px 1.4fr 50px;
          align-items: center;
          gap: 28px;
          padding: 24px 28px;
          position: relative;
          z-index: 1;
        }
        .cnum {
          font-family: var(--font-space-grotesk), sans-serif;
          color: var(--accent);
          font-size: 15px;
          font-weight: 700;
        }
        .cap-thumb {
          width: 140px;
          height: 85px;
          border-radius: 3px;
          overflow: hidden;
          position: relative;
          background: var(--navy);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }
        .cap-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        :global(.cap-card:hover) .cap-thumb img {
          transform: scale(1.08);
        }
        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(10, 20, 32, 0.4) 100%);
        }
        .cap-content h3 {
          font-size: 21px;
          color: var(--navy);
          margin-bottom: 6px;
          transition: color 0.3s ease;
        }
        :global(.cap-card:hover) .cap-content h3 {
          color: #a86c26;
        }
        .cap-content p {
          color: var(--slate);
          font-size: 14.5px;
          line-height: 1.6;
        }
        .arrow {
          justify-self: end;
          font-size: 22px;
          color: var(--navy);
          transition: transform 0.3s ease, color 0.3s ease;
        }
        :global(.cap-card:hover) .arrow {
          transform: translateX(8px);
          color: var(--accent);
        }
        @media (max-width: 1024px) {
          .cap-row {
            grid-template-columns: 50px 1fr 40px;
            grid-template-areas:
              "n t a"
              "img d d";
            row-gap: 16px;
          }
          .cnum {
            grid-area: n;
          }
          .cap-content h3 {
            grid-area: t;
            margin-bottom: 0;
          }
          .arrow {
            grid-area: a;
          }
          .cap-thumb {
            grid-area: img;
            width: 100%;
            height: 120px;
          }
          .cap-content p {
            grid-area: d;
          }
        }
      `}</style>
    </section>
  );
}

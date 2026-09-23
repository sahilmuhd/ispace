"use client";

import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { locations } from "@/data/locations";

export default function RegionalGrid() {
  return (
    <section className="regional">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="label">Gulf Network</span>
              </div>
              <h2>Regional Presence</h2>
            </div>
            <p>Serving enterprise and defense customers across the Gulf from an established Kuwait operational base.</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="reg-grid">
            {locations.map((l) => (
              <SpotlightCard
                key={l.id}
                className="reg-card"
                spotlightColor="rgba(201, 138, 62, 0.25)"
              >
                <div className="rc-label">{l.role}</div>
                <h3>{l.country}</h3>
                <p>{l.note}</p>
                <span className="rc-arrow">→</span>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .regional {
          background: #ebe9e3;
        }
        .reg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        :global(.reg-card) {
          background: var(--white);
          padding: 36px 28px;
          border: 1px solid var(--line-dark);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 220px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        :global(.reg-card:hover) {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -10px rgba(10, 20, 32, 0.15);
          border-color: rgba(201, 138, 62, 0.4);
        }
        .rc-label {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .reg-card h3 {
          font-size: 24px;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .reg-card p {
          font-size: 14px;
          color: var(--slate);
          line-height: 1.6;
          flex-grow: 1;
        }
        .rc-arrow {
          margin-top: 20px;
          font-size: 18px;
          color: var(--slate);
          transition: transform 0.3s ease, color 0.3s ease;
        }
        :global(.reg-card:hover) .rc-arrow {
          transform: translateX(6px);
          color: var(--accent);
        }
        @media (max-width: 1024px) {
          .reg-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .reg-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

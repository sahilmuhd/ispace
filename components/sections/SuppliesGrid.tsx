"use client";

import Reveal from "@/components/ui/Reveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { supplyCategories } from "@/data/supplies";

export default function SuppliesGrid({ showDescription = false }: { showDescription?: boolean }) {
  return (
    <section className="supplies" id="supplies">
      <div className="wrap">
        <Reveal>
          <div className="section-head on-dark">
            <div>
              <div className="eyebrow">
                <span className="label">Procurement Portfolio</span>
              </div>
              <h2>What We Supply</h2>
            </div>
            <p>
              A single, accredited procurement partner across the 12 mission-critical categories that keep
              industrial and government operations running.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="wrap">
        <Reveal>
          <div className="sup-grid">
            {supplyCategories.map((s) => (
              <SpotlightCard
                key={s.id}
                id={s.id}
                className="sup-card"
                spotlightColor="rgba(201, 138, 62, 0.3)"
              >
                <div className="sup-card-top">
                  <span className="si">{s.number}</span>
                  <span className="icon-indicator">✦</span>
                </div>
                <div className="sup-card-bottom">
                  <h4>{s.title}</h4>
                  <p>{s.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .supplies {
          background: #09121c;
          color: var(--white);
          position: relative;
          overflow: hidden;
        }
        .supplies::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 10% 50%, rgba(201, 138, 62, 0.05), transparent 40%),
            radial-gradient(circle at 90% 70%, rgba(30, 60, 95, 0.2), transparent 50%);
          pointer-events: none;
        }
        .sup-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        :global(.sup-card) {
          background: #0d1b2a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          padding: 28px 24px;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        :global(.sup-card:hover) {
          transform: translateY(-3px);
          border-color: rgba(201, 138, 62, 0.45);
          box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.6);
        }
        .sup-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .si {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 0.14em;
          font-weight: 700;
        }
        .icon-indicator {
          color: rgba(201, 138, 62, 0.4);
          font-size: 11px;
          transition: transform 0.3s ease, color 0.3s ease;
        }
        :global(.sup-card:hover) .icon-indicator {
          transform: rotate(45deg);
          color: var(--accent);
        }
        .sup-card-bottom h4 {
          font-size: 18px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 8px;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        :global(.sup-card:hover) .sup-card-bottom h4 {
          color: var(--accent);
          transform: translateX(2px);
        }
        .sup-card-bottom p {
          font-size: 13.5px;
          color: var(--steel);
          line-height: 1.6;
        }
        @media (max-width: 1200px) {
          .sup-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 900px) {
          .sup-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .sup-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

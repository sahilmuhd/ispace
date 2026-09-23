"use client";

import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <span className="label">Track Record</span>
              </div>
              <h2>Selected Projects</h2>
            </div>
            <p>
              A representative view of the scope our divisions execute across structural steel fabrication,
              infrastructure development, and strategic defense procurement.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="proj-grid">
            {projects.map((p) => (
              <div className={`proj-card ${p.size === "large" ? "big" : ""}`} key={p.id}>
                {p.image && (
                  <div className="proj-bg-wrap">
                    <img src={p.image} alt={p.title} className="proj-bg" />
                    <div className="proj-overlay" />
                  </div>
                )}
                <div className="proj-inner">
                  <div className="ptag">{p.category}</div>
                  <h3>{p.title}</h3>
                  {p.scope && <p className="pscope">{p.scope}</p>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .projects {
          background: #f7f6f2;
          position: relative;
        }
        .proj-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          grid-template-rows: auto auto;
          gap: 24px;
        }
        .proj-card {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          min-height: 340px;
          display: flex;
          align-items: flex-end;
          padding: 34px;
          border: 1px solid var(--line-dark);
          box-shadow: 0 10px 30px -10px rgba(10, 20, 32, 0.12);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }
        .proj-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(10, 20, 32, 0.22);
        }
        .proj-card.big {
          grid-row: 1 / span 2;
          min-height: 480px;
        }
        .proj-bg-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .proj-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .proj-card:hover .proj-bg {
          transform: scale(1.08);
        }
        .proj-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 20, 32, 0.2) 0%,
            rgba(10, 20, 32, 0.7) 60%,
            rgba(10, 20, 32, 0.95) 100%
          );
          transition: opacity 0.3s ease;
        }
        .proj-inner {
          position: relative;
          z-index: 2;
          color: var(--white);
          max-width: 500px;
        }
        .ptag {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: 10px;
          display: inline-block;
          background: rgba(10, 20, 32, 0.7);
          backdrop-filter: blur(4px);
          padding: 4px 10px;
          border-radius: 2px;
          border: 1px solid rgba(201, 138, 62, 0.3);
        }
        .proj-inner h3 {
          font-size: 22px;
          color: var(--white);
          margin-bottom: 8px;
          line-height: 1.25;
        }
        .proj-card.big .proj-inner h3 {
          font-size: 26px;
        }
        .pscope {
          font-size: 13.5px;
          color: var(--steel);
          line-height: 1.5;
        }
        @media (max-width: 1024px) {
          .proj-grid {
            grid-template-columns: 1fr;
          }
          .proj-card.big {
            grid-row: auto;
            min-height: 380px;
          }
        }
      `}</style>
    </section>
  );
}

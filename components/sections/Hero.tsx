"use client";

import Link from "next/link";
import ParticleBackground from "@/components/ui/ParticleBackground";
import ShinyText from "@/components/ui/ShinyText";
import TiltedCard from "@/components/ui/TiltedCard";
import { images } from "@/data/images";

export default function Hero() {
  return (
    <section className="hero">
      {/* React Bits Ambient Canvas Particle Background */}
      <ParticleBackground particleCount={40} />

      <div className="wrap hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <ShinyText speed={5} className="badge-text">
              Kuwait · Qatar · Iraq · UAE
            </ShinyText>
          </div>

          <h1>
            Global Procurement
            <br />
            <em>
              <ShinyText speed={3.5}>&amp; Industrial Solutions</ShinyText>
            </em>
          </h1>

          <p className="lede">
            Reliable procurement, industrial services, equipment leasing and precision metal
            fabrication for demanding commercial, government and industrial requirements across the
            Gulf. We deliver what we promise.
          </p>

          <div className="hero-ctas">
            <Link href="/request-a-quote" className="btn solid hero-btn">
              Request a Quote
            </Link>
            <Link href="/capabilities" className="link-arrow on-dark">
              Explore Capabilities →
            </Link>
          </div>

          <div className="hero-quick-stats">
            <div className="stat-pill">
              <span className="stat-val">2,000+</span>
              <span className="stat-lbl">m² Facility</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-pill">
              <span className="stat-val">100%</span>
              <span className="stat-lbl">In-House QA</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-pill">
              <span className="stat-val">DoD</span>
              <span className="stat-lbl">Registered</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-col">
          {/* React Bits 3D Tilted Card with Glare, Floating Badge & Aspect Ratio */}
          <div className="hero-visual-frame">
            <TiltedCard
              imageSrc={images.heroFacility.src || undefined}
              altText={images.heroFacility.alt}
              tag="Amghara Industrial Area — Steel Factory"
              captionText="CNC Laser & Steel Works"
              aspectRatio="16 / 12"
              rotateAmplitude={12}
              scaleOnHover={1.03}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 75% 30%, #15273e 0%, var(--navy) 60%, #070d14 100%);
          color: var(--white);
          overflow: hidden;
          padding: 120px 0 60px;
          box-sizing: border-box;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 48px;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 5;
        }
        .hero-content {
          max-width: 600px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px;
          background: rgba(201, 138, 62, 0.12);
          border: 1px solid rgba(201, 138, 62, 0.3);
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
        }
        .badge-text {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .hero h1 {
          font-size: clamp(2.3rem, 3.8vw, 3.9rem);
          color: var(--white);
          margin-bottom: 20px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .hero h1 em {
          font-style: normal;
          display: block;
        }
        .hero .lede {
          font-size: 16px;
          line-height: 1.7;
          color: var(--steel);
          max-width: 520px;
          margin-bottom: 30px;
        }
        .hero-ctas {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 32px;
        }
        .hero-btn {
          box-shadow: 0 8px 24px -4px rgba(201, 138, 62, 0.4);
        }
        .hero-quick-stats {
          display: flex;
          align-items: center;
          gap: 22px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .stat-pill {
          display: flex;
          flex-direction: column;
        }
        .stat-val {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--white);
        }
        .stat-lbl {
          font-size: 10.5px;
          color: var(--steel);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }
        .stat-sep {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.12);
        }
        .hero-visual-col {
          position: relative;
          min-width: 0;
          width: 100%;
        }
        .hero-visual-frame {
          width: 100%;
          max-width: 540px;
          margin-left: auto;
        }
        @media (max-width: 1024px) {
          .hero {
            padding: 120px 0 60px;
            min-height: auto;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-content {
            max-width: 100%;
          }
          .hero-visual-frame {
            margin-left: 0;
            max-width: 100%;
          }
          .hero-quick-stats {
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}

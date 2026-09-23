"use client";

import ParticleBackground from "@/components/ui/ParticleBackground";
import ShinyText from "@/components/ui/ShinyText";

export default function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <ParticleBackground particleCount={30} />
      <div className="wrap page-hero-wrap">
        <div className="eyebrow">
          <ShinyText speed={5} className="label">
            {eyebrow}
          </ShinyText>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <style jsx>{`
        .page-hero {
          position: relative;
          background: linear-gradient(160deg, #09121c 0%, #0d1b2a 55%, #070d14 100%);
          color: var(--white);
          padding: 190px 0 90px;
          overflow: hidden;
        }
        .page-hero-wrap {
          position: relative;
          z-index: 2;
        }
        .page-hero h1 {
          font-size: clamp(2.4rem, 4.2vw, 3.6rem);
          margin-bottom: 20px;
          line-height: 1.12;
        }
        .page-hero p {
          color: var(--steel);
          font-size: 16.5px;
          line-height: 1.75;
          max-width: 650px;
        }
        @media (max-width: 768px) {
          .page-hero {
            padding: 150px 0 70px;
          }
        }
      `}</style>
    </section>
  );
}

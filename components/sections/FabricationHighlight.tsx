"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import TiltedCard from "@/components/ui/TiltedCard";
import BorderGlow from "@/components/ui/BorderGlow";
import ShinyText from "@/components/ui/ShinyText";
import { company } from "@/data/company";
import { images } from "@/data/images";

export default function FabricationHighlight({ linkToFullPage = true }: { linkToFullPage?: boolean }) {
  return (
    <section className="fab" id="fabrication">
      <div className="wrap fab-grid">
        <Reveal className="fab-visual-col">
          <BorderGlow borderRadius="6px" glowColor="rgba(201, 138, 62, 0.7)">
            <TiltedCard
              imageSrc={images.fabricationFactory.src || undefined}
              altText={images.fabricationFactory.alt}
              tag="Amghara Industrial Area — Steel Factory"
              captionText="Heavy Steel & Laser Works"
              containerHeight="520px"
              rotateAmplitude={12}
            />
          </BorderGlow>
        </Reveal>

        <Reveal className="fab-copy-col">
          <div className="fab-copy">
            <div className="eyebrow">
              <span className="label">In-House Manufacturing</span>
            </div>
            <h2>
              Engineered for demanding{" "}
              <em>
                <ShinyText speed={4}>industrial standards.</ShinyText>
              </em>
            </h2>
            <p>
              Our metal fabrication factory is located in the {company.fabricationFacility.location} on a site
              of approximately {company.fabricationFacility.sizeSqm.toLocaleString()} square metres, equipped
              for heavy structural steel works, CNC cutting, automated bending, and certified welding at scale.
            </p>

            <div className="fab-products">
              {company.fabricationFacility.products.map((p) => (
                <div key={p} className="prod-item">
                  <span className="bullet">✦</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>

            {linkToFullPage && (
              <div className="fab-cta">
                <Link href="/metal-fabrication" className="btn solid">
                  Explore Metal Fabrication Facility →
                </Link>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .fab {
          background: #0d1520;
          color: var(--white);
          position: relative;
          padding: 130px 0;
          overflow: hidden;
        }
        .fab::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(circle at 70% 50%, rgba(201, 138, 62, 0.08), transparent 70%);
          pointer-events: none;
        }
        .fab-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .fab-visual-col {
          min-width: 0;
        }
        .fab-copy {
          padding-left: 20px;
        }
        .fab-copy h2 {
          font-size: clamp(2.2rem, 3.4vw, 2.9rem);
          margin-bottom: 24px;
          line-height: 1.15;
        }
        .fab-copy h2 em {
          font-style: normal;
          display: block;
        }
        .fab-copy p {
          color: var(--steel);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 34px;
        }
        .fab-products {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px 24px;
          margin-bottom: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          padding-top: 28px;
        }
        .prod-item {
          font-size: 14px;
          color: var(--off-white);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .prod-item .bullet {
          color: var(--accent);
          font-size: 10px;
        }
        .fab-cta {
          display: flex;
        }
        @media (max-width: 1024px) {
          .fab-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .fab-copy {
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}

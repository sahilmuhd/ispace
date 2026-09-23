"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import TiltedCard from "@/components/ui/TiltedCard";
import CountUp from "@/components/ui/CountUp";
import { company } from "@/data/company";
import { images } from "@/data/images";

export default function AboutSummary() {
  return (
    <section className="about">
      <div className="wrap about-grid">
        <Reveal>
          <div className="about-visual-wrap">
            <TiltedCard
              imageSrc={images.aboutFacility.src || undefined}
              altText={images.aboutFacility.alt}
              tag="Kuwait Operations & Warehousing"
              captionText="Global Logistics Hub"
              containerHeight="480px"
              rotateAmplitude={10}
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="about-copy">
            <div className="eyebrow">
              <span className="label">About iSPACE</span>
            </div>
            <h2 className="about-h2">
              Built around
              <br />
              uncompromising reliability.
            </h2>
            <p>
              {company.legalName} — <strong>{company.brandName}</strong> — was established in {company.hqCountry} in{" "}
              {company.established} as a procuring company providing supplies and services through dedicated
              divisions. As a registered DoD contractor, we are held to procurement and delivery standards
              that meet demanding government and commercial requirements alike.
            </p>
            <p>
              We operate across procurement &amp; supplies, industrial services, equipment leasing and metal
              fabrication, backed by an in-house factory and an operational network reaching {company.countries.join(", ")}.
            </p>
            <Link href="/about" className="link-arrow">
              About iSPACE →
            </Link>

            <div className="facts">
              <div className="fact">
                <div className="num">
                  <CountUp to={Number(company.established) || 2008} from={1998} duration={1.5} />
                </div>
                <div className="cap">Established</div>
              </div>
              <div className="fact">
                <div className="num">
                  <CountUp to={company.countries.length} from={1} duration={1.2} suffix=" Hubs" />
                </div>
                <div className="cap">Countries of Operation</div>
              </div>
              <div className="fact">
                <div className="num">
                  <CountUp to={company.fabricationFacility.sizeSqm} from={500} duration={1.8} separator="," suffix=" m²" />
                </div>
                <div className="cap">Fabrication Facility</div>
              </div>
              <div className="fact">
                <div className="num">{company.duns}</div>
                <div className="cap">DUNS Registered</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        .about {
          background: var(--white);
          position: relative;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 70px;
          align-items: center;
        }
        .about-visual-wrap {
          min-width: 0;
        }
        .about-h2 {
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          color: var(--navy);
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .about p {
          color: var(--slate);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 22px;
          max-width: 540px;
        }
        .facts {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          border-top: 1px solid var(--line-dark);
          padding-top: 32px;
          margin-top: 32px;
        }
        .fact .num {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--navy);
        }
        .fact .cap {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--slate);
          margin-top: 6px;
        }
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}

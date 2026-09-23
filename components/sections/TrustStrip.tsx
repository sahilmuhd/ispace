"use client";

import { company } from "@/data/company";
import CountUp from "@/components/ui/CountUp";

export default function TrustStrip() {
  return (
    <div className="trust">
      <div className="wrap trust-inner">
        <div className="item stat-box">
          <span className="dot" />
          <span>
            EST.{" "}
            <b>
              <CountUp to={Number(company.established) || 2008} from={1995} duration={1.5} />
            </b>
          </span>
        </div>

        <div className="item countries">
          {company.countries.map((c, i) => (
            <span key={c} className="country-tag">
              <span>{c.toUpperCase()}</span>
              {i < company.countries.length - 1 && <span className="divider">/</span>}
            </span>
          ))}
        </div>

        <div className="item cert-badge">
          <span className="shield">★</span>
          <span>DoD CONTRACTOR &amp; PROCURING COMPANY</span>
        </div>
      </div>

      <style jsx>{`
        .trust {
          background: #08101a;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 20px 0;
          position: relative;
          z-index: 10;
        }
        .trust-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px 36px;
        }
        .trust .item {
          font-family: var(--font-space-grotesk), sans-serif;
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--steel);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .trust .item b {
          color: var(--white);
          font-weight: 700;
        }
        .stat-box .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
        }
        .countries {
          gap: 12px;
        }
        .country-tag {
          transition: color 0.25s ease;
        }
        .country-tag:hover {
          color: var(--white);
        }
        .divider {
          color: rgba(255, 255, 255, 0.15);
          margin-left: 12px;
        }
        .cert-badge {
          background: rgba(201, 138, 62, 0.1);
          padding: 6px 14px;
          border-radius: 3px;
          border: 1px solid rgba(201, 138, 62, 0.25);
          color: var(--off-white);
        }
        .cert-badge .shield {
          color: var(--accent);
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}

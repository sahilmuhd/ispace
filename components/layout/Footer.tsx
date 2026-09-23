import Link from "next/link";
import { company } from "@/data/company";
import { primaryNav } from "@/data/navigation";
import { locations } from "@/data/locations";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="logo">
              i<span>SPACE</span>
            </span>
            <p>
              {company.legalName} — Global procurement, industrial services, equipment leasing and metal
              fabrication since {company.established}.
            </p>
          </div>
          <div className="foot-col">
            <h4>Navigation</h4>
            {primaryNav.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="foot-col">
            <h4>Locations</h4>
            {locations.map((l) => (
              <div key={l.id}>{l.country}</div>
            ))}
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <Link href="/request-a-quote">Request a Quote</Link>
            <div>DUNS: {company.duns}</div>
            <div>NCAGE: {company.ncage}</div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {company.legalName}
          </span>
          <span>
            {company.brandName} — {company.tagline}
          </span>
        </div>
      </div>

      <style>{`
        footer { background: var(--navy); color: var(--steel); padding: 90px 0 40px; }
        .foot-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 50px; padding-bottom: 60px; border-bottom: 1px solid var(--line); }
        .foot-brand .logo { margin-bottom: 16px; display: inline-block; }
        .foot-brand p { font-size: 13.5px; line-height: 1.8; max-width: 280px; color: var(--steel); }
        .foot-col h4 { font-family: var(--font-space-grotesk), sans-serif; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--white); margin-bottom: 20px; }
        .foot-col a, .foot-col div { display: block; font-size: 14px; color: var(--steel); margin-bottom: 12px; }
        .foot-col a:hover { color: var(--accent); }
        .foot-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 28px; font-size: 12px; flex-wrap: wrap; gap: 12px; color: var(--slate); }
        @media (max-width: 768px) { .foot-grid { grid-template-columns: 1fr 1fr; gap: 36px 20px; } }
        @media (max-width: 480px) { .foot-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}

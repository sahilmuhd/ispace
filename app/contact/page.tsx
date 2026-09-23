import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import PageHero from "@/components/sections/PageHero";
import RegionalGrid from "@/components/sections/RegionalGrid";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${company.brandName}. DUNS: ${company.duns}. NCAGE: ${company.ncage}.`,
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="For procurement, industrial services, equipment leasing or metal fabrication requirements, request a quote and our team will follow up."
      />
      <section className="tight">
        <div className="wrap contact-block">
          <div>
            <h2 className="contact-h2">Company details</h2>
            <dl>
              <div><dt>Legal name</dt><dd>{company.legalName}</dd></div>
              <div><dt>DUNS</dt><dd>{company.duns}</dd></div>
              <div><dt>NCAGE</dt><dd>{company.ncage}</dd></div>
              <div><dt>Countries</dt><dd>{company.countries.join(" · ")}</dd></div>
            </dl>
          </div>
          <Link href="/request-a-quote" className="btn solid">Request a Quote</Link>
        </div>
        <style>{`
          .contact-block { max-width: 640px; }
          .contact-h2 { font-size: 22px; color: var(--navy); margin-bottom: 24px; }
          dl { border-top: 1px solid var(--line-dark); margin-bottom: 34px; }
          dl > div { display: flex; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid var(--line-dark); font-size: 14.5px; }
          dt { color: var(--slate); } dd { color: var(--navy); font-weight: 500; margin: 0; }
        `}</style>
      </section>
      <RegionalGrid />
    </>
  );
}

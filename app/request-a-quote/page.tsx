import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import PageHero from "@/components/sections/PageHero";
import RFQForm from "@/components/forms/RFQForm";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description: "Submit a procurement, industrial services, equipment leasing or metal fabrication requirement to iSPACE.",
  path: "/request-a-quote"
});

export default function RequestQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you need delivered."
        description="Share your requirement and a member of our procurement team will respond with next steps."
      />
      <section className="tight">
        <div className="wrap rfq-grid">
          <div className="rfq-side">
            <div className="rfq-info">
              DUNS #: {company.duns}
              <br />
              NCAGE: {company.ncage}
              <br />
              {company.countries.join(" · ")}
            </div>
          </div>
          <RFQForm />
        </div>
        <style>{`
          .rfq-grid { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: 60px; align-items: start; }
          .rfq-info { border-top: 1px solid var(--line-dark); padding-top: 20px; font-size: 14px; color: var(--slate); line-height: 2; }
          @media (max-width: 1024px) { .rfq-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>
    </>
  );
}

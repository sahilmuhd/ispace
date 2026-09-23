import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { divisions } from "@/data/divisions";

export const metadata: Metadata = buildMetadata({
  title: "Divisions",
  description: "iSPACE divisions: Metal Fabrication and Restaurants.",
  path: "/divisions"
});

export default function DivisionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Divisions"
        title="Dedicated divisions, integrated delivery."
        description="Each iSPACE division operates with its own specialists, while sharing one standard of accountability."
      />
      <section className="tight">
        <div className="wrap">
          <Reveal>
            <div className="div-list">
              {divisions.map((d) => (
                <Link href={d.href} className="div-row" key={d.id}>
                  <h3>{d.title}</h3>
                  <p>{d.summary}</p>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          .div-list { border-top: 1px solid var(--line-dark); }
          .div-row {
            display: grid; grid-template-columns: 1fr 2fr 60px; align-items: center; gap: 30px;
            padding: 42px 0; border-bottom: 1px solid var(--line-dark); transition: background .3s ease;
          }
          .div-row:hover { background: rgba(10,20,32,0.03); }
          .div-row h3 { font-size: 24px; color: var(--navy); }
          .div-row p { color: var(--slate); font-size: 15px; line-height: 1.6; }
          .div-row .arrow { justify-self: end; font-size: 22px; color: var(--navy); transition: transform .3s ease; }
          .div-row:hover .arrow { transform: translateX(6px); color: var(--accent); }
          @media (max-width: 768px) { .div-row { grid-template-columns: 1fr 40px; } .div-row p { grid-column: 1 / -1; } }
        `}</style>
      </section>
    </>
  );
}

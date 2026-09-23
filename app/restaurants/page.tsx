import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import PlaceholderPanel from "@/components/ui/PlaceholderPanel";
import { images } from "@/data/images";

export const metadata: Metadata = buildMetadata({
  title: "Restaurants",
  description: "iSPACE Restaurants division.",
  path: "/restaurants"
});

export default function RestaurantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Divisions"
        title="Restaurants."
        description="A dedicated division within the iSPACE group of businesses."
      />
      <section className="tight">
        <div className="wrap restaurants-grid">
          <PlaceholderPanel image={images.gallerySupplies1} className="restaurants-visual" />
          <p>
            Detailed information for the Restaurants division — concepts, locations and current operations —
            will be added here once confirmed for publication. This page is structured and ready to receive
            that content without further development work.
          </p>
        </div>
        <style>{`
          .restaurants-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
          .restaurants-visual { aspect-ratio: 4 / 3; }
          .restaurants-grid p { color: var(--slate); font-size: 16px; line-height: 1.8; }
          @media (max-width: 1024px) { .restaurants-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>
    </>
  );
}

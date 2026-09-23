import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description: "iSPACE image gallery: fabrication, construction and industrial supply work.",
  path: "/gallery"
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Gallery."
        description="A visual record of iSPACE fabrication, construction and supply work. Populate /data/images.ts with production photography to replace the placeholders below."
      />
      <section className="tight">
        <div className="wrap">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}

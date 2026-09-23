import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import PageHero from "@/components/sections/PageHero";
import FabricationHighlight from "@/components/sections/FabricationHighlight";

export const metadata: Metadata = buildMetadata({
  title: "Metal Fabrication",
  description: `iSPACE metal fabrication factory in the ${company.fabricationFacility.location}: ${company.fabricationFacility.products.join(", ")}.`,
  path: "/metal-fabrication"
});

export default function MetalFabricationPage() {
  return (
    <>
      <PageHero
        eyebrow="Metal Fabrication"
        title="Engineered for industrial demands."
        description={`Our factory in the ${company.fabricationFacility.location} spans approximately ${company.fabricationFacility.sizeSqm.toLocaleString()} square metres, equipped with machinery for steel works at scale.`}
      />
      <FabricationHighlight linkToFullPage={false} />
    </>
  );
}

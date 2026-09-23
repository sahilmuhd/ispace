import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import SuppliesGrid from "@/components/sections/SuppliesGrid";

export const metadata: Metadata = buildMetadata({
  title: "Supplies",
  description:
    "iSPACE supply categories: electrical, plumbing, construction, HVAC, IT, electronics, furniture, hardware, medical, safety, communication and prefabricated structures.",
  path: "/supplies"
});

export default function SuppliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Supplies"
        title="What we supply."
        description="A single procurement partner across the categories that keep industrial and government operations running."
      />
      <SuppliesGrid showDescription />
    </>
  );
}

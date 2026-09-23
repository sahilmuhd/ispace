import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import CapabilitiesList from "@/components/sections/CapabilitiesList";
import ProcessTimeline from "@/components/sections/ProcessTimeline";

export const metadata: Metadata = buildMetadata({
  title: "Capabilities",
  description:
    "iSPACE capabilities: procurement & supplies, industrial services, equipment leasing and metal fabrication.",
  path: "/capabilities"
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Four divisions. One point of accountability."
        description="From sourcing through fabrication and after-delivery support, iSPACE covers the full scope of industrial procurement."
      />
      <CapabilitiesList showDescription />
      <ProcessTimeline />
    </>
  );
}

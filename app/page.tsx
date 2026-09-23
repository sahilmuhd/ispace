import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import AboutSummary from "@/components/sections/AboutSummary";
import CapabilitiesList from "@/components/sections/CapabilitiesList";
import SuppliesGrid from "@/components/sections/SuppliesGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import FabricationHighlight from "@/components/sections/FabricationHighlight";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import RegionalGrid from "@/components/sections/RegionalGrid";
import WhyList from "@/components/sections/WhyList";

export const metadata: Metadata = buildMetadata({
  title: "Global Procurement & Industrial Solutions",
  description: company.descriptionShort,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSummary />
      <CapabilitiesList />
      <SuppliesGrid />
      <ProcessTimeline />
      <FabricationHighlight />
      <ProjectsGrid />
      <RegionalGrid />
      <WhyList />
    </>
  );
}

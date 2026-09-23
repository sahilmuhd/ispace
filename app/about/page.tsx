import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import PageHero from "@/components/sections/PageHero";
import AboutSummary from "@/components/sections/AboutSummary";
import WhyList from "@/components/sections/WhyList";
import RegionalGrid from "@/components/sections/RegionalGrid";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: `About ${company.brandName}: ${company.descriptionShort}`,
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built around reliability."
        description={company.descriptionShort}
      />
      <AboutSummary />
      <WhyList />
      <RegionalGrid />
    </>
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageHero from "@/components/sections/PageHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "Selected iSPACE projects across procurement, construction and metal fabrication.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Selected projects."
        description="A representative view of the scope our divisions cover across the region."
      />
      <ProjectsGrid />
    </>
  );
}

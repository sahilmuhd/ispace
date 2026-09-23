export interface Project {
  id: string;
  category: string;
  title: string;
  size: "large" | "small";
  isPlaceholder: boolean;
  image?: string;
  scope?: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    category: "Metal Fabrication",
    title: "Structural Steel & High-Tolerance Fit-Out",
    size: "large",
    isPlaceholder: false,
    image: "/images/proj-steel.jpg",
    scope: "2,000 sqm Amghara fabrication facility fabrication & delivery"
  },
  {
    id: "p2",
    category: "Construction & Infrastructure",
    title: "Multi-Tier Steel & Concrete Superstructure",
    size: "small",
    isPlaceholder: false,
    image: "/images/proj-construction.jpg",
    scope: "Industrial framing, foundation civil works, and gantry integration"
  },
  {
    id: "p3",
    category: "Procurement & Supply Chain",
    title: "Mission-Critical Government & Defense Supply Program",
    size: "small",
    isPlaceholder: false,
    image: "/images/proj-procurement.jpg",
    scope: "Strategic multi-category procurement, logistics, and delivery across Gulf sites"
  }
];

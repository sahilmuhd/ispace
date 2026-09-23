// Centralized image configuration for iSPACE.
// Production photography and high-resolution industrial imagery.

export interface SiteImage {
  id: string;
  src: string | null;
  alt: string;
  credit?: string;
}

export const images: Record<string, SiteImage> = {
  heroFacility: {
    id: "heroFacility",
    src: "/images/hero-facility.jpg",
    alt: "iSPACE metal fabrication facility, Amghara Industrial Area, Kuwait"
  },
  aboutFacility: {
    id: "aboutFacility",
    src: "/images/about-facility.jpg",
    alt: "iSPACE global logistics hub and industrial warehousing"
  },
  fabricationFactory: {
    id: "fabricationFactory",
    src: "/images/fabrication-factory.jpg",
    alt: "Steel fabrication and welding works at Amghara Industrial Area facility"
  },
  galleryFabrication1: {
    id: "galleryFabrication1",
    src: "/images/gallery-lockers.jpg",
    alt: "Fabricated industrial steel lockers"
  },
  galleryFabrication2: {
    id: "galleryFabrication2",
    src: "/images/gallery-doors.jpg",
    alt: "Fabricated heavy-duty blast & fire-rated steel security doors"
  },
  galleryConstruction1: {
    id: "galleryConstruction1",
    src: "/images/gallery-construction-1.jpg",
    alt: "Structural steel & concrete superstructure construction"
  },
  galleryConstruction2: {
    id: "galleryConstruction2",
    src: "/images/gallery-construction-2.jpg",
    alt: "Civil site works & infrastructure engineering"
  },
  gallerySupplies1: {
    id: "gallerySupplies1",
    src: "/images/gallery-supplies-1.jpg",
    alt: "Warehoused industrial supplies & precision parts"
  },
  capProcurement: {
    id: "capProcurement",
    src: "/images/cap-procurement.jpg",
    alt: "Global procurement & supply chain logistics"
  },
  capIndustrial: {
    id: "capIndustrial",
    src: "/images/cap-industrial.jpg",
    alt: "Industrial services and structural steel erection"
  },
  capEquipment: {
    id: "capEquipment",
    src: "/images/cap-equipment.jpg",
    alt: "Heavy industrial equipment leasing & fleet operations"
  },
  capFabrication: {
    id: "capFabrication",
    src: "/images/cap-fabrication.jpg",
    alt: "Precision metal fabrication and custom steel engineering"
  },
  projSteel: {
    id: "projSteel",
    src: "/images/proj-steel.jpg",
    alt: "Large-scale industrial steel structure & fit-out project"
  },
  projConstruction: {
    id: "projConstruction",
    src: "/images/proj-construction.jpg",
    alt: "Commercial steel & concrete multi-tier superstructure"
  },
  projProcurement: {
    id: "projProcurement",
    src: "/images/proj-procurement.jpg",
    alt: "Mission-critical government & industrial supply distribution"
  }
};

export const galleryImages = [
  images.galleryFabrication1,
  images.galleryFabrication2,
  images.galleryConstruction1,
  images.galleryConstruction2,
  images.gallerySupplies1
];

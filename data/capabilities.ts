export interface Capability {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string;
  image?: string;
}

export const capabilities: Capability[] = [
  {
    id: "procurement",
    number: "01",
    title: "Procurement & Supplies",
    summary:
      "Sourcing and delivery of electrical, plumbing, HVAC, IT, medical, safety and construction materials from trusted global brands.",
    description:
      "As a fully-integrated solution, we operate as a strategic, long-term procurement partner — focused on sourcing the right product, from the right source, at the right price, tailored to each customer's requirement.",
    image: "/images/cap-procurement.jpg"
  },
  {
    id: "industrial-services",
    number: "02",
    title: "Industrial Services",
    summary:
      "Construction of steel and concrete structures, chain-link fencing installation and integrated project execution.",
    description:
      "Our construction approach incorporates project planning and on-site execution for steel and concrete structural building work, delivered to specification and schedule.",
    image: "/images/cap-industrial.jpg"
  },
  {
    id: "equipment-leasing",
    number: "03",
    title: "Equipment Leasing",
    summary:
      "An integrated equipment rental and leasing approach built around uptime and responsiveness.",
    description:
      "Our equipment rental division differentiates itself through an integrated approach to equipment leasing, supporting customer operations with reliable, well-maintained assets.",
    image: "/images/cap-equipment.jpg"
  },
  {
    id: "metal-fabrication",
    number: "04",
    title: "Metal Fabrication",
    summary:
      "In-house factory producing steel doors, lockers, racking and custom fabricated products at scale.",
    description:
      "Our fabrication factory in the Amghara Industrial Area, Kuwait, spans approximately 2,000 square metres and is equipped for steel works, from fire-rated doors to custom industrial fabrication.",
    image: "/images/cap-fabrication.jpg"
  }
];

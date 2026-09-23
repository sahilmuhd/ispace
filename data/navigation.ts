export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  title: string;
  href: string;
  items: NavLink[];
}

export const primaryNav: NavLink[] = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Supplies", href: "/supplies" },
  { label: "Divisions", href: "/divisions" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" }
];

export const mobileNav: NavLink[] = [
  ...primaryNav,
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const megaMenu: MegaMenuColumn[] = [
  {
    title: "Capabilities",
    href: "/capabilities",
    items: [
      { label: "Procurement & Supplies", href: "/capabilities#procurement" },
      { label: "Industrial Services", href: "/capabilities#industrial-services" },
      { label: "Equipment Leasing", href: "/capabilities#equipment-leasing" },
      { label: "Metal Fabrication", href: "/metal-fabrication" }
    ]
  },
  {
    title: "Supplies",
    href: "/supplies",
    items: [
      { label: "Electrical", href: "/supplies#electrical" },
      { label: "Plumbing", href: "/supplies#plumbing" },
      { label: "Construction", href: "/supplies#construction" },
      { label: "HVAC", href: "/supplies#hvac" },
      { label: "IT & Technology", href: "/supplies#it" },
      { label: "Electronics", href: "/supplies#electronics" },
      { label: "Furniture", href: "/supplies#furniture" },
      { label: "Hardware", href: "/supplies#hardware" },
      { label: "Medical", href: "/supplies#medical" },
      { label: "Safety & Security", href: "/supplies#safety" },
      { label: "Communication", href: "/supplies#communication" },
      { label: "Prefabricated Structures", href: "/supplies#prefab" }
    ]
  },
  {
    title: "Divisions",
    href: "/divisions",
    items: [
      { label: "Metal Fabrication", href: "/metal-fabrication" },
      { label: "Restaurants", href: "/restaurants" }
    ]
  }
];

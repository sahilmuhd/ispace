export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Supplies", href: "/supplies" },
  { label: "Metal Fabrication", href: "/metal-fabrication" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const mobileNav: NavLink[] = [
  ...primaryNav
];

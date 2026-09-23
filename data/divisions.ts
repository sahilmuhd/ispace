export interface Division {
  id: string;
  title: string;
  summary: string;
  href: string;
}

export const divisions: Division[] = [
  {
    id: "metal-fabrication",
    title: "Metal Fabrication",
    summary:
      "In-house factory in the Amghara Industrial Area producing steel doors, lockers, racking and custom fabricated products.",
    href: "/metal-fabrication"
  },
  {
    id: "restaurants",
    title: "Restaurants",
    summary: "A dedicated division within the iSPACE group of businesses.",
    href: "/restaurants"
  }
];

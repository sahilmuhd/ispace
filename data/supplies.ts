export interface SupplyCategory {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const supplyCategories: SupplyCategory[] = [
  { id: "electrical", number: "01", title: "Electrical", description: "Electrical supplies and equipment for industrial and commercial operations." },
  { id: "plumbing", number: "02", title: "Plumbing", description: "Plumbing materials and fittings sourced from qualified manufacturers." },
  { id: "construction", number: "03", title: "Construction & Steel", description: "Lumber, plywood, steel and general construction materials." },
  { id: "hvac", number: "04", title: "HVAC", description: "Climate control systems and equipment for facilities of any scale." },
  { id: "it", number: "05", title: "IT & Technology", description: "Desktops, laptops, servers, networking equipment, switches and LAN infrastructure from top industry brands." },
  { id: "electronics", number: "06", title: "Electronics & Appliances", description: "Electrical appliances and electronics for commercial and residential use." },
  { id: "furniture", number: "07", title: "Furniture", description: "Office and home furniture procurement." },
  { id: "hardware", number: "08", title: "Hardware Equipment", description: "General hardware equipment across trade categories." },
  { id: "medical", number: "09", title: "Medical", description: "Hospital and medical equipment supply." },
  { id: "safety", number: "10", title: "Safety, Security & Military", description: "Safety products drawing on deep industrial experience in this domain." },
  { id: "communication", number: "11", title: "Communication Equipment", description: "Communication systems and equipment." },
  { id: "prefab", number: "12", title: "Prefabricated Structures", description: "Prefab units supplied to prestigious customers within and outside Kuwait." }
];

export interface Location {
  id: string;
  country: string;
  role: string;
  note: string;
}

// No street addresses or phone numbers are published here — none could be verified.
// Add them once confirmed by the client; see README "Client Editability" section.
export const locations: Location[] = [
  { id: "kw", country: "Kuwait", role: "Headquarters", note: "Established 2000. Home to the metal fabrication factory, Amghara Industrial Area." },
  { id: "qa", country: "Qatar", role: "Operations", note: "Procurement and industrial supply engagements." },
  { id: "iq", country: "Iraq", role: "Operations", note: "Procurement and industrial supply engagements." },
  { id: "ae", country: "UAE", role: "Operations", note: "Procurement and industrial supply engagements." }
];

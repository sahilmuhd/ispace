import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.brandName} — Global Procurement & Industrial Solutions`,
    template: `%s | ${company.brandName}`
  },
  description: company.descriptionShort,
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: company.brandName,
    foundingDate: String(company.established),
    description: company.descriptionShort,
    url: company.siteUrl,
    areaServed: company.countries,
    identifier: [
      { "@type": "PropertyValue", propertyID: "DUNS", value: company.duns },
      { "@type": "PropertyValue", propertyID: "NCAGE", value: company.ncage }
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

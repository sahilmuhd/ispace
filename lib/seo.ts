import type { Metadata } from "next";
import { company } from "@/data/company";

const siteName = `${company.brandName} — ${company.legalName}`;

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${company.siteUrl}${opts.path}`;
  return {
    title: `${opts.title} | ${company.brandName}`,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${opts.title} | ${company.brandName}`,
      description: opts.description,
      url,
      siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | ${company.brandName}`,
      description: opts.description
    }
  };
}

import type { MetadataRoute } from "next";
import { company } from "@/data/company";

const paths = [
  "",
  "/about",
  "/capabilities",
  "/supplies",
  "/divisions",
  "/metal-fabrication",
  "/restaurants",
  "/projects",
  "/contact",
  "/request-a-quote"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${company.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}

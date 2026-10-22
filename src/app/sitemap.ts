import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url || "https://karan30.vercel.app";

  return ["", "/artifacts"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-10-22T00:00:00.000Z",
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

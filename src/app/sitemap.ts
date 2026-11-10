import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/artifacts",
    ...DATA.featuredProjects.map((project) => `/builds/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: `${DATA.url}${route}`,
  }));
}

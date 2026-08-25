import { DATA } from "@/data/resume";
import { getSortedPosts, getPostSlug } from "@/lib/posts";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url || "https://karan30.vercel.app";

  const posts: MetadataRoute.Sitemap = getSortedPosts().map((post) => ({
    url: `${baseUrl}/blog/${getPostSlug(post)}`,
    lastModified: new Date(post.publishedAt).toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const routes: MetadataRoute.Sitemap = ["", "/artifacts", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...routes, ...posts];
}

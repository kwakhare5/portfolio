import { describe, it, expect } from "vitest";
import {
  getPostSlug,
  getSortedPosts,
  getAllPostSlugs,
  getPostBySlug,
  getAdjacentPosts,
  type Post,
} from "./posts";

const mockPosts: Post[] = [
  {
    _meta: {
      path: "first-post.mdx",
      extension: "mdx",
      directory: "content",
      fileName: "first-post.mdx",
      filePath: "content/first-post.mdx",
    },
    title: "First Post",
    publishedAt: "2026-01-01",
    summary: "First summary",
    content: "Content 1",
    mdx: "code1",
  },
  {
    _meta: {
      path: "third-post.mdx",
      extension: "mdx",
      directory: "content",
      fileName: "third-post.mdx",
      filePath: "content/third-post.mdx",
    },
    title: "Third Post",
    publishedAt: "2026-03-01",
    summary: "Third summary",
    content: "Content 3",
    mdx: "code3",
  },
  {
    _meta: {
      path: "second-post.mdx",
      extension: "mdx",
      directory: "content",
      fileName: "second-post.mdx",
      filePath: "content/second-post.mdx",
    },
    title: "Second Post",
    publishedAt: "2026-02-01",
    summary: "Second summary",
    content: "Content 2",
    mdx: "code2",
  },
];

describe("posts utility", () => {
  it("extracts slug correctly from post path", () => {
    expect(getPostSlug(mockPosts[0])).toBe("first-post");
  });

  it("sorts posts descending by published date", () => {
    const sorted = getSortedPosts(mockPosts);
    expect(sorted.map((p) => p.title)).toEqual([
      "Third Post",
      "Second Post",
      "First Post",
    ]);
  });

  it("returns all post slugs", () => {
    const slugs = getAllPostSlugs(mockPosts);
    expect(slugs).toEqual(["first-post", "third-post", "second-post"]);
  });

  it("finds post by slug", () => {
    const post = getPostBySlug("second-post", mockPosts);
    expect(post?.title).toBe("Second Post");

    const nonExistent = getPostBySlug("non-existent", mockPosts);
    expect(nonExistent).toBeUndefined();
  });

  it("computes adjacent posts correctly in chronological order", () => {
    // In sorted order: Third Post (newest), Second Post, First Post (oldest)
    const midAdjacent = getAdjacentPosts("second-post", mockPosts);
    expect(midAdjacent.previousPost?.title).toBe("Third Post");
    expect(midAdjacent.nextPost?.title).toBe("First Post");

    const firstAdjacent = getAdjacentPosts("third-post", mockPosts);
    expect(firstAdjacent.previousPost).toBeNull();
    expect(firstAdjacent.nextPost?.title).toBe("Second Post");

    const lastAdjacent = getAdjacentPosts("first-post", mockPosts);
    expect(lastAdjacent.previousPost?.title).toBe("Second Post");
    expect(lastAdjacent.nextPost).toBeNull();

    const invalidAdjacent = getAdjacentPosts("unknown", mockPosts);
    expect(invalidAdjacent.previousPost).toBeNull();
    expect(invalidAdjacent.nextPost).toBeNull();
  });
});

import { allPosts } from "content-collections";

export type Post = (typeof allPosts)[number];

export function getPostSlug(post: Post): string {
  return post._meta.path.replace(/\.mdx$/, "");
}

export function getSortedPosts(posts: readonly Post[] = allPosts): Post[] {
  return [...posts].sort((a, b) => {
    const timeA = new Date(a.publishedAt).getTime();
    const timeB = new Date(b.publishedAt).getTime();
    if (isNaN(timeA)) return 1;
    if (isNaN(timeB)) return -1;
    return timeB - timeA;
  });
}

export function getAllPostSlugs(posts: readonly Post[] = allPosts): string[] {
  return posts.map(getPostSlug);
}

export function getPostBySlug(
  slug: string,
  posts: readonly Post[] = allPosts
): Post | undefined {
  return posts.find((p) => getPostSlug(p) === slug);
}

export function getAdjacentPosts(
  slug: string,
  posts: readonly Post[] = allPosts
): { previousPost: Post | null; nextPost: Post | null } {
  const sorted = getSortedPosts(posts);
  const currentIndex = sorted.findIndex((p) => getPostSlug(p) === slug);

  if (currentIndex === -1) {
    return { previousPost: null, nextPost: null };
  }

  const previousPost = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const nextPost = currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  return { previousPost, nextPost };
}

import BlogListContent from "@/components/pages/BlogListContent";
import { getAllPosts, getPostBySlug } from "@/lib/blog-api";

// Posts live in MySQL and can change at any time (a marketer might
// publish mid-day) — render this on every request instead of baking it
// into the static build, so new posts show up immediately.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog",
  description:
    "Perspectives, research briefs, and technical insights from PHEXARA on AI governance, cybersecurity, digital twins, edge AI, and smart commerce.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = getAllCategories(posts);
  return <BlogListContent posts={posts} categories={categories} />;
}
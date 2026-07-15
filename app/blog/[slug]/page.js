import { notFound } from "next/navigation";
import { marked } from "marked";
import BlogPostContent from "@/components/pages/BlogPostContent";
import { getAllPosts, getPostBySlug } from "@/lib/blog-api";

// Posts live in MySQL now, so we can't know all slugs at build time the
// way we could with local files — render each post on request instead.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.coverImage ? [post.coverImage] : ["/og-image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : ["/og-image.png"],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = marked.parse(post.content || "");

  const allPosts = await getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return <BlogPostContent post={post} contentHtml={contentHtml} related={related} />;
}
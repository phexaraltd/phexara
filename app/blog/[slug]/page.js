import { notFound } from "next/navigation";
import { marked } from "marked";
import BlogPostContent from "@/components/pages/BlogPostContent";
import { getAllPosts, getPostBySlug } from "@/lib/blog-api";
// Posts live in MySQL now, so we can't know all slugs at build time the
// way we could with local files — render each post on request instead.
export const dynamic = "force-dynamic";

// Lets writers drop a call-to-action button into post content with:
//   [button: Get More Info](https://example.com)
// Handled before marked ever sees it, so it doesn't depend on marked's
// Renderer API (which has changed shape across versions) — it just hands
// marked a plain <a> tag, which marked passes through untouched.
function renderButtonLinks(markdown) {
  return markdown.replace(
    /\[button:\s*([^\]]+)\]\(([^)]+)\)/g,
    (_, text, url) =>
      `<a href="${url.trim()}" class="post-cta-link" target="_blank" rel="noopener noreferrer"><span>${text.trim()}</span></a>`
  );
}

function renderPostContent(markdown) {
  // breaks: true makes a single line break behave like Shift+Enter (a real
  // <br>) instead of requiring a full blank line between paragraphs the
  // way strict Markdown normally does — matches what people expect when
  // typing in a plain <textarea>.
  return marked.parse(renderButtonLinks(markdown || ""), { breaks: true });
}

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
  const contentHtml = renderPostContent(post.content);
  const allPosts = await getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  return <BlogPostContent post={post} contentHtml={contentHtml} related={related} />;
}
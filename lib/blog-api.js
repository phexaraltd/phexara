import { callApi } from "@/lib/api-client";

function mapRow(row) {
  if (!row) return null;
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    format: row.format,
    author: row.author,
    date: row.post_date,
    readTime: row.read_time,
    coverImage: row.cover_image,
    featured: Boolean(row.featured),
    content: row.content,
  };
}

export async function getAllPosts() {
  const rows = await callApi("get-all-posts");
  return rows.map(mapRow);
}

export async function getPostBySlug(slug) {
  const row = await callApi("get-post-by-slug", { slug });
  return mapRow(row);
}

export function getAllCategories(posts) {
  const cats = new Set(posts.map((p) => p.category).filter(Boolean));
  return ["All", ...Array.from(cats)];
}
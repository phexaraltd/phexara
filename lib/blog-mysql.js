import { query } from "@/lib/mysql";

// Same function names and return shapes as lib/blog.js (the MongoDB version),
// so switching over later just means changing the import in the pages that
// use these — no other code should need to change.

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
  const rows = await query("SELECT * FROM posts ORDER BY post_date DESC");
  return rows.map(mapRow);
}

export async function getPostBySlug(slug) {
  const rows = await query("SELECT * FROM posts WHERE slug = ? LIMIT 1", [slug]);
  return rows.length ? mapRow(rows[0]) : null;
}

export function getAllCategories(posts) {
  const cats = new Set(posts.map((p) => p.category).filter(Boolean));
  return ["All", ...Array.from(cats)];
}
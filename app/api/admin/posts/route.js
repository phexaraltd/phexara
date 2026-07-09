import { NextResponse } from "next/server";
import { query } from "@/lib/mysql";
import { getAllPosts } from "@/lib/blog-mysql";

function isAuthed(request) {
  const cookie = request.cookies.get("phexara_admin");
  return cookie && cookie.value === process.env.ADMIN_PASSWORD;
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function GET(request) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  try {
    const posts = await getAllPosts();
    return NextResponse.json({ posts });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await request.json();
  const { title, excerpt, category, format, author, date, readTime, coverImage, featured, content } = body;

  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
  }

  const slug = body.slug ? slugify(body.slug) : slugify(title);
  if (!slug) {
    return NextResponse.json({ error: "Could not generate a valid slug from that title" }, { status: 400 });
  }

  try {
    const isRename = body.originalSlug && body.originalSlug !== slug;
    if (isRename) {
      await query("DELETE FROM posts WHERE slug = ?", [body.originalSlug]);
    }

    // "Upsert" in MySQL: insert, but if the slug already exists, update instead.
    await query(
      `INSERT INTO posts (slug, title, excerpt, category, format, author, post_date, read_time, cover_image, featured, content)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         title = VALUES(title), excerpt = VALUES(excerpt), category = VALUES(category),
         format = VALUES(format), author = VALUES(author), post_date = VALUES(post_date),
         read_time = VALUES(read_time), cover_image = VALUES(cover_image),
         featured = VALUES(featured), content = VALUES(content)`,
      [
        slug,
        title,
        excerpt || "",
        category || "Research",
        format || "Perspective Paper",
        author || "PHEXARA Team",
        date || new Date().toISOString().slice(0, 10),
        readTime || "5 min read",
        coverImage || "",
        Boolean(featured),
        content,
      ]
    );
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, post: { slug, title, excerpt, category, format, author, date, readTime, coverImage, featured, content } });
}

export async function DELETE(request) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  const { slug } = await request.json();
  if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });

  try {
    await query("DELETE FROM posts WHERE slug = ?", [slug]);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
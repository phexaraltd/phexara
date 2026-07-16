import { NextResponse } from "next/server";
import { getAllPosts, savePost, deletePost } from "@/lib/blog-api";

function isAuthed(request) {
  const cookie = request.cookies.get("phexara_admin");
  return cookie && cookie.value === process.env.ADMIN_PASSWORD;
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
  const { title, content } = body;
  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
  }

  try {
    const result = await savePost(body);
    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  const { slug } = await request.json();
  if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 });

  try {
    await deletePost(slug);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
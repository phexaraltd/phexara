import { NextResponse } from "next/server";
import { query } from "@/lib/mysql";

const MAX_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "image/gif"];

function isAuthed(request) {
  const cookie = request.cookies.get("phexara_admin");
  return cookie && cookie.value === process.env.ADMIN_PASSWORD;
}

export async function POST(request) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file received" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json({ error: "Only PNG, JPEG, WEBP, or GIF images are allowed" }, { status: 400 });
  }
  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ error: "Image must be under 5MB" }, { status: 400 });
  }

  try {
    const bytes = Buffer.from(await file.arrayBuffer());
    const result = await query(
      "INSERT INTO images (data, content_type, filename) VALUES (?, ?, ?)",
      [bytes, file.type, file.name]
    );
    return NextResponse.json({ url: `/api/images/${result.insertId}` });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
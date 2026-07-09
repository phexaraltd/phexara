import { query } from "@/lib/mysql";

export async function GET(request, { params }) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    return new Response("Not found", { status: 404 });
  }

  const rows = await query("SELECT data, content_type FROM images WHERE id = ?", [id]);
  if (!rows.length) {
    return new Response("Not found", { status: 404 });
  }

  const image = rows[0];
  return new Response(image.data, {
    headers: {
      "Content-Type": image.content_type,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
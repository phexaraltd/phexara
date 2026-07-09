// Run once, locally, after setting MYSQL_HOST/MYSQL_USER/MYSQL_PASSWORD/MYSQL_DATABASE
// in .env.local, and after running scripts/mysql-schema.sql against your database:
//   node scripts/seed-posts-mysql.js

require("dotenv").config({ path: ".env.local" });
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

async function main() {
  const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_PORT } = process.env;
  if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_DATABASE) {
    console.error("Missing MySQL environment variables in .env.local — see ADMIN-SETUP.md");
    process.exit(1);
  }

  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) {
    console.log("No content/blog folder found — nothing to seed.");
    return;
  }

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".json"));
  if (files.length === 0) {
    console.log("No post files found — nothing to seed.");
    return;
  }

  const connection = await mysql.createConnection({
    host: MYSQL_HOST,
    port: MYSQL_PORT || 3306,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  });

  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const post = JSON.parse(raw);
    if (!post.slug) post.slug = file.replace(/\.json$/, "");

    await connection.execute(
      `INSERT INTO posts (slug, title, excerpt, category, format, author, post_date, read_time, cover_image, featured, content)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         title = VALUES(title), excerpt = VALUES(excerpt), category = VALUES(category),
         format = VALUES(format), author = VALUES(author), post_date = VALUES(post_date),
         read_time = VALUES(read_time), cover_image = VALUES(cover_image),
         featured = VALUES(featured), content = VALUES(content)`,
      [
        post.slug,
        post.title,
        post.excerpt || "",
        post.category || "Research",
        post.format || "Perspective Paper",
        post.author || "PHEXARA Team",
        post.date || new Date().toISOString().slice(0, 10),
        post.readTime || "5 min read",
        post.coverImage || "",
        Boolean(post.featured),
        post.content || "",
      ]
    );
    console.log(`Seeded: ${post.slug}`);
  }

  await connection.end();
  console.log(`\nDone — ${files.length} post(s) loaded into MySQL.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
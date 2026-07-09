require("dotenv").config({ path: ".env.local" });
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MONGODB_URI in .env.local");
    process.exit(1);
  }

  const dbName = process.env.MONGODB_DB || "phexara";
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

  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db(dbName).collection("posts");

  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const post = JSON.parse(raw);
    if (!post.slug) post.slug = file.replace(/\.json$/, "");

    await collection.updateOne({ slug: post.slug }, { $set: post }, { upsert: true });
    console.log(`Seeded: ${post.slug}`);
  }

  await client.close();
  console.log(`Done — ${files.length} post(s) loaded into MongoDB.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

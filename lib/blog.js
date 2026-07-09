import { getPostsCollection } from "@/lib/mongodb";

export async function getAllPosts() {
  const collection = await getPostsCollection();
  const posts = await collection.find({}, { projection: { _id: 0 } }).toArray();
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const collection = await getPostsCollection();
  return collection.findOne({ slug }, { projection: { _id: 0 } });
}

export function getAllCategories(posts) {
  const cats = new Set(posts.map((p) => p.category).filter(Boolean));
  return ["All", ...Array.from(cats)];
}

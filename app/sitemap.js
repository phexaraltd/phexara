import { getAllPosts } from "@/lib/blog-mysql";

// Query at request time instead of at build time — this avoids requiring
// a database connection during the build/deploy step itself.
export const dynamic = "force-dynamic";

const BASE_URL = "https://www.phexara.co.uk";

const routes = [
  "",
  "/about",
  "/blog",
  "/careers",
  "/contact",
  "/industries",
  "/insights",
  "/projects",
  "/research",
  "/solutions",
];

export default async function sitemap() {
  const lastModified = new Date();

  const staticEntries = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // If the database is briefly unreachable, still serve the sitemap with
  // just the static pages rather than failing the whole request.
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch (err) {
    console.error("sitemap: could not load posts from the database:", err.message);
  }

  const postEntries = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "phexara";

let clientPromise;

if (!uri) {
  clientPromise = null;
} else {
  if (!global._phexaraMongoClientPromise) {
    const client = new MongoClient(uri);
    global._phexaraMongoClientPromise = client.connect();
  }
  clientPromise = global._phexaraMongoClientPromise;
}

export async function getDb() {
  if (!clientPromise) {
    throw new Error("Missing MONGODB_URI environment variable. See ADMIN-SETUP.md.");
  }
  const client = await clientPromise;
  return client.db(dbName);
}

export async function getPostsCollection() {
  const db = await getDb();
  return db.collection("posts");
}

export async function getImagesCollection() {
  const db = await getDb();
  return db.collection("images");
}
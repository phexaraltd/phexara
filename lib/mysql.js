import mysql from "mysql2/promise";

// A connection pool is used instead of a single connection because
// cPanel-hosted Node.js apps typically run as one long-lived process
// (unlike Netlify's serverless functions), so we want to reuse and manage
// multiple connections efficiently rather than opening a new one per query.

let pool;

function getPool() {
  if (!pool) {
    const required = ["MYSQL_HOST", "MYSQL_USER", "MYSQL_PASSWORD", "MYSQL_DATABASE"];
    const missing = required.filter((key) => !process.env[key]);
    if (missing.length) {
      throw new Error(
        `Missing MySQL environment variable(s): ${missing.join(", ")}. See ADMIN-SETUP.md.`
      );
    }

    pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}

export async function query(sql, params = []) {
  const [rows] = await getPool().execute(sql, params);
  return rows;
}
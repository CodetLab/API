import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgresql://postgres.agggsvgpksugguazyujb:cxpvzqgHMSO7Q5oR@aws-1-us-east-2.pooler.supabase.com:5432/postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

async function test() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("DB conectada:", res.rows[0]);
  } catch (err) {
    console.error("Error conexión:", err);
  } finally {
    await pool.end();
  }
}

test();
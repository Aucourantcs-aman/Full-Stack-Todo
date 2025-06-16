import { Pool } from "pg";
export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sql_demo",
  password: "aman07dev",
  port: 5432,
});

export const query = (text, params) => pool.query(text, params);
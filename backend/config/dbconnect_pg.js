import { Pool } from "pg";
export const pool = new Pool({
  user: "Aman Khan",
  host: "localhost",
  database: "todo_db",
  password: "aman07dev",
  port: 5432,
});

const res = pool.query(
  "create table todo_list(id serial primary key, text varchar(255) not null, done boolean default false)"
);


import express from "express";
import { config } from "dotenv";
import { query } from "./config/dbconnect_pg.js";
config();

const app = express();
const port = process.env.PORT || 3000;

console.log(`Server running on port: ${port}`);

app
  .get("/", async (req, res) => {
    try {
      const result = await query("SELECT * FROM todo_pg");
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  })
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
import express from "express";
import { config } from "dotenv";
config();

const app = express();
const port = process.env.PORT || 3000;

console.log(`Server running on port: ${port}`);

app
  .get("/", (req, res) => {
    res.send("Hello World!");
  })
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import db from "./utils/db.js";
const app = express();
const port = 3005;

db();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ping", (req, res) => res.send("pong"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

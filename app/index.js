import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";

// cookie-parser
// helmet
// morgan
// cors
// mongodb / mongoose sub-documents
// validation
// argon2
// jwt

import db from "./utils/db.js";
db();

import routes from "./routes/index.js";

const app = express();
const POST = 3005;

app.use(bodyParser.json());
app.use(routes);

app.listen(POST, () => {
  console.log(`Example app listening at http://localhost:${POST}`);
});

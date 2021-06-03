import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"



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
app.use(cookieParser())
app.use(helmet());
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json());
app.use(routes);

app.listen(POST, () => {
  console.log(`Example app listening at http://localhost:${POST}`);
});

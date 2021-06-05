import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import jwt from 'express-jwt';

import db from './utils/db.js';
db();

import routes from './routes/index.js';

const app = express();
const POST = 3005;

// cookie-parser
app.use(cookieParser());

// helmet
app.use(helmet());

// morgan
app.use(morgan('dev'));

// cors
app.use(cors());

// jwt
app.use(
  jwt({ secret: process.env.JWT_SECRET, algorithms: ['HS256'] }).unless({
    path: ['/user/sign-in', '/user/sign-up'],
  })
);

app.use(bodyParser.json());
app.use(routes);

app.listen(POST, () => {
  console.log(`Example app listening at http://localhost:${POST}`);
});

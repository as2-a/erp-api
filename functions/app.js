const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const serverless = require('serverless-http');
const userRouter = require('./routes/user.router');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', userRouter);

module.exports.handler = serverless(app);

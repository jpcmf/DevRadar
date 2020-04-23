require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const http = require('http');

const routes = require('./routes');

const app = express();
// const server = http.Server(app);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

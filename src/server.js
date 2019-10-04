require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
  
db.on('connected', () => {
    console.log('Mongoose default connection is open');
});

db.on('error', err => {
  console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

app.use(cors(process.env.SETCORS));
app.use(express.json());
app.use(routes);

app.listen(3333);


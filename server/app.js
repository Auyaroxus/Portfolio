const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('./middleware/cors');

const AppRoutes = require('./routes/main');

const app = express();

mongoose
.connect("mongodb://127.0.0.1:27017/portfolio")
.then(() => {
  console.log('Connect to database.');
})
.catch((err) => {
  console.log("Error");
});

app.use(bodyParser.json());

app.use(cors);

app.use('/api', AppRoutes);

module.exports = app;

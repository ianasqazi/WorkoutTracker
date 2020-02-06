const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Workout = require('./models/workout');
const apiRoutes = require("./controller/routes/api-routes");
const htmlRoutes = require("./controller/routes/html-routes");

let mongoose = require('mongoose');
let db = require('./models');


mongoose.connect('mongodb://localhost/workout',
 {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);

 
  app.listen(PORT, function() {
    console.log('App now listening at localhost:' + PORT);
  });
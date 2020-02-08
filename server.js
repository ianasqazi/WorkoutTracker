const express = require('express');
const routes = require("./controller/routes/routes");

let mongoose = require('mongoose');

let URL = process.env.MONGOLAB_URI || 'mongodb://localhost/workout';

// mongoose.connect('mongodb://shailishah:admin2912@ds047447.mlab.com:47447/heroku_57vwf0ps',

mongoose.connect(URL,
// mongoose.connect('mongodb://localhost/workout',
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

app.use(routes);

app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});
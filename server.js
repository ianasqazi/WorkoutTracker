const express = require('express');
const routes = require("./controller/routes/routes");

let mongoose = require('mongoose');

mongoose.connect('mongodb://workoutusers:workout11@ds041208.mlab.com:41208/heroku_tgltvbhf', 

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
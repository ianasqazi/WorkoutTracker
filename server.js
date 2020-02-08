const express = require('express');
const routes = require("./controller/routes/routes");

let mongoose = require('mongoose');
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

app.use(routes);

app.listen(PORT, function() {
  console.log('App now listening at localhost:' + PORT);
});
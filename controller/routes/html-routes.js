const express = require("express");
const path = require("path");

var htmlRoutes = express.Router();

htmlRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../public/index.html'));
  });
  
htmlRoutes.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname + '../../../public/exercise.html'));
});
  
htmlRoutes.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname + '../../../public/stats.html'));
});
  
module.exports = htmlRoutes;

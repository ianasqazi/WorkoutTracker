// // ROUTING : 

// const express = require("express");
// const path = require("path");
// const db = require("../../models");
// // const Workout = require('../../models/workout');
// const Workout = require('../../models/workout');

// var router = express.Router();

// ///


// router.get("/", (req,res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// router.get("/exercise", (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
// });

// router.get("/stats", (req,res) => {
//   res.sendFile(path.join(__dirname, 'public', 'stats.html'));
// });

// router.get("/api/workouts", (req,res) => {
//   db.Workout.find({}).sort({day:-1}).limit(1)
//   .then(result => {
//     res.json(result);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// router.get('/api/workouts/range', (req, res) => {
//   db.Workout.find({})
//   .then(result => {
//     res.json(result);
//   })
//   .catch(err => {
//     res.json(err);
//   });

// });

// module.exports = router;


const express = require("express");
const path = require("path");
const db = require("../../models");
const Workout = require('../../models/workout');

var apiRoutes = express.Router();


apiRoutes.get('/api/workouts', async (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

  apiRoutes.post('/api/workouts', async (req, res) => {
    const workout = new Workout({ exercises: req.body });
    Workout.create(workout)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  
  apiRoutes.put('/api/workouts/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;
  
    Workout.findById(id)
      .then(dbWorkout => {
        dbWorkout.exercises.push(data);
        return dbWorkout;
      })
      .then(dbWorkout => {
        Workout.findOneAndUpdate(
          { _id: id },
          { exercises: dbWorkout.exercises },
          { new: true }
        )
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  apiRoutes.get('/api/workouts/range', async (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  module.exports = apiRoutes;
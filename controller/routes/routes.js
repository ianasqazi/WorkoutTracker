const express = require("express");
const path = require("path");

var routes = express.Router();

const db = require("../../models");
const Workout = require('../../models/workout');


routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../public/index.html'));
  });
  
routes.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname + '../../../public/exercise.html'));
});
  
routes.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname + '../../../public/stats.html'));
});

//

routes.get('/api/workouts', async (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

  routes.post('/api/workouts', async (req, res) => {
    const workout = new Workout({ exercises: req.body });
    Workout.create(workout)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  
  routes.put('/api/workouts/:id', async (req, res) => {
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
  
  routes.get('/api/workouts/range', async (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


module.exports = routes;

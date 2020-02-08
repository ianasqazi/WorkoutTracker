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



const express = require("express");
const path = require("path");

// var htmlRoutes = express.Router();
// var apiRoutes = express.Router();
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

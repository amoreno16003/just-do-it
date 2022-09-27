const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
//require('dotenv').config();
const axios = require('axios');

// routes
router.get('/', async (req, res) => {

    let workouts = await db.workout.findAll();
    workouts = workouts.map(w => w.toJSON()); // removes all of the unncessary data
    console.log("TESTING SENDING TO INDEX:", workouts); // this shows me all of the song data -> previousValues
    // render the (songs/index) page
    //res.render('songs/index', { songs: songs });
    res.render('workouts/allworkouts', {workouts: workouts})
});


router.get('/search', (req, res) => {
    res.render('workouts/search');
});



router.get('/:id', async (req, res) => {
    // print song to verify
    let workout = await db.workout.findOne({
        where: { id: req.params.id }
    });
    workout = workout.toJSON();
    console.log('===== this is the show route =====');
    console.log(workout);
    // go to the db and grab one song
    // render the songs/show page with the song
    res.render('workouts/show', { workout: workout });
})

router.post('/results', async (req, res) => {
    // get back the search item
    console.log('>>>>> SEARCH DATA', req.body);
    // use axios to find the results
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/name/${req.body.search}`,
        headers: {
          'X-RapidAPI-Key': process.env.APIKEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };
    const response = await axios.request(options);
    console.log('yoooo, response >>>>', response.data)

    // render the songs/results page 
    res.render('workouts/workoutplan', { data: response.data});
})





router.post('/myworkoutroutine', async (req, res) => {
    // print req.body to view form inputs
    console.log('****** /new', req.body);
    // create song (for db)
    const newWorkout = await db.workout.create({
        exerciseName: req.body.name,
        target: req.body.target,
        sets: 4, 
        reps: 12,
        img: req.body.gif,
        userId: parseInt(req.body.userId)
    });
    console.log(newWorkout.toJSON());
    // res.redirect to all favorite songs
    res.redirect('/workouts');
});

router.delete('/:id', async (req, res) => {
    // get song and remove

    let workoutDeleted = await db.workout.destroy({
        where: { id: req.params.id }
    });
    console.log('==== this is the delete route ======');
    console.log('Amount of songs deleted', workoutDeleted);
    // redirect the user back to all songs
    res.redirect('/workouts');
});

module.exports = router;
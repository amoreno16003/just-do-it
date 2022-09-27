const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');
const db = require('../models');
//require('dotenv').config();
const axios = require('axios');
const { response } = require('express');

// routes

router.get('/', async (req, res) => {

    let recipes = await db.recipe.findAll();
    recipes = recipes.map(w => w.toJSON()); // removes all of the unncessary data
    console.log("TESTING SENDING TO INDEX:", recipes); // this shows me all of the song data -> previousValues
    // render the (songs/index) page
    //res.render('songs/index', { songs: songs });
    res.render('recipes/allrecipes', {recipes: recipes})
});


router.get('/search', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
        params: {tags: '', number: '10'},
        headers: {
            'X-RapidAPI-Key': '36af0db4d4msh1d00358b75b0ddbp16fb81jsnbf8bd5322c96',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
};
    
axios.request(options).then(function (response) {
	console.log(response.data.recipes[0].title);
    var theData = response.data.recipes;
    res.render('recipes/search', {data: theData});
}).catch(function (error) {
	console.error(error);
});
});

router.get('/:id', async (req, res) => {
    // print song to verify
    let recipe = await db.recipe.findOne({
        where: { id: req.params.id }
    });
    recipe = recipe.toJSON();
    console.log('===== this is the show route =====');
    console.log(recipe);
    // go to the db and grab one song
    // render the songs/show page with the song
    res.render('recipes/viewone', { recipe: recipe });
})

router.post('/results', async (req, res) => {
    // get back the search item
    console.log('>>>>> SEARCH DATA', req.body.search);
    // use axios to find the results
    const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
        params: {
          query: `${req.body.search}`,
          number: '10'
        },
        headers: {
          'X-RapidAPI-Key': '36af0db4d4msh1d00358b75b0ddbp16fb81jsnbf8bd5322c96',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };
      
    const response = await axios.request(options);
    console.log('yoooo, response >>>>', response.data.results)

    // render the songs/results page 
    res.render('recipes/searchresult', { data: response.data.results});
})

router.post('/myrecipes', async (req, res) => {
    // print req.body to view form inputs
    console.log('****** /new', req.body);
    // create song (for db)
    const newRecipe = await db.recipe.create({
        recipeName: req.body.title,
        recipeId: req.body.recipeId,
        image: req.body.img,
        userId: parseInt(req.body.userId),
        sourceUrl: 'temp',
        healthScore: -10,
        pricePerServing: -10,
        vegetarian:false,


    });
    console.log(newRecipe.toJSON());
    // res.redirect to all favorite songs
    res.redirect('/recipes');
});


router.delete('/:id', async (req, res) => {
    // get song and remove

    let recipeDeleted = await db.recipe.destroy({
        where: { id: req.params.id }
    });
    console.log('==== this is the delete route ======');
    console.log('Amount of songs deleted', recipeDeleted);
    // redirect the user back to all songs
    res.redirect('/recipes');
});

module.exports = router;
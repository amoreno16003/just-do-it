const axios = require("axios");
require('dotenv').config();

// let testing = 'curl';

// const options = {
//   method: 'GET',
//   url: `https://exercisedb.p.rapidapi.com/exercises/name/${testing}`,
//   headers: {
//     'X-RapidAPI-Key': process.env.APIKEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


const options = {
  method: 'GET',
  url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
  params: {
    query: 'pasta',
    number: '10'
  },
  headers: {
    'X-RapidAPI-Key': '36af0db4d4msh1d00358b75b0ddbp16fb81jsnbf8bd5322c96',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


// const options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
//   params: {tags: '', number: '1'},
//   headers: {
//     'X-RapidAPI-Key': '36af0db4d4msh1d00358b75b0ddbp16fb81jsnbf8bd5322c96',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data.recipes[0]);
// }).catch(function (error) {
// 	console.error(error);
// });






// const options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete',
//   params: {number: '10', query:'chicken'},
//   headers: {
//     'X-RapidAPI-Key': '36af0db4d4msh1d00358b75b0ddbp16fb81jsnbf8bd5322c96',
//     'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
# Just Do It
Just Do It is a Node App that uses two APIs; one is a exercise API used to find 1300 different exercises and the other is a recipe API that has thousands of recipes and their individual information. User's can search different exercises/recipes and save them to their profile for future use. Users may also remove certain exercises/recipes depending on their needs and they can view each of their saved exercises/recipes individually through this application. 

Workout API: https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/
Recipe API: https://rapidapi.com/spoonacular/api/recipe-food-nutrition/


## Installation Instructions
1. `Fork` and `clone` this repo onto your local machine
2. Install all dependencies listed inside of `package.json`
```
nmp install
```
3. Grab an API key by following the websites that are linked above. Place your keys inside of `.env` file and set it to the variable `APIKEY` and `RECIPEAPIKEY`.
4. npx sequelize-cli db:create just-do-it
5. npx sequelize-cli db:migrate
6. Run `npm start` to start up server and head over to `localhost:3000` on your browser




## User Stories
1. As a user, I want to search for different exercises and recipes and be able to view each individually. 
2. As a user, I want to be able to add my desired exercises and recipes to my database and be able to view all the ones I have saved.
3. As a user, I want to be able to remove certain exercises and recipes in the future if needed.

## Wireframes
Follow this link to view intial idea of application with a wireframe.
The numbers on the name of the pages indicate the depth of the routes. (eg. 1 is initial, 2 is from 1, 3 is from 2)
https://www.figma.com/file/injLixS2idR0Bd3O5hlX1k/Node-Workout-App?node-id=0%3A1
## Application Routes


## File Structure

```text
├── config
│   └── config.json
│   └── ppConfig.json
├── controllers
│   └── auth.js
│   └── recipes.js
│   └── workouts.js
├── middleware
│   └── isLoggedIn.js
├── models
│   └── index.js
│   └── recipe.js
│   └── user.js
│   └── workout.js
├── node_modules
│   └── ...
├── public
│   └── assets
│   └── css
│       └── style.css        ....
├── test
│   └── auth.test.js
│   └── index.test.js
│   └── profile.test.js
│   └── user.test.js
├── views
│   └── auth
│       └── login.ejs
│       └── signup.ejs
└── partials
│       └── alerts.ejs
└── recipes
│   └── allrecipes.ejs
│   └── search.ejs
│   └── searchresult.ejs
│   └── viewone.ejs
└── workouts
│   └── allworkouts.ejs
│   └── new.ejs
│   └── search.ejs
│   └── show.ejs
│   └── workoutplan.ejs
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── server.js
```
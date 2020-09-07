module.exports = app =>{
    const recipes = require("../controllers/recipeController");

    var router = require('express').Router();

    //Add selected recipes to DB
    router.post("/add_recipes", recipes.add);

    app.use('/api/recipes', router);
};
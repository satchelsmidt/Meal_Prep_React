const db = require("../models");

const Recipe = db.recipes;
const Op = db.Sequelize.Op;

//create single plan route -> modify to tie to logged in user (if user is logged in)
exports.add = (req, res) => {

    //create recipe
    const recipe = {
        recipe_title: req.body.recipeTitle,
        recipe_image: req.body.recipeImage,
        recipe_link: req.body.recipeLink,
        recipe_cuisines: req.body.recipeCuisines,
        recipe_cook_time: req.body.recipeCookTime,
        recipe_prep_time: req.body.recipePrepTime,
        recipe_total_time: req.body.recipeTotalTime,
        recipe_servings: req.body.recipeServings,
        recipe_ingredients: req.body.recipeIngredients,
        recipe_steps: req.body.recipeSteps,
    }
    


    //save plan to db
    Recipe.create(recipe).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log('this is the err when creating plan: ', err)
        res.status(500).send({
            message: err.message || "Unable to create plan."
        });
    });
};








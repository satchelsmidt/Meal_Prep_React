const db = require("../models");

const Plan = db.plans;
const PlanRecipes = db.recipe_plans
const Op = db.Sequelize.Op;

//create single plan route -> modify to tie to logged in user (if user is logged in)
exports.create = (req, res) => {
    //TODO: Request Validation (require certain fields when creating)
    //validate request
    //include if statement for content of plan

    //create plan
    const plan = {
        userId: req.body.userId,
        startDate: req.body.startDate,
        planDates: req.body.planDates,
        planTimes: req.body.planTimes,
        planCuisines: req.body.planCuisines,
        planIntolerances: req.body.planIntolerances,
        planDiets: req.body.planDiets
    }

    //save plan to db
    Plan.create(plan).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log('this is the err when creating plan: ', err)
        res.status(500).send({
            message: err.message || "Unable to create plan."
        });
    });
};

exports.planRecipes = (req, res) => {
    console.log('request from planrecipes: ', req)

    const planRecipe = {
        planId: req.body.data.planId,
        recipeId: req.body.data.recipeId
    }

    PlanRecipes.create(planRecipe).then(function (data) {
        res.json(data)
    }).catch((err) => {
        console.log('this is the err when creating Plan Recipes: ', err)
        res.status(500).send({
            message: err.message || "Unable to create plan Recipes."
        });
    });
}

//retrieve all plans route -> modify to retrieve all plans for logged in user
exports.findAll = (req, res) => {
    Plan.findAll().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Unable to retrieve plans"
        })
    })
};

// //find one plan with id route
exports.findOne = (req, res) => {
    const id = req.params.id;

    Plan.findByPk(id).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "Unable to retrieve plan with id=" + id
        });
    });
};

// update plan by using id -> modify to update plan with user id if user decides to create account/login after plan is created
// exports.update = (req, res) = -> {

// }

//Delete plan using id
exports.delete = (req, res) => {
    const id = req.params.id;

    Plan.destroy({
        where: { id: id }
    }).then((num) => {
        if (num === 1) {
            res.send({
                message: "Plan deleted"
            });
        } else {
            res.send({
                message: "Unable to delete plan with id=" + id + ", check that plan exists"
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Unable to delete plan with id=" + id
        });
    });
};

//Goal Routes:
//create plan tied to current user
//route to return most recent user plan (called on create plan page load) -> may not need w react
// 






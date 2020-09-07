const db = require("../models");

const Plan = db.plans;
const PlanRecipes = db.recipe_plans
const Recipe = db.recipes;

//create single plan route -> modify to tie to logged in user (if user is logged in)
exports.create = (req, res) => {
    //TODO: Request Validation (require certain fields when creating)

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
        console.log('Create Plan Error: ', err)
        res.status(500).send({
            message: err.message || "Unable to create plan."
        });
    });
};

exports.planRecipes = (req, res) => {
    const planRecipe = {
        planId: req.body.data.planId,
        recipeId: req.body.data.recipeId
    }

    PlanRecipes.create(planRecipe).then(function (data) {
        res.json(data)
    }).catch((err) => {
        console.log('Create Plan/Recipes Error: ', err)
        res.status(500).send({
            message: err.message || "Unable to create plan recipes."
        });
    });
}

//find one plan with id route (include recipe data tied to this plan)
exports.findOne = (req, res) => {
    const id = req.params.planId;

    Plan.findByPk(id, { include: [{ model: Recipe }] }).then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log('Find Plan error: ', err)
        res.status(500).send({
            message: err.message || "Unable to retrieve plan with id=" + id
        });
    });
};

//find all plans for logged in user (based on id)
exports.findAll = (req, res) => {
    const id = req.params.userId;

    Plan.findAll(
        { where: { userId: id } }).then((data) => {
            res.send(data);
        }).catch((err) => {
            console.log('Find User Plans Error: ', err)
            res.status(500).send({
                message: err.message || "Unable to retrieve user plans"
            })
        });
};


//Delete plan by id
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Plan.destroy({
//         where: { id: id }
//     }).then((num) => {
//         if (num === 1) {
//             res.send({
//                 message: "Plan deleted"
//             });
//         } else {
//             res.send({
//                 message: "Unable to delete plan with id=" + id + ", check that plan exists"
//             });
//         }
//     }).catch((err) => {
//         res.status(500).send({
//             message: err.message || "Unable to delete plan with id=" + id
//         });
//     });






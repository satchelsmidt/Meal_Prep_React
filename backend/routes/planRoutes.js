module.exports = app => {
    const plans = require("../controllers/planController");

    var router = require('express').Router();

    //Create plan
    router.post("/create_plan", plans.create);

    //add recipes tied to one plan
    router.post("/plan_recipes", plans.planRecipes)

    //Return plan that matches id in url
    router.get("/single_plan/:planId", plans.findOne)

    //Return plan that matches id in url
    router.get("/all_plans/:userId", plans.findAll)
    


    //Current Plan
    router.post("/current_plan", plans.create);

    //Retrieve all plans
    router.get("/", plans.findAll);

    //Find plan by id
    // router.get("/:id", plans.findOne);

    //Delete plan by id
    router.delete("/:id", plans.delete);

    app.use('/api/plans', router);
};
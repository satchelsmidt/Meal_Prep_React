module.exports = app =>{
    const plans = require("../controllers/planController");

    var router = require('express').Router();

    //Create plan
    router.post("/", plans.create);

    //Retrieve all plans
    router.get("/", plans.findAll);

    //Find plan by id
    router.get("/:id", plans.findOne);

    //Delete plan by id
    router.delete("/:id", plans.delete);

    app.use('/api/plans', router);
};
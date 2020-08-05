module.exports = app => {
    const auth = require("../controllers/authController");

    var router = require('express').Router();

    //User Login
    router.post("/login", auth.login);

    //User Signup
    router.post("/signup", auth.signup);

    //Find all Users
    router.get("/allUsers", auth.allUsers);

    app.use('/api/auth', router);
};
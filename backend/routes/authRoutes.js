module.exports = app => {
    const auth = require("../controllers/authController");
    var router = require('express').Router();
    var passport = require('../config/passport')

    //User Login
    router.post("/login", passport.authenticate('login'), auth.login);

    //User Signup
    router.post("/signup", passport.authenticate('signup'), auth.signup);

    //Find all Users
    router.get("/allUsers", auth.allUsers);

    //Route to check active session
    router.get('/session', auth.session);

    //Route to logout user
    router.get('/logout', auth.logout);

    app.use('/api/auth', router);
};
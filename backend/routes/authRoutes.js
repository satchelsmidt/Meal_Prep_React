module.exports = app => {
    const auth = require("../controllers/authController");
    var router = require('express').Router();

    //User Login
    router.post("/login", auth.login);

    //User Signup
    router.post("/signup", auth.signup);

    //Find all Users
    router.get("/allUsers", auth.allUsers);

    // this route is just used to get the user basic info
    router.get('/user', (req, res, next) => {
        console.log('===== user!!======')
        // console.log('THE REQUEST: ', req)
        // console.log('THE RESPONSE: ', res)
        if (req.user) {
            console.log('OPTION ONE REACHED')
            return res.json({ user: req.user })
        } else {
            console.log('OPTION TOWO REACHED')
            console.log('returning this stuff: ', res.json({ user: null }))
            // return res.json({ user: null })
        }
    })

    app.use('/api/auth', router);
};
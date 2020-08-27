module.exports = app => {
    const auth = require("../controllers/authController");
    var router = require('express').Router();
    var passport = require('../config/passport')

    //User Login
    // router.post("/login", (req, res, next) => {
    //     console.log('inside the POST /login function')
    //     passport.authenticate('login', (err, user, info) => {
    //         console.log('inside passport.authenticate() function')
    //         console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
    //         console.log(`req.user: ${JSON.stringify(req.user)}`)
    //         req.login(user, (err) => {
    //             console.log('inside req.login() callback')
    //             console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
    //             console.log(`req.user: ${JSON.stringify(req.user)}`)
    //             const loggedIn = req.user ? true : false
    //             req.session.save()
    //             return res.send(loggedIn)
    //         })
    //     })(req, res, next)
    // })
    router.post("/login", passport.authenticate('login'), (req, res) => {
        console.log('Callback after passport login:')
        req.session.save(() => {
            res.json(req.user)
        })
    })

    //May not need to call this or anything
    //    ,auth.login)

    //User Signup
    router.post("/signup", passport.authenticate('signup'), auth.signup);

    //Find all Users
    router.get("/allUsers", auth.allUsers);

    // this route is just used to get the user basic info
    router.get('/user', (req, res, next) => {
        console.log('inside our GET user callback')
        console.log('our request user: ', req.user)
        console.log(`is current user authenticated? ${req.isAuthenticated()}`)
        if (req.isAuthenticated()) {
            console.log('We have a valid session')
            res.send(req.user)
        }
        else {
            return status(400)
        }
    })

    router.get('/logout', (req, res, next) => {
        console.log('inside logout function')
        if (req.isAuthenticated()) {
            console.log('logging out user...')
            req.logout()
            req.session.destroy(function (err) {
                if (err) { return next(err); }
                // The response should indicate that the user is no longer authenticated.
                return res.send({ authenticated: req.isAuthenticated() });
            });
        }
        else {
            return res.status(400)
        }
    })

    app.use('/api/auth', router);
};
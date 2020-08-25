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
        // console.log('User returned: ', req.user)
        // console.log('Session returned: ', req.session)
        // res.json(req.user)

        const user = JSON.parse(JSON.stringify(req.user)) // hack
        console.log('OUR NEW USER: ', user)
        const cleanUser = Object.assign({}, user)
        // if (cleanUser.local) {
        // 	console.log(`Deleting ${cleanUser.local.password}`)
        // 	delete cleanUser.local.password
        // }
        console.log('OUR   CLEAN   USER: ', cleanUser)

        //SHOULD HELP FIX ERROR? 
        req.session.save(() => {
            res.json(req.user)
        })

        
        // console.log('we have no response apparently: ', res)
        // res.json({ user: cleanUser })

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
            console.log('User successfully authenticated')
            res.send(req.isAuthenticated())
        } else {
            console.log('something went wrong')
            res.send(false)
        }
    })

    app.use('/api/auth', router);
};
const db = require("../models");
const User = db.users;

//user login route 
exports.login = (req, res) => {
    res.json(req.user.id)
};

//user signup route
exports.signup = (req, res) => {
    res.json(req.user.id)
};

//logic to search for all users in db
exports.allUsers = (req, res) => {
    User.findAll().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Unable to retrieve users"
        })
    })
}

//logic to check if we have an existing valid session
exports.session = (req, res) => {
    console.log('Request body from session check: ', req)
    console.log('current user: ', req.user)
    console.log(`is current user authenticated? ${req.isAuthenticated()}`)
    if (req.isAuthenticated()) {
        console.log('We have a valid session')
        res.json(req.user.id)
    }
    else {
        return res.status(400).send('No valid session')
    }
}

//logic to log user out
exports.logout = (req, res, next) => {
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
        return res.status(400).send('Not able to logout')
    }
}




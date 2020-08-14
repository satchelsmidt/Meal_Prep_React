const db = require("../models");
const User = db.users;

//user login route 
exports.login = (req, res) => {
    res.send(req.body)
    console.log('The login Request therein: ', req)
};

//user signup route
exports.signup = (req, res) => {
    const user = {
        username: req.body.params.email,
        password: req.body.params.password
    }

    User.create(user).then((data) => [
        res.send(data)
    ]).catch((err) => {
        res.status(500).send({
            message: err || "Unable to create new user."
        });
    });
};


exports.allUsers = (req, res) => {
    User.findAll().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Unable to retrieve users"
        })
    })
}





const db = require("../models");
const User = db.users;

//user login route 
exports.login = (req, res) => {
    console.log('The login Request therein: ', req)

    console.log('WE DID IT!')
    res.send(req.body)
};

//user signup route
exports.signup = (req, res) => {
    const user = {
        username: req.body.params.username,
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





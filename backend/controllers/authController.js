const db = require("../models");

const User = db.users;

//user login route 
exports.login = (req, res) => {
    console.log('MADE IT TO THIS (login)')
    // res.send("You made it")
    res.send(req.body)
    console.log('The login Request therein: ', req)
};

//user signup route
exports.signup = (req, res) => {
    console.log('MADE IT TO THIS (Signup)')

    // console.log('The login Request therein: ', req.body)


    const user = {
        username: req.body.params.email,
        password: req.body.params.password
    }

    User.create(user).then((data) => [
        res.send(data)
    ]).catch((err) => {
        // console.log('this is the err: ', err)
        res.status(500).send({
            message: err.message || "Unable to create new user."
        });
    });

    // console.log('user details: ', user)

    // res.send("You made it")
    // res.send(req.body)
    // console.log('The login Request therein: ', req)
    // res.send(data)
};


exports.allUsers = (req, res) => {
    User.findAll().then((data)=>{
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Unable to retrieve users"
        })
    })
}





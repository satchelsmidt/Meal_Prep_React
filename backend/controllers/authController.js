const db = require("../models");
const User = db.users;
// const Session = db.users;

//user login route 
exports.login = (req, res) => {
    // console.log('The login Request therein: ', req)
    // console.log('Finished Login with this data: ', res)

    // req.logIn(req, function(err) {
    //     if (err) { return next(err); }
    //     console.log('This is our USER: ', req)
    //   });
    // console.log('WE DID IT!')
    console.log('The final login function, or something')
    res.json(req.user)
};

//user signup route
exports.signup = (req, res) => {
    console.log('Finished Signup with this data: ', res)
    // res.send(res)
    // console.log('SIGNUP REQ: ', req)
    // console.log('SIGNUP RES: ', res)
    // console.log('you made it, good job')
    // req.session.username = 'WHAT IS MY NAME'
    // console.log('we have a SESSIONS: ', req.session)
    // console.log('we have a BIG RE: ', req)
    // res.send(req.body)
    res.send(req.user)

    // const user = {
    //     username: req.body.params.username,
    //     password: req.body.params.password
    // }

    // User.create(user).then((data) => [
    //     res.send(data)
    // ]).catch((err) => {
    //     res.status(500).send({
    //         message: err || "Unable to create new user."
    //     });
    // });
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





var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username and password
passport.use('login', new LocalStrategy(
  {
    passReqToCallback: true
  },
  // Our user will sign in using a custom username
  // {
  //   usernameField: "username"
  // },
  function (req, username, password, done) {
    //Check db to see if user exists with username
    db.User.findOne({
      where: {
        username: username
      }
    }).then((dbUser) => {
      // If there's no user with the given username
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect username."
        });
      }
      // If there is a user with the given username, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));


passport.use('signup', new LocalStrategy({
  passReqToCallback: true
},
  function (req, username, password, done) {
    findOrCreateUser = function () {
      // find a user in Mongo with provided username
      db.User.findOne({
        where: {
          username: username
        }
      }).then((dbUser) => {
        // already exists
        if (dbUser) {
          console.log('User already exists');
          return done(null, false,
            req.flash('message', 'User Already Exists'));
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User();
          // set the user's local credentials
          newUser.username = username;
          newUser.password = password;
          // newUser.email = req.param('email');
          // newUser.firstName = req.param('firstName');
          // newUser.lastName = req.param('lastName');

          // save the user
          newUser.save(function (err) {
            if (err) {
              console.log('Error in Saving user: ' + err);
              throw err;
            }
            console.log('User Registration succesful');
            return done(null, newUser);
          });
        }
      });
    };

    // Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  }));


// In order to help keep authentication state across HTTP requests, sequelize needs to serialize and deserialize the user. Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
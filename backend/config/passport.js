var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const User = db.users;

// Telling passport we want to use a Local Strategy. In other words, we want login with a username and password
passport.use('signup', new LocalStrategy(
  {
    passReqToCallback: true
  },

  function (req, username, password, done) {
    //Check db to see if user exists with username
    User.findOne({
      where: {
        username: username
      }
    }).then((dbUser) => {
      // If user already exists
      if (dbUser) {
        return done(null, false, {
          message: "Email already taken."
        });
      }
      //Otherwise create new user
      else {
        const user = {
          username: username,
          password: password
        };

        User.create(user).then((newUser) => {
          //creation failed
          if (!newUser) {
            return done(null, false, {
              message: "Unable to create new user."
            });
          }
          //creation succeeded
          if (newUser) {
            console.log("Passport created new user")
            return done(null, newUser);
          }
        })
      }
    })
  }
));


// Telling passport we want to use a Local Strategy. In other words, we want login with a username and password
passport.use('login', new LocalStrategy(
  function (username, password, done) {
    //Check db to see if user exists with username
    User.findOne({
      where: {
        username: username
      }
    }).then((dbUser) => {
      // If there's no user with the given username
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect credentials."
        });
      }
      //Verify that given password matches db hash
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    }).catch((err) => {
      return done(err)
    });
  }
));

// In order to help keep authentication state across HTTP requests, sequelize needs to serialize and deserialize the user. Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({
    where: {id: id}
  }).then((user) => {
    if (user) {
      done(null, user)
    } else {
      done(user.errors, null);
    }
  });
});

// Exporting our configured passport
module.exports = passport;
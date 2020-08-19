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
      console.log("THIS IS THE USERNAME REQUEST: ", username)
      console.log("THIS IS THE PASSWORD REQUEST: ", password)
      console.log("THIS IS THE SQL REQUEST: ", req)
      console.log("THIS IS THE D B User: ", dbUser)
      // If user already exists
      if (dbUser) {
        console.log('REACHED FIRST OPTION')
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
            console.log('REACHED SECOND OPTION')
            return done(null, false, {
              message: "Unable to create new user."
            });
          }
          //creation succeeded
          if (newUser) {
            console.log('REACHED THIRD OPTION')
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
passport.serializeUser(function (user, done) {
  console.log("SERIALIZE RUN")
  console.log('user: ', user)
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log("DE - SERIALIZE RUN")
  console.log('user OBJ: ', obj)
  User.findById(id).then(function (user) {
    if (user) {
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  });
});

// Exporting our configured passport
module.exports = passport;
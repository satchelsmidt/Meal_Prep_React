//install needed deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');

// Configure Passport
const passport = require("./config/passport")

//Enable sessions
const session = require('express-session');

//initialize app w/ express
const app = express();

//use Sequelize db
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log('dropped and synced db')
});

//TODO: add logic to enable/disable certain cors settings based on dev/prod environment
// const domains = ["http://localhost:3000", "http://localhost:8080/"]

var corsOptions = {
  // origin: function (origin, callback) {
  //   if (domains.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     console.log('this is origin: ', origin)
  //     console.log('this is callback: ', callback)
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // },
  credentials: true,
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"]
}

//enable cors for all requests
app.use(cors(corsOptions));
app.use(cookieParser())

//enable request parsing for app/json and app/x-www-form-urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Initialize passport/session modules 
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

//Require api routes
require("./routes/planRoutes")(app)
require("./routes/authRoutes")(app)
require("./routes/recipeRoutes")(app)

//Include logic to handle deployed app, link index.html to server
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../meal-prep-react/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../meal-prep-react/build/index.html'));
  });
  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../meal-prep-react/build', 'index.html'));
  // });
// }
// else{
  // app.use(express.static(path.join(__dirname, 'build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../meal-prep-react/public/index.html'));
//   });
// }

//initialize PORT var, set app listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
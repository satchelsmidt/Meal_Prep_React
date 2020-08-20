//install needed deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const flash = require(`connect-flash`);

// Configure Passport
const passport = require("./config/passport")

//Enable sessions
const session = require('express-session');
// const SessionStore = require('express-session-sequelize')(session.Store);

//initialize app w/ express
const app = express();

//use Sequelize db
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log('dropped and synced db')
});

//create session store in db
// const sequelizeSessionStore = new SessionStore({
//     db: db.sequelize
// })

//enable cors for all requests
app.use(cors());
app.use(cookieParser())

//enable request parsing for app/json and app/x-www-form-urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Initialize passport/session modules 
app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    // store: sequelizeSessionStore
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())

app.get('/signup', function(req, res, next) {
    console.log('a simple req:', req.user)
    // console.log('a simple req:', req)
    // console.log(req.session.passport.user)

    // if (req.session) {
    //   console.log('session exists')
    //   console.log('session: ', req.session)
    //   res.end()
    // } else {
    //     console.log('session DOES NOT exist')
    //   res.end('welcome to the session demo. refresh!')
    // } 
  })

//Require api routes
require("./routes/planRoutes")(app)
require("./routes/authRoutes")(app)

//initialize PORT var, set app listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
//install needed deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// Configuring Passport
// const passport = require("./config/passport")
// var session = require('express-session');



//initialize app w/ express
const app = express();

// app.use(session({
//     secret: 'mySecretKey',
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());




//enable cors for all requests
app.use(cors());

//enable request parsing for app/json and app/x-www-form-urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use((req, res, next) => {
//     console.log('req.expressSession', req.session);
//     return next();
// });

// app.post('/api/auth/signup', (req, res) => {
//     console.log('user signup');
//     // console.log('OUR SESSION CURRENTLY: ', req.session);
//     req.session.username = req.body.params.email;
//     // console.log('OUR SESSION AFTERRR: ', req.session);
//     req.session.save()
//     res.end()
// })

//create basic route
app.get('/', (req, res) => {
    res.json({ message: "welcome to application" })
});

//use Sequelize db
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log('dropped and synced db')
});

//Require api routes
require("./routes/planRoutes")(app)
require("./routes/authRoutes")(app)

//initialize PORT var, set app listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
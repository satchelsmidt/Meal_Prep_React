//install needed deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');
const cookieParser = require('cookie-parser')
const flash = require(`connect-flash`);

// Configure Passport
const passport = require("./config/passport")

//Enable sessions
const session = require('express-session');
// const FileStore = require('session-file-store')(session)
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

const domains = ["http://localhost:3000", "http://localhost:8080"]

//enable cors for all requests
app.use(cors());
// app.use(cors({
//     origin: function(origin, callback){
//       // allow requests with no origin 
//       // (like mobile apps or curl requests)
//       if(!origin) return callback(null, true);
//       if(domains.indexOf(origin) === -1){
//         var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//         return callback(new Error(msg), false);
//       }
//       console.log('reached a success stage in CORS request')
//       return callback(null, true);
//     }
//   }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); 
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  

app.use(cookieParser())

//enable request parsing for app/json and app/x-www-form-urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Initialize passport/session modules 
app.use(session({
    // genid: (req) => {
    //     console.log('inside session middleware genid function')
    //     console.log(`Request object sessionID from client: ${req.sessionID}`)
    //     return uuidv4()
    // },
    // store: new FileStore(),
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false,
    // cookie: {
	//     httpOnly: true,
	//     expires: cookieExpirationDate // use expires instead of maxAge
	// }
    // store: sequelizeSessionStore
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash())

app.get('/', (req, res, next) => {
    console.log('is this mother logged in?: ', req.isAuthenticated())
    // console.log('OUR REQUEST AFTER LOGGING IN:', req)
    console.log('OUR USER AFTER LOGGING IN:', req.user)
    console.log('OUR SESSION:', req.session)
})

//Require api routes
require("./routes/planRoutes")(app)
require("./routes/authRoutes")(app)

//initialize PORT var, set app listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
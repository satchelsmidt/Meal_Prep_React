//install needed deps
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

//initialize app w/ express
const app = express();

//enable cors for all requests
app.use(cors());

//enable request parsing for app/json and app/x-www-form-urlencoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//create basic route
app.get('/', (req, res) => {
    res.json({message: "welcome to application"})
});

//use Sequelize db
const db = require("./models");
db.sequelize.sync({force: true}).then(()=>{
    console.log('dropped and synced db')
});

//Require api routes
require("./routes/planRoutes")(app)

//initialize PORT var, set app listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
});
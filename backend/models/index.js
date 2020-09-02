const dbConfig = require("../config/db/config");

//import + initialize Sequelize using config params
const Sequelize = require("sequelize");

//TODO: make this work when you deploy
// const env = process.env.NODE_ENV || 'development';
// const deployConfig = require(__dirname + '/../config/config.json')[env];

// let sequelize;

// if (deployConfig.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
// }

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//use data models
db.users = require("./user")(sequelize, Sequelize)
db.plans = require("./plan")(sequelize, Sequelize)
db.recipes = require("./recipe")(sequelize, Sequelize)
db.recipe_plans = require("./recipePlan")(sequelize, Sequelize)

//Create associations between data models
db.users.hasMany(db.plans,
    {
        as: 'plans',
        onDelete: "cascade"
    });
db.plans.belongsTo(db.users, {
    foreignKey: 'userId',
    as: 'user'
});
db.plans.belongsToMany(db.recipes, {
    through: db.recipe_plans,
})
db.recipes.belongsToMany(db.plans, {
    through: db.recipe_plans,
})

module.exports = db;
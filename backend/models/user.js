var bcrypt = require("bcryptjs");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        // Giving the USER model a username and a password that we store
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        }
        ,
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
        {
            timestamps: false
        });

    //Function to verify user password matches hashed record on login
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    //Hook that runs before we add user to db, hashes and stores password
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    //Associating each user with a number of plans made by them. Deleting a user deletes all associated plans
    User.associate = function (models) {
        User.hasMany(models.Plan, {
            onDelete: "cascade"
        });
    };


    return User;
};
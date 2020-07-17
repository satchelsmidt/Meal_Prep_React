module.exports = (sequelize, Sequelize) => {
    const Plan = sequelize.define("plan", {
        startDate: {
            type: Sequelize.STRING,
            allowNull: true
        },
        endDate:
        {
            type: Sequelize.STRING,
            allowNull: true
        },
        planDates:
        {
            type: Sequelize.STRING,
            allowNull: true
        },
        planTimes:
        {
            type: Sequelize.STRING,
            allowNull: true
        },
        maxMins:
        {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        totalMins:
        {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
        {
            timestamps: false
        });

    // TODO: work on associating plan with appropriate schemas + creating models for user, recipes

    //   Plan.associate = function (models) {
    //     // We're saying that a Plan should belong to a User
    //     // A Plan can't be created without a User due to the foreign key constraint
    //     Plan.belongsTo(models.User, {
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });

    //     Plan.belongsToMany(models.Recipe, {
    //       through: 'recipe_plans',
    //     })
    //   };

    return Plan;
};
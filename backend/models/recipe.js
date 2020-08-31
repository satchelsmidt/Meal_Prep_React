module.exports = function (sequelize, Sequelize) {
    var Recipe = sequelize.define("recipe", {
      recipe_title: Sequelize.STRING,
      recipe_image: Sequelize.STRING,
      recipe_link: Sequelize.STRING,
      recipe_cuisines: Sequelize.STRING,
      recipe_cook_time: Sequelize.STRING,
      recipe_prep_time: Sequelize.STRING,
      recipe_total_time: Sequelize.STRING,
      recipe_servings: Sequelize.STRING,
      recipe_ingredients: Sequelize.TEXT,
      recipe_steps: Sequelize.TEXT,
    },
      {
        timestamps: false
      });
  
    // Recipe.associate = function (models) {
  
    //   Recipe.belongsToMany(models.Plan, {
    //     through: 'recipe_plans',
    //   })
    // }
  
    return Recipe;
  };
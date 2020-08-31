import { axiosRecipesInstance } from '../config/axios'

export function addRecipes(title, image, link, cuisines, cookTime, prepTime, totalTime, servings, ingredients, steps) {
    return axiosRecipesInstance.post('/add_recipes', {
        recipeTitle: title,
        recipeImage: image,
        recipeLink: link,
        recipeCuisines: JSON.stringify(cuisines),
        recipeCookTime: cookTime,
        recipePrepTime: prepTime,
        recipeTotalTime: totalTime,
        recipeServings: servings,
        recipeIngredients: JSON.stringify(ingredients),
        recipeSteps: JSON.stringify(steps),
    }).then((res) => ({ success: true, message: 'Successfully added new recipe', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}
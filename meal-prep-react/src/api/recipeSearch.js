import { axiosFoodInstance } from '../config/axios'

const apiKey = process.env.REACT_APP_API_KEY

export default function recipeSearch(cuisines, intolerances, diet, offset) {

    //modify data before request
    let cuisinesString = cuisines.join(',')
    let intolerancesString = intolerances.join(',')
    let dietString = diet.join(',')

    return axiosFoodInstance.get('', {
        params: {
            apiKey,
            cuisine: cuisinesString,
            intolerances: intolerancesString,
            diet: dietString,
            number: 2,
            offset: offset,
            sort: "popularity",
            addRecipeInformation: true,
            fillIngredients: true
        }
    })
}
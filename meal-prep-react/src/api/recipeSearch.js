import { axiosFoodInstance } from '../config/axios'

const apiKey = process.env.REACT_APP_API_KEY

export default function recipeSearch(cuisines, intolerances, diet, offset) {

    console.log('THIS IS OUR API KEY IT SHOULD NOT BE HIDDEN: ', apiKey)

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
            number: 3,
            offset: offset,
            sort: "popularity",
            addRecipeInformation: true,
            fillIngredients: true
        }
    })
}
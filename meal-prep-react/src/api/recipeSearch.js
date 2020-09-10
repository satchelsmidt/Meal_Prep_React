import { axiosFoodInstance } from '../config/axios'

const apiKey = process.env.REACT_APP_API_KEY
console.log('THIS IS OUR API KEY IT SHOULD NOT BE HIDDEN (first try): ', apiKey)

export default function recipeSearch(cuisines, intolerances, diet, offset) {
    console.log('THIS IS OUR API KEY IT SHOULD NOT BE HIDDEN (second try): ', apiKey)

    //modify data before request
    let cuisinesString = cuisines.join(',')
    let intolerancesString = intolerances.join(',')
    let dietString = diet.join(',')

    return axiosFoodInstance.get('', {
        params: {
            apiKey: apiKey,
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
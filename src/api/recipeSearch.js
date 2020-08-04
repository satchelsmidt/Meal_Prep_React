import { axiosFoodInstance } from '../config/axios'

const apiKey = process.env.REACT_APP_API_KEY

export default function recipeSearch(cuisines, intolerances, diet) {
    return axiosFoodInstance.get('', {
        params: {
            apiKey,
            cuisines,
            intolerances,
            diet,
            number: 10,
            sort: "random"
        }
    })
}
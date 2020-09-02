import { axiosPlansInstance } from '../config/axios'

export function createPlan(
    user, 
    start, dates, times, cuisines, intolerances, diets, recipes) {
    return axiosPlansInstance.post('/create_plan', {
        userId: user,
        startDate: start,
        planDates: JSON.stringify(dates),
        planTimes: JSON.stringify(times),
        planCuisines: JSON.stringify(cuisines),
        planIntolerances: JSON.stringify(intolerances),
        planDiets: JSON.stringify(diets),
        // planRecipes: recipes
    }).then((res) => ({ success: true, message: 'Successfully created new plan', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}

export function addPlanRecipes(data) {
    console.log('data from plan recipes: ', data)
    return axiosPlansInstance.post('/plan_recipes', {
        data
    }).then((res) => ({ success: true, message: 'Successfully created new plan', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}
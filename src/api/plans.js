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
    }).then((res) => ({ success: true, message: 'Successfully created new plan', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}

export function addPlanRecipes(data) {
    return axiosPlansInstance.post('/plan_recipes', {
        data
    }).then((res) => ({ success: true, message: 'Successfully created new plan', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}

export function findSinglePlan(id) {
    return axiosPlansInstance.get('/single_plan/' + id).then((res) => ({ success: true, message: 'Found plan by ID', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}

export function findAllUserPlans(id) {
    return axiosPlansInstance.get('/all_plans/' + id).then((res) => ({ success: true, message: 'Found all plans for current user', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}
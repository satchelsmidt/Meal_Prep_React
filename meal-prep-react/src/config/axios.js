import axios from 'axios';
import { config } from './Constants'

var appUrl = config.url.API_URL

export const axiosFoodInstance = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/complexSearch",
    timeout: 50000,
});

export const axiosAuthInstance = axios.create({
    baseURL: appUrl + "/auth",
    timeout: 50000,
    withCredentials: true
});

export const axiosPlansInstance = axios.create({
    baseURL: appUrl + "/plans",
    timeout: 50000,
});

export const axiosRecipesInstance = axios.create({
    baseURL: appUrl + "/recipes",
    timeout: 50000,
});
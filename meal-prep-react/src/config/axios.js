import axios from 'axios';
import { config } from './Constants'

var appUrl = config.url.API_URL

export const axiosFoodInstance = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/complexSearch",
    timeout: 50000,
});

//TODO: configure dev environment to auto pull correct axios url for requests
export const axiosAuthInstance = axios.create({
    // baseURL: "http://localhost:8080/api/auth",
    baseURL: appUrl + "/auth",
    timeout: 50000,
    withCredentials: true
});

export const axiosPlansInstance = axios.create({
    // baseURL: "http://localhost:8080/api/plans",
    baseURL: appUrl + "/plans",
    timeout: 50000,
});

export const axiosRecipesInstance = axios.create({
    // baseURL: "http://localhost:8080/api/recipes",
    baseURL: appUrl + "/recipes",
    timeout: 50000,
});
import axios from 'axios';

export const axiosFoodInstance = axios.create({
    baseURL: "https://api.spoonacular.com/recipes/complexSearch",
    timeout: 50000,
});

//TODO: configure dev environment to auto pull correct axios url for requests
export const axiosAuthInstance = axios.create({
    // baseURL: "http://localhost:8080/api/auth",
    baseURL: "https://polar-basin-68400.herokuapp.com/api/auth",
    timeout: 50000,
    withCredentials: true
});

export const axiosPlansInstance = axios.create({
    // baseURL: "http://localhost:8080/api/plans",
    baseURL: "https://polar-basin-68400.herokuapp.com/api/plans",
    timeout: 50000,
});

export const axiosRecipesInstance = axios.create({
    // baseURL: "http://localhost:8080/api/recipes",
    baseURL: "https://polar-basin-68400.herokuapp.com/api/recipes",
    timeout: 50000,
});
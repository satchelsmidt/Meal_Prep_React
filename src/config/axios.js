import axios from 'axios';

export const axiosFoodInstance = axios.create({
        baseURL: "https://api.spoonacular.com/recipes/complexSearch",
        timeout: 50000,
    });

export const axiosAuthInstance = axios.create({
        baseURL: "http://localhost:8080/api/auth",
        timeout: 50000,
        withCredentials: true
    });
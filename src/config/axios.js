import axios from 'axios';

export const axiosFoodInstance = axios.create({
        baseURL: "https://api.spoonacular.com/recipes/complexSearch",
        timeout: 50000,
    });

export const axiosAuthInstance = axios.create({
        baseURL: "http://localhost:3000",
        timeout: 50000,
    });

// export default axiosInstance;

// module.exports = {
//     axiosFoodInstance: axiosFoodInstance,
//     axiosAuthInstance: axiosAuthInstance
// }
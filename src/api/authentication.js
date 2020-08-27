import { axiosAuthInstance } from '../config/axios'

export function login(username, password) {
    return axiosAuthInstance.post('/login', {
        username,
        password,
    }).then((res) => ({ success: true, message: 'Successful Login', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}

export function signup(username, password) {
    return axiosAuthInstance.post('/signup', {
        username,
        password,
    }).then((res) => ({ success: true, message: 'Successful Signup', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}

export function checkSession() {
    return axiosAuthInstance.get('/user')
        .then((res) => ({ success: true, message: 'Valid Session', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}

export function logout() {
    return axiosAuthInstance.get('/logout')
        .then((res) => ({ success: true, message: 'Logged out Successfully', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}
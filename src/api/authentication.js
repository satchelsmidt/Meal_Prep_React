import { axiosAuthInstance } from '../config/axios'

export function login(email, password) {
    return axiosAuthInstance.post('/login', {
        params: {
            email,
            password,
        }
    }).then((res)=>({ success: true, message: 'Successful Login', data: res.data })).catch((res) => ({ success: false, message: null, data: res }))
}

export function signup(email, password) {
    return axiosAuthInstance.post('/signup', {
        params: {
            email,
            password,
        }
    }).then((res)=>({ success: true, message: 'Successful Signup', data: res.data })).catch((res) => ({ success: false, message: null, data: res }))
}
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
    }).then((res)=>({ success: true, message: 'Successful Signup', data: res.data })).catch((res) => ({ success: false, message: res.response.data.message.errors[0], data: res }))
}

export function checkSession() {
    return axiosAuthInstance.get('/user')
    .then((res)=>{
        if(res.data.user){
            console.log('THIS IS THE RES: ', res)
        }
        else{
            console.log("SOMETHING TERRIBLE HAS HAPPENED")
        }
    })
    // .then((res)=>({ success: true, message: 'USER EXISTS', data: res.data })).catch((res) => ({ success: false, message: null, data: res }))
}
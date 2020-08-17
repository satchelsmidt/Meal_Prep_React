import { axiosAuthInstance } from '../config/axios'

export function login(username, password) {
    console.log('started login function')
    console.log('USERNAM EGIVEN: ', username)
    console.log('PASSWORD FIVEN: ', password)
    return axiosAuthInstance.post('/login', {
            username,
            password,
    }).then((res) => ({ success: true, message: 'Successful Login', data: res.data })).catch((res) => ({ success: false, message: null, data: res }))
}

export function signup(username, password) {
    return axiosAuthInstance.post('/signup', {
        params: {
            username,
            password,
        }
    }).then((res) => ({ success: true, message: 'Successful Signup', data: res.data })).catch((res) => ({ success: false, message: res.response.data.message.errors[0], data: res }))
}

export function checkSession() {
    return axiosAuthInstance.get('/user')
        .then((res) => {
            if (res.data.user) {
                console.log('res.user.data was found')
                // console.log('THIS IS THE RES: ', res)
            }
            else {
                console.log('res.user.data was NOT found')
                // console.log("SOMETHING TERRIBLE HAS HAPPENED")
            }
        })
    // .then((res)=>({ success: true, message: 'USER EXISTS', data: res.data })).catch((res) => ({ success: false, message: null, data: res }))
}
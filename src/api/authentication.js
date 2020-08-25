import { axiosAuthInstance } from '../config/axios'

// export function login(username, password) {
//     console.log('started login function')
//     return axiosAuthInstance.post('/login', {
//         username,
//         password,
//     }).then((res) => ({ success: true, message: 'Successful Login', data: res.data })).catch((res) => ({ success: false, message: null, data: res }))
// }

export function login(username, password) {
    console.log('started login function')
    return axiosAuthInstance.post('/login', {
        username,
        password,
    }).then((res) => {
        console.log('response from strange axios middle: ', res)
        res.send(res)
    })
    // .catch((res) => ({ success: false, message: null, data: res }))
}

export function signup(username, password) {
    return axiosAuthInstance.post('/signup', {
        username,
        password,
    }).then((res) => ({ success: true, message: 'Successful Signup', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))
}

export function checkSession() {
    return axiosAuthInstance.get('/user')
        .then((res) => ({ success: true, message: 'Successful Signup', data: res.data })).catch((res) => ({ success: false, message: res, data: res }))


    //     if (res.data.username) {
    //         // console.log('res.user.data was found')
    //         // console.log('THIS IS THE RES: ', res)
    //     }
    //     else {
    //         // console.log('res.user.data was NOT found')
    //         // console.log('THIS IS THE RES: ', res)
    //     }
    // })
    // .then((res)=>({ success: true, message: 'USER EXISTS', data: res.data })).catch((res) => ({ success: false, message: null, data: res }))
}
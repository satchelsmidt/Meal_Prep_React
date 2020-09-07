import React from '../node_modules/@types/react'

export const AuthContext = React.createContext({
    loggedIn: false, 
    user: {},
    handleLogin: ()=>{},
})
import React from 'react'


export const AuthContext = React.createContext({
    loggedIn: false, 
    user: {},
    setLogin: ()=>{}
})
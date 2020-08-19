import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect, Switch, useHistory } from 'react-router-dom'
import { AuthContext } from './AuthContext'


export default function PrivateRoute({ children, ...rest }) {

    const auth = useContext(AuthContext)

    // A wrapper for <Route> that redirects to the login
    // screen if you're not yet authenticated.
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.loggedIn ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                // state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

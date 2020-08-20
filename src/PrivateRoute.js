import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './AuthContext'

export const PrivateRoute = ({ component: Component, ...rest }) => {

    const auth = useContext(AuthContext)

    return (
      <Route
        {...rest}
        render={props =>
          auth.loggedIn ? (
            <Component {...props} />
          ) : (
              <Redirect
                to={{ pathname: '/login', state: { from: props.location } }}
              />
            )
        }
      />
    );
  };
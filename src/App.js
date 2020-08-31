import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Main from './screens/Main'
import CreatePlan from './screens/CreatePlan/00_CreatePlan'
import SinglePlan from './screens/SinglePlan'
import SamplePlan from './screens/SamplePlan'
import AllPlans from './screens/AllPlans'
import Login from './screens/Auth/Login'
import Signup from './screens/Auth/Signup'
import Password from './screens/Auth/ForgotPassword'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { checkSession } from './api/authentication'
import { AuthContext } from './AuthContext'
import { PrivateRoute } from './PrivateRoute'

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  // const [loggedIn, setLoggedIn] = useState(true)
  // const [user, setUser] = useState(1)

  useEffect(() => {

    //if user is not logged in, check to see if session exists
    if (!loggedIn) {
      console.log('Checking session...')
      checkSession().then((res) => {
        console.log('Response from session check: ', res)

        //if our session check returns false for isAuthenticated, log out user
        if (!res.success) {
          console.log('user not logged in, logging out')
          // setLoggedIn(false)
        }
        //otherwise, log them in and redirect to home page
        else {
          console.log('Existing Session Detected')
          setLoggedIn(true)
          setUser(res.data)
        }
      })
    }

  }, [loggedIn])

  const handleLogin = async (res) => {
    console.log('this is the login handler: ')
    console.log(res)
    setUser(res.data)
    await setLoggedIn(res.success)
  }

  return (
    <AuthContext.Provider value={{ loggedIn: loggedIn, user: user, handleLogin: handleLogin }}>
      <BrowserRouter>
        <Container>
          <Header></Header>
          <Switch>
            {/* PROTECTED  ROUTES*/}
            <PrivateRoute exact path='/' component={Main} />
            <PrivateRoute path='/all' component={AllPlans} />
            <PrivateRoute path='/create' component={CreatePlan} />
            <PrivateRoute path='/plan' component={SinglePlan} />

            {/* PUBLIC ROUTES*/}
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route path='/password' component={Password} />
            <Route path='/sample' component={SamplePlan} />
          </Switch>
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}


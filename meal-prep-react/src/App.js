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
import { AuthContext } from './context/AuthContext'
import { PrivateRoute } from './components/PrivateRoute'

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {

    //if user is not logged in, check to see if session exists
    if (!loggedIn) {
      console.log('Checking session...')
      checkSession().then((res) => {
        console.log('Response from session check: ', res)

        if (!res.success) {
          console.log('No user logged in')
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
    setUser(res.data)
    await setLoggedIn(res.success)
  }

  return (
    <AuthContext.Provider value={{ loggedIn: loggedIn, user: user, handleLogin: handleLogin }}>
      <BrowserRouter>
        <Container style={styles.appContainer}>
          <Header></Header>
          <Container style={styles.contentContainer}>
            <Switch>
              {/* PROTECTED  ROUTES*/}
              <PrivateRoute exact path='/' component={Main} />
              <PrivateRoute path='/all' component={AllPlans} />
              <PrivateRoute path='/create' component={CreatePlan} />
              <PrivateRoute path='/single_plan/:planId' component={SinglePlan} />

              {/* PUBLIC ROUTES*/}
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route path='/password' component={Password} />
              <Route path='/sample' component={SamplePlan} />
            </Switch>
          </Container>
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
const styles = {
  appContainer:{
    'height': '100%'
  },
  contentContainer: {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'background': '#5D737E',
    'opacity': '.90',
    'padding': '20px 10px',
    'position': 'relative',
    'minHeight': '100%'
  },
}


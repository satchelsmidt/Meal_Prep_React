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
  // const [user, setUser] = useState(null)

  useEffect(() => {
    console.log('logged in state (Main): ', loggedIn)

    // checkSession().then((res) => {
    //   console.log('session has been checked')
    //   // console.log('the state of our user: ', validUser)
    //   // console.log('this is it:', res)
    // })
  })

  const toggleLogin = () => {
    if (!loggedIn) {
      setLoggedIn(true)
    }
    else {
      setLoggedIn(false)
    }
  }

  return (
    <AuthContext.Provider value={{ loggedIn: loggedIn, setLogin: toggleLogin }}>
      <BrowserRouter>
        <Container>
          <Header></Header>
          <Switch>
            {/* PUBLIC ROUTES*/}
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route path='/password' component={Password} />
            <Route path='/sample' component={SamplePlan} />

            {/* PROTECTED  ROUTES*/}
            <PrivateRoute exact path='/' component={Main} />
            <PrivateRoute path='/all' component={AllPlans} />
            <PrivateRoute path='/create' component={CreatePlan} />
            <PrivateRoute path='/plan' component={SinglePlan} />
          </Switch>
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}


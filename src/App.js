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
import { BrowserRouter, Route, Redirect, Switch, useHistory } from 'react-router-dom'
import { checkSession } from './api/authentication'
import { AuthContext } from './AuthContext'
import PrivateRoute from './PrivateRoute'

export default function App() {

  let history = useHistory()
  const [loggedIn, setLoggedIn] = useState(false)

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
      history.push("/login")
    }
  }

  return (
    <AuthContext.Provider value={{ loggedIn: loggedIn, setLogin: toggleLogin }}>
      <BrowserRouter>
        <Container>
          <Header></Header>
          {/* PUBLIC  */}
          <Route exact path='/login' component={Login}></Route>
          {/* PUBLIC  */}
          <Route exact path='/signup' component={Signup}></Route>
          {/* PUBLIC  */}

          <Switch>
            <Route exact path="/">
              {/* PROTECTED  */}
              <Redirect to='/home' />
            </Route>
            {/* PROTECTED  */}
            <PrivateRoute exact path='/home' component={Main}>

            </PrivateRoute>
            {/* PROTECTED  */}
            <PrivateRoute exact path='/sample' component={SamplePlan}>

            </PrivateRoute>
            {/* PROTECTED  */}
            <PrivateRoute exact path='/all' component={AllPlans}>

            </PrivateRoute>

            <PrivateRoute exact path='/password' component={Password}>

            </PrivateRoute>
            {/* PROTECTED  */}
            <PrivateRoute exact path='/create' component={CreatePlan}>
              <CreatePlan></CreatePlan>
            </PrivateRoute>
            {/* PROTECTED  */}
            <PrivateRoute exact path='/plan' component={SinglePlan}>

            </PrivateRoute>
          </Switch>

        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  );

}


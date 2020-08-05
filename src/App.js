import React from 'react';
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
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <Route exact path="/">
          <Redirect to='/home'/>
        </Route>
        <Route exact path='/home' component={Main}></Route>
        <Route exact path='/sample' component={SamplePlan}></Route>
        <Route exact path='/all' component={AllPlans}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/password' component={Password}></Route>
        <Route exact path='/create' component={CreatePlan}></Route>
        <Route exact path='/plan' component={SinglePlan}></Route>
      </Container>
    </BrowserRouter>
  );
}
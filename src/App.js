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
import { BrowserRouter, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <Route path='/home' component={Main}></Route>
        <Route path='/sample' component={SamplePlan}></Route>
        <Route path='/all' component={AllPlans}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Signup}></Route>
        <Route path='/password' component={Password}></Route>
        <Route path='/create' component={CreatePlan}></Route>
        <Route path='/plan' component={SinglePlan}></Route>
      </Container>
    </BrowserRouter>
  );
}
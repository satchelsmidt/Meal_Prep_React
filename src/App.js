import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Main from './components/pages/Main'
import CreatePlan from './components/pages/CreatePlan/00_CreatePlan'
import AddRecipes from './components/pages/AddRecipes'
import Plan from './components/pages/Plan'
import SamplePlan from './components/pages/SamplePlan'
import { BrowserRouter, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <Route exact path='/' component={Main}></Route>
        <Route path='/create' component={CreatePlan}></Route>
        <Route path='/add' component={AddRecipes}></Route>
        <Route path='/plan' component={Plan}></Route>
        <Route path='/sample' component={SamplePlan}></Route>
      </Container>
    </BrowserRouter>
  );
}
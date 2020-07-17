import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import PageContent from './components/content/PageContent'

export default function App() {
  return (
    <Container>
      <div className="App">
        <Header></Header>
        <PageContent></PageContent>
      </div>
    </Container>
  );
}
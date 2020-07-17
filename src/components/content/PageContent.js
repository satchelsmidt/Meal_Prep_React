import React from 'react';
import { Container } from 'react-bootstrap'
import Landing from '../content/Landing'
import PlanStart from './PlanStart'
import PlanTimes from './PlanTimes'
import RecipeTypes from './RecipeTypes'
import RecipeRestrictions from './RecipeRestrictions'

export default function PageContent() {
    return (
        <Container style={styles.contentContainer}>
            <Landing></Landing>
            <PlanStart></PlanStart>
            <PlanTimes></PlanTimes>
            <RecipeTypes></RecipeTypes>
            <RecipeRestrictions></RecipeRestrictions>
        </Container>
    );
}

const styles = {
    p: {
        'color': 'black'
    },
    contentContainer: {
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'height': '400px',
        'margin-top': '170px',
        'margin-bottom': '200px'
    }
}
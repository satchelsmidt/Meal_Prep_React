import React from 'react';
import { Container } from 'react-bootstrap'

export default function AllPlans() {

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>This is where you will view ALL RECIPE PLANS for user</p>
        </Container>
    );
}

const styles = {
    p: {
        'textAlign': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': '400px'
    }
}
import React from 'react';
import { Container } from 'react-bootstrap'
import BigButton from '../components/BigButton'
import { NavLink } from 'react-router-dom'

export default function Main() {
    return (
        <Container style={styles.formContainer}>
            <h5 style={styles.text}>Welcome to Preppy!</h5>

            <p style={styles.text}>Prepping your meals ahead of time is a great way to eat healthier, save money, and organize your time -- but getting started can be tricky.</p>

            <p style={styles.text}> This tool will help you create a weeklong meal plan that fits <strong>your</strong> schedule, with recipes that work with your dietary needs and preferences.</p>

            <p style={styles.text}>Click 'Create Plan' to get started!</p>
            <NavLink to="/create"><BigButton text="Create Plan"></BigButton></NavLink>
        </Container>
    );
}

const styles = {
    text: {
        'textAlign': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '60%',
        'margin': '75px',
        'padding': '20px'
    }
}
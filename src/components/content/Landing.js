import React from 'react';
import { Container } from 'react-bootstrap'
import BigButton from '../BigButton'


export default function Landing() {

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Hello, welcome to Prepper. This tool will let you select the recipes that you'd like to cook throughout the week, and generate a  prep plan for you based on your availablity each day.</p>
            <p style={styles.p}>Click 'Create Plan' to start creating your perfect meal plan.</p>
            <BigButton text="Create Plan"></BigButton>
        </Container>
    );
}

const styles = {
    p: {
        'text-align': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'height': '400px'
    }
}
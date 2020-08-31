import React from 'react';
import { Container } from 'react-bootstrap'
import SmallButton from '../components/SmallButton'

export default function Plan() {

    const retrievePlan = ()=>{
        console.log('clicked button')
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>This is where you will view your recipe plan</p>
            <SmallButton onClick={()=>retrievePlan()}></SmallButton>
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
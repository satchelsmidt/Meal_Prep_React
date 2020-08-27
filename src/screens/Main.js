import React, {useContext, useEffect} from 'react';
import { Container } from 'react-bootstrap'
import BigButton from '../components/BigButton'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthContext'


export default function Main() {

    const auth = useContext(AuthContext)

    useEffect(()=>{
        console.log('this is our current user: ', auth.user)
    }, [auth.user])

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Hello, welcome to Prepper. This tool will let you select the recipes that you'd like to cook throughout the week, and generate a  prep plan for you based on your availablity each day.</p>
            <p style={styles.p}>Click 'Create Plan' to start creating your perfect meal plan.</p>
            <NavLink to="/create"><BigButton text="Create Plan"></BigButton></NavLink>
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
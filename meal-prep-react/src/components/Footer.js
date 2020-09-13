import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Github from '../assets/images/github.png'

export default function Footer() {
    return (
        <Navbar bg="light" expand="lg" className='footer' style={styles.navbar}>
            <Navbar.Text style={styles.text}>© 2020 Copyright Satchel Smidt</Navbar.Text>
            <Nav className="ml-auto">
                <Container>
                <img src={Github} alt="Github Logo" style={styles.logo} />
                <a style={styles.link} rel="noopener noreferrer" href="https://github.com/satchelsmidt/Meal_Prep_App" target="_blank">Github Repo</a>
                </Container>
            </Nav>
        </Navbar >
    )
}

const styles = {
    navbar: {
        'position': 'relative',
        'zIndex': '50'
    },
    text: {
        'fontSize': '.75em',
    },
    link: {
        'color': 'grey',
        'fontSize': '.75em',
    },
    logo:{
        'height': '.75em',
        'width': '.75em',
        'marginRight': '5px'
    },
    footerContainer:{
        'display:': 'flex'
    }
}


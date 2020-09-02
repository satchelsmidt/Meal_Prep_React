import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../AuthContext'
import { logout } from '../api/authentication'

export default function Header() {

    const auth = useContext(AuthContext)

    const handleLogout = () => {
        logout()
        .then((res)=>{
            auth.handleLogin(res.success)
        })
    }

    //IF USER IS LOGGED IN
    if (auth.loggedIn) {
        return (
            <Navbar collapseOnSelect bg="light" expand="lg" className='navbar' style={styles.navbar}>
                <LinkContainer to="/">
                    <Navbar.Brand>Preppy</Navbar.Brand>
                </LinkContainer >

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Create Plan</Nav.Link>
                        </LinkContainer >
                        <LinkContainer to="/all">
                            <Nav.Link>View All Plans</Nav.Link>
                        </LinkContainer >
                        <Button variant="outline-primary" onClick={() => handleLogout()}>Logout</Button >
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }

    //USER NOT LOGGED IN
    return (
        <Navbar bg="light" expand="lg" className='navbar' style={styles.navbar}>
            <LinkContainer to="/home">
                <Navbar.Brand>Preppy</Navbar.Brand>
            </LinkContainer >

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/sample">
                        <Nav.Link>View Sample Plan</Nav.Link>
                    </LinkContainer >
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                        <LinkContainer to="/login">
                            <NavDropdown.Item>Login</NavDropdown.Item>
                        </LinkContainer >
                        <LinkContainer to="/signup">
                            <NavDropdown.Item>Sign Up</NavDropdown.Item>
                        </LinkContainer >
                        <NavDropdown.Divider />
                        <LinkContainer to="/password">
                            <NavDropdown.Item>Forgot Password?</NavDropdown.Item>
                        </LinkContainer >
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

const styles = {
    navbar: {
        'marginTop': '5%'
    }
}
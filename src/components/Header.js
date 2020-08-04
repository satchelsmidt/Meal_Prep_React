import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

export default function Header() {
    return (
        <Navbar bg="light" expand="lg" className='navbar' style={styles.navbar}>
            <LinkContainer to="/home">
                <Navbar.Brand>Preppy</Navbar.Brand>
            </LinkContainer >

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/home">
                        <Nav.Link>Create Plan</Nav.Link>
                    </LinkContainer >
                    <LinkContainer to="/sample">
                        <Nav.Link>View Sample Plan</Nav.Link>
                    </LinkContainer >
                    <LinkContainer to="/all">
                        <Nav.Link>View All Plans</Nav.Link>
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
                        <LinkContainer to="#logout">
                            <NavDropdown.Item>Log Out</NavDropdown.Item>
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
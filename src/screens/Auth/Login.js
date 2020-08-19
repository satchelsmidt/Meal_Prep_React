import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import { login } from '../../api/authentication'
import { AuthContext } from '../../AuthContext'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useContext(AuthContext)

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password).then((res) => {
            if (!res.success) {
                console.log('something went horribly wrong')
            }
            else {
                console.log('User Successfully Logged in.')
                auth.setLogin()

                // return <Redirect to="/home" />
            }
        })
    }

    return (
        <Container className="Login" style={styles.formContainer}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email" bssize="large">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password" bssize="large">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form.Group>
                <Button block bssize="large" disabled={!validateForm()} type="submit">
                    Login
                    </Button>
            </Form>
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
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { signup } from '../../api/authentication'

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState("");

    const validateForm = () => {

        return (email.length > 0 && password.length > 0);
    }

    const handleSubmit = (event) => {
        if (password !== passwordValid) {
            event.preventDefault();
            alert('passwords must match');
            setPassword("")
            setPasswordValid("")
            return false;
        }

        event.preventDefault();
        signup(email, password).then((res) => {
            if (!res.success) {
                alert('Login has failed. Recheck your credentials');
                //TODO:Prevent user from accessing other pages (return from function)
            }

            //TODO: route user to create plan page
            console.log('the response: ', res)
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
                <Form.Group bssize="large">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Form.Label>Re-enter password</Form.Label>
                    <Form.Control
                        value={passwordValid}
                        onChange={e => setPasswordValid(e.target.value)}
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
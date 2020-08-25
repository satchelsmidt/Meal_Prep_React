import React, { useState, useEffect, useContext } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import { login } from '../../api/authentication'
import { AuthContext } from '../../AuthContext'
import axios from 'axios'

export default function Login(props) {

    const from = props.location.state || { from: { pathname: '/' } }

    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useContext(AuthContext)

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/auth/login', { username: email, password: password }, {
            withCredentials: true
        }).then((req, res) => {
            // console.log('mnaybe a response idk: ', res)
            // console.log('maybe a request who knows: ', req)
            // res.json(req.user);
        })

        
        // login(email, password).then(async (res) => {
        //     if (!res.status === 200) {
        //         console.log('something went horribly wrong')
        //     }
        //     else {
        //         console.log('User Successfully Logged in.')
        //         console.log('This is the data returned from login: ', res)
        //         await auth.setLogin(res.data)
        //         setRedirectToReferrer(true)
        //         // auth.setUser()
        //     }
        // })
    }

    if (redirectToReferrer) {
        return <Redirect to={from} />;
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
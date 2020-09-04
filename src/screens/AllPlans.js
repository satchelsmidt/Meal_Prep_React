import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap'
import { findAllUserPlans } from '../api/plans'
import { AuthContext } from '../AuthContext'
import { NavLink } from 'react-router-dom'


export default function AllPlans() {

    const [plansLoaded, setPlansLoaded] = useState(false)
    const [plans, setPlans] = useState(null)

    const auth = useContext(AuthContext)


    useEffect(() => {
        findAllUserPlans(auth.user).then((res) => {
            console.log('response from all plans search: ', res)
            if (res.data.length === 0) {
                setPlans(false)
            }
            else {
                setPlans(res.data)
            }
        })
    }, [])


    if (plans === null) {
        return (
            <Container style={styles.formContainer}>
                <p>loading user plans</p>
            </Container>
        )
    }

    if (plans === false) {
        return (
            <Container style={styles.formContainer}>
                <p>No plans for current user. Create one now!</p>
            </Container>
        )
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>This is where you will view ALL RECIPE PLANS for user</p>
            {plans.map((plan, index) => { return <NavLink to={'/single_plan/' + plan.id}><p key={index}>View Details for plan {plan.id}, from {JSON.parse(plan.planDates)[0]} to {JSON.parse(plan.planDates)[6]}</p></NavLink> })}
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
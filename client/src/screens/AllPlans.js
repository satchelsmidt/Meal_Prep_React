import React, { useState, useEffect, useContext } from '../../node_modules/@types/react';
import { Container } from '../../node_modules/react-bootstrap/esm'
import { findAllUserPlans } from '../api/plans'
import { AuthContext } from '../AuthContext'
import { NavLink } from '../../node_modules/react-router-dom'


export default function AllPlans() {

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

    //if plan data is still fetching
    if (plans === null) {
        return (
            <Container style={styles.formContainer}>
                <p>loading user plans</p>
            </Container>
        )
    }
    //if user has not created any plans
    if (plans === false) {
        return (
            <Container style={styles.formContainer}>
                <p>No plans for current user. Create one now!</p>
            </Container>
        )
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Here is where you can view all plans you have created</p>
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
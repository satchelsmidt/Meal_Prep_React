import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap'
import { findAllUserPlans } from '../api/plans'
import { AuthContext } from '../context/AuthContext'
import { NavLink } from 'react-router-dom'
import moment from 'moment'

export default function AllPlans() {

    const [plans, setPlans] = useState(null)
    const auth = useContext(AuthContext)

    useEffect(() => {
        findAllUserPlans(auth.user).then((res) => {
            if (res.data.length === 0) {
                setPlans(false)
            }
            else {
                setPlans(res.data)
            }
        })
    }, [auth.user])

    //if plan data is still fetching
    if (plans === null) {
        return (
            <Container style={styles.formContainer}>
                <p style={styles.text}>Loading user plans</p>
            </Container>
        )
    }
    //if user has not created any plans
    if (plans === false) {
        return (
            <Container style={styles.formContainer}>
                <p style={styles.text}>Looks like you haven't created any plans yet. Create one now!</p>
            </Container>
        )
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.text}>Here are all plans you have created! </p>
            <p style={styles.text}>Click on any plan to view its calendar page.</p>
            <Container style={styles.plansContainer}>
                {plans.map((plan, index) => { return <NavLink key={index} to={'/single_plan/' + plan.id} style={styles.linkStyle}><p key={index}>View plan from {moment(JSON.parse(plan.planDates)[0]).format("dddd, MMMM Do")} to {moment(JSON.parse(plan.planDates)[6]).format("dddd, MMMM Do")}</p></NavLink> })}
            </Container>
        </Container>
    );
}

const styles = {
    text: {
        'textAlign': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '60%',
        'margin': '75px',
        'padding': '20px'
    },
    plansContainer: {
        'margin': '20px',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center'
    },
    linkStyle: {
        'color': 'white',
        'fontWeight': 'bold'
    }
}
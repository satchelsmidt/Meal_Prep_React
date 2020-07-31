import React from 'react'
import Calendar from './../Calendar'
import { Container } from 'react-bootstrap'


export default function SamplePlan() {
    return (
        <Container style={styles.calendarContainer}>
            <Calendar startDate={'2020-01-01'} endDate={'2020-01-08'}></Calendar>
        </ Container>
    )
}

const styles={
    calendarContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': '500px'
    }
}


import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function PlanStart() {

    const [currentDate, setCurrentDate] = useState(new Date())

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Select a start date for your plan:</p>
            {/* TODO: Consider using inline version: https://reactdatepicker.com/*/}
            <DatePicker selected={currentDate} onChange={console.log('changed!')} />
        </Container>
    );
}

const styles = {
    p: {
        'text-align': 'center',
        'color': 'white'
    },
    formContainer: {
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'height': '400px'
    }
}
import React, { useState } from '../../../node_modules/@types/react';
import { Container } from '../../../node_modules/react-bootstrap/esm'
import DatePicker from '../../../node_modules/react-datepicker/dist'
import "./node_modules/react-datepicker/dist/react-datepicker.css";
import SmallButton from '../../components/SmallButton'

export default function PlanStart(props) {

    const [currentDate, setCurrentDate] = useState(new Date())

    const handleDateSelect = (date) => {
        setCurrentDate(date)
        props.handleChange(date)
    }

    const saveAndSubmit = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Select a start date for your plan:</p>
            {/* TODO: Consider using inline version: https://reactdatepicker.com/*/}
            <DatePicker selected={currentDate} onChange={(date) => handleDateSelect(date)} updateTimeBoxes={props.updateTimeBoxes} />
            <SmallButton text="Next" onClick={(e) => { saveAndSubmit(e) }}></SmallButton>
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
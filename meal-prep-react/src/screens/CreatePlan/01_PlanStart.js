import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
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
            <p style={styles.p}>First, select a start date for your plan:</p>
            {/* TODO: Consider using inline version: https://reactdatepicker.com/*/}
            <DatePicker popperPlacement="bottom" popperModifiers={{
                flip: {
                    behavior: ["bottom"] // don't allow it to flip to be above
                },
                preventOverflow: {
                    enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                },
                hide: {
                    enabled: false // turn off since needs preventOverflow to be enabled
                }
            }} selected={currentDate} onChange={(date) => handleDateSelect(date)} updateTimeBoxes={props.updateTimeBoxes} />
            <SmallButton text="Next Step" onClick={(e) => { saveAndSubmit(e) }}></SmallButton>
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
        'width': '60%',
        'margin': '75px',
        'padding': '20px'
    }
}
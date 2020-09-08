import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import SmallButton from '../../components/SmallButton'
import DateTimePicker from '../../components/DateTimePicker'

export default function PlanTimes(props) {

    let [step, setStep] = useState(0)

    const nextStep = () => {
        setStep(step = step + 1)
    }

    const prevDayStep = () => {
        setStep(step = step - 1)
    }

    const saveAndSubmit = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    const planDays = () => {
        switch (step) {
            case 0:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                />

            case 1:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevDayStep={() => prevDayStep()}
                    prevStep={() => props.prevStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                />


            case 2:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevDayStep={() => prevDayStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                />

            case 3:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevDayStep={() => prevDayStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                />

            case 4:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevDayStep={() => prevDayStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                />

            case 5:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevDayStep={() => prevDayStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                />

            case 6:
                return <DateTimePicker
                    prevDayStep={() => prevDayStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                />
            default:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                />
        }
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.text}>Now select the times you are available to cook on each day of your plan</p>
            <p style={styles.text}>(Click the arrow next to the date to cycle through the days of your plan)</p>

            {planDays()}
            <Container style={styles.rowContainer}>
                <SmallButton text="Previous Step" onClick={() => { props.prevStep() }}></SmallButton>
                <SmallButton text="Next Step" onClick={(e) => { saveAndSubmit(e) }}></SmallButton>
            </Container>
        </Container>
    );
}

const styles = {
    text: {
        'textAlign': 'center',
        'color': 'white'
    },
    pNoBottom: {
        'textAlign': 'center',
        'color': 'black',
        'margin': '0',
        'fontWeight': 'bold'
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
    rowContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-around',
    },
    iconButton: {
        'color': 'black',
        'textDecoration': 'none'
    },
    iconLeft: {
        'margin': '10px',
        'fontSize': '20px'
    },
    iconRight: {
        'margin': '10px',
        'fontSize': '20px'
    },
}
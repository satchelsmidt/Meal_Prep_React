import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import SmallButton from '../../SmallButton'
import DateTimePicker from '../../DateTimePicker'


export default function PlanTimes(props) {

    let [step, setStep] = useState(0)
    // let currentTimeBlocks = props.planTimes[step]


    const nextStep = () => {
        setStep(step = step + 1)
    }

    const prevStep = () => {
        setStep(step = step - 1)
    }

    // const addTimeBox = () => {
    //     props.updateTimeBoxes(step)
    // }

    // const mapTimes = currentTimeBlocks.map(() => {
    //     console.log('FUNCTION RUN', currentTimeBlocks)
    //     console.log('updated plans in total: ', props.planTimes)
    //     console.log('whatever our default start time is: ', currentTimeBlocks[0][0])
    //     console.log('whatever our default end time is (should be same as start): ', currentTimeBlocks[0][1])
    //     return (<TimeRange startTime={currentTimeBlocks[0][0]} endTime={currentTimeBlocks[0][1]} />)
    // })

    // const [startDate, setStartDate] = useState(new Date());

    // Date.prototype.addDays = function (days) {
    //     var date = new Date(this.valueOf());
    //     date.setDate(date.getDate() + days);
    //     return date;
    // }

    // const updateTimeBoxes = async () => {
    //     // let newTime = new Date()
    //     console.log('reached')
    //     console.log('this is the current time (prob 1): ', props.planTimes[step])
    //     await props.planTimes[step].concat(1)


    //     console.log('updated? ', props.planTimes[step])

    // }

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
                // handleChange={(date) => handleInputChange(date)}
                />

            case 1:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                // handleChange={(date) => handleInputChange(date)}
                />


            case 2:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                // handleChange={(date) => handleInputChange(date)}
                />

            case 3:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                // handleChange={(date) => handleInputChange(date)}
                />

            case 4:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                // handleChange={(date) => handleInputChange(date)}
                />

            case 5:

                return <DateTimePicker
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                // handleChange={(date) => handleInputChange(date)}
                />

            case 6:

                return <DateTimePicker
                    prevStep={() => prevStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                // handleChange={(date) => handleInputChange(date)}
                />
            default:
                return <DateTimePicker
                    nextStep={() => nextStep()}
                    date={props.planDates[step]}
                    planTimes={props.planTimes}
                    addTimeBox={props.addTimeBox}
                    updateTimeBoxes={props.updateTimeBoxes}
                    step={step}
                // handleChange={(date) => handleInputChange(date)}
                />
        }
    }

    return (
        <Container style={styles.formContainer}>
            <p style={styles.p}>Select the times you are available to cook for each day of your plan:</p>

            {planDays()}

            <SmallButton text="Next" onClick={(e) => { saveAndSubmit(e) }}></SmallButton>
        </Container>
    );
}

const styles = {
    p: {
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
        'height': '400px'
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
    topContainer: {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        // 'height': '400px'
    },
}
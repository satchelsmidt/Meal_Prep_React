import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import PlanStart from './01_PlanStart'
import PlanTimes from './02_PlanTimes'
import RecipeTypes from './03_RecipeTypes'
import RecipeRestrictions from './04_RecipeRestrictions'
import moment from 'moment';

export default function CreatePlan() {

    let [step, setStep] = useState(1)
    const [startDate, setStartDate] = useState(new Date())
    const [planDates, setPlanDates] = useState([])
    const [planTimes, setPlanTimes] = useState([])
    const [planCuisines, setPlanCuisines] = useState([])
    const [planRestrictions, setPlanRestrictions] = useState([])

    const nextStep = () => {
        //if we are submitting first step, populate planDates with 7 day range starting from selected start date
        if (step === 1) {
            // TODO: do this in seperate module
            //initialize start and end of plan
            let start = moment(startDate, 'YYYY-MM-DD')
            let end = moment(start).add(7, 'days')

            //placeholder arr to hold days
            let planDatesCopy = []
            let planTimesCopy = []

            //loop from start to finish, adding to dates arr as we go
            while (start < end) {
                planDatesCopy.push(start.format('YYYY-MM-DD'))
                let newDate = moment(start).add(1, 'days')
                start = newDate

                //add to our plan times array as well (populate with empty time blocks)
                planTimesCopy.push([[1]])
            }

            //set state of plan dates to our new arr
            setPlanDates(planDatesCopy)
            setPlanTimes(planTimesCopy)
        }
        setStep(step = step + 1)
    }

    const prevStep = () => {
        setStep(step = step - 1)
    }


    const handleInputChange = async (date) => {
        //set our startDate on the appropriate step
        if (step === 1) {
            console.log('our date: ', date)
            setStartDate(date)
        }
    }

    const updateTimeBoxes = async (step) => {
        console.log('did this pass correctly: ', step)
        
        //shallow copy of times
        let timesCopy = [...planTimes]
        //shallow copy of item to mutate
        let time = timesCopy[step]

        console.log('this is our TIMES ARRAY: ', timesCopy)
        console.log('this is our thing (should be 1): ', time)

        //add value
        time.push([1])

        //put timeslot back into original array
        timesCopy[step] = time

        //modify state of time array
        await setPlanTimes(timesCopy)

        console.log('modified array:', planTimes)

        // console.log('reached (part 2)')
        // let newTime = new Date()
        // console.log('this is the current time (prob 1): ', planTimes[step])


        // setPlanTimes([...planTimes[step]].concat(newTime))
    }

    useEffect(() => {
        console.log('maybe not async: ', startDate)
        console.log('maybe not async: ', planDates)
        console.log('current step: ', step)
    })

    const formSteps = () => {
        switch (step) {
            case 1:
                return <PlanStart
                    nextStep={() => nextStep()}
                    // handleChange={(date) => setPlanDate(planDates.push(date))}
                    handleChange={(date) => handleInputChange(date)}
                />
            case 2:
                return <PlanTimes
                    startDate={startDate}
                    planDates={planDates}
                    planTimes={planTimes}
                    updateTimeBoxes={(step) => updateTimeBoxes(step)}
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    handleChange={(dates) => handleInputChange(dates)}
                />
            case 3:
                return <RecipeTypes
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    handleChange={() => handleInputChange()}
                />
            case 4:
                return <RecipeRestrictions
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    handleChange={() => handleInputChange()}
                />
            case 5:
                return <p>What the heck</p>
        }
    }



    return (
        <Container style={styles.contentContainer}>
            {formSteps()}
        </Container>
    );
}

const styles = {
    p: {
        'color': 'black'
    },
    contentContainer: {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': '400px',
        'marginBottom': '200px'
    }
}
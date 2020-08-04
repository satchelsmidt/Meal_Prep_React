import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import PlanStart from './01_PlanStart'
import PlanTimes from './02_PlanTimes'
import RecipeTypes from './03_RecipeTypes'
import RecipeRestrictions from './04_RecipeRestrictions'
import moment from 'moment';
import AddRecipes from './05_AddRecipes'

export default function CreatePlan() {

    let [step, setStep] = useState(1)
    const [startDate, setStartDate] = useState(new Date())
    const [planDates, setPlanDates] = useState([])
    const [planTimes, setPlanTimes] = useState([])
    const [planCuisines, setPlanCuisines] = useState([])
    const [planIntolerances, setPlanIntolerances] = useState([])
    const [planDiets, setPlanDiets] = useState([])


    const nextStep = () => {
        //if we are submitting first step, populate planDates with 7 day range starting from selected start date
        if (step === 1) {
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
                planTimesCopy.push([[new Date(), new Date()]])
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
            setStartDate(date)
        }
    }

    const addTimeBox = async (dayStep) => {
        //shallow copy of times
        let timesCopy = [...planTimes]
        //shallow copy of item to mutate
        let time = timesCopy[dayStep]

        //add default value
        time.push([new Date(), new Date()])

        //put timeslot back into original array
        timesCopy[dayStep] = time

        //modify state of time array
        await setPlanTimes(timesCopy)
    }

    const updateTimeBoxes = async (dayStep, timeStep, date, place) => {

        //shallow copy of times
        let timesCopy = [...planTimes]
        //shallow copy of item to mutate
        let time = timesCopy[dayStep][timeStep][place]

        //add new value
        time = date

        //put timeslot back into original array
        timesCopy[dayStep][timeStep][place] = time

        //modify state of time array
        await setPlanTimes(timesCopy)
    }

    const addNewCuisine = async (cuisine) => {
        //shallow copy of cuisines
        let cuisinesCopy = [...planCuisines]

        //add cuisine to copy
        cuisinesCopy.push(cuisine)

        //modify state of cuisines arr
        await setPlanCuisines(cuisinesCopy)
    }

    const addNewIntolerance = async (intolerance) => {
        //shallow copy of restrictions
        let intolerancesCopy = [...planIntolerances]

        //add restriction to copy
        intolerancesCopy.push(intolerance)

        //modify state of restrictions arr
        await setPlanIntolerances(intolerancesCopy)
    }

    const addNewDiet = async (diet) => {
        //shallow copy of restrictions
        let dietsCopy = [...planDiets]

        //add restriction to copy
        dietsCopy.push(diet)

        //modify state of restrictions arr
        await setPlanDiets(dietsCopy)
    }

    useEffect(() => {
        console.log('beginning date of our plan (stored): ', startDate)
        console.log('list of days for our plan (stored): ', planDates)
        console.log('list of TIMES for our plan (stored): ', planTimes)
        console.log('current step: ', step)
        console.log('OUR CUISINES (MOST RECENT): ', planCuisines)
        console.log('OUR Intoleranecs (MOST RECENT): ', planIntolerances)
        console.log('OUR Diets (MOST RECENT): ', planDiets)
    })

    const formSteps = () => {
        switch (step) {
            case 1:
                return <PlanStart
                    nextStep={() => nextStep()}
                    handleChange={(date) => handleInputChange(date)}
                />
            case 2:
                return <PlanTimes
                    startDate={startDate}
                    planDates={planDates}
                    planTimes={planTimes}
                    addTimeBox={addTimeBox}
                    updateTimeBoxes={(dayStep, timeStep, date, place) => updateTimeBoxes(dayStep, timeStep, date, place)}
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    handleChange={(dates) => handleInputChange(dates)}
                />
            case 3:
                return <RecipeTypes
                    cuisines={planCuisines}
                    addNewCuisine={(cuisine) => addNewCuisine(cuisine)}
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    handleChange={() => handleInputChange()}
                />
            case 4:
                return <RecipeRestrictions
                    diets={planDiets}
                    intolerances={planIntolerances}
                    addNewIntolerance={(intolerance) => addNewIntolerance(intolerance)}
                    addNewDiet={(diet) => addNewDiet(diet)}
                    nextStep={() => nextStep()}
                    prevStep={() => prevStep()}
                    handleChange={() => handleInputChange()}
                />
            case 5:
                return <AddRecipes
                    cuisines={planCuisines}
                    intolerances={planIntolerances}
                    diets={planDiets}
                    prevStep={() => prevStep()}
                    handleChange={() => handleInputChange()}
                />
            default:
                return <PlanStart
                    nextStep={() => nextStep()}
                    handleChange={(date) => handleInputChange(date)} />
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
        'height': 'auto',
        'marginBottom': '200px',
        'overflow': 'auto'
    }
}